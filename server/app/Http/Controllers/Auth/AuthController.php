<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

  public function register (Request $request) {

    $validator = Validator::make($request->all(), [
      'name' => 'required | string | max:250',
      'email' => 'required | string | email | unique:users',
      'password' => 'required | between:8, 255',
    ]);

    if ($validator->fails()) {
        return response (['errors' => $validator->errors()->all()], 422);
    }

    $user = User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => Hash::make($request->password),
      'url_avatar' => $request->url_avatar
    ]);

    if (!$user) {
        return response()->json('registration failed', 500);
    }

    return response()->json('registration succeeded', 201);
  }

  public function login(Request $request) {

    $validator = Validator::make($request->all(), [
      'email' => 'required | string | email',
      'password' => 'required | between:8, 255',
    ]);

    if ($validator->fails()) {
      return response (['errors' => $validator->errors()->all()], 422);
    }

    $data = [
      'email' => $request->email,
      'password' => $request->password,
    ];

    $user = user::where('email', $data['email'])->first();

    if (!$user) {
      // -----will add redirect to register-----
      return response('no user witch that email', 403);
    }

    if (!Hash::check($data['password'], $user->password)) {
      return response('Wrong password', 403);
    }

    $token = $user->createToken('asd');
    return response($token->accessToken, 200);
  }
}