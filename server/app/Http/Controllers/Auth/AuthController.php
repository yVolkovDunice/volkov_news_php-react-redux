<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
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
        return response (['errors' => $validator->errors()->first()], 200);
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

    if (!Auth::attempt($data)) {
      return response('wrong password or email', 403);
    }

    $user = Auth::user();

    $token = $user->createToken('login')->accessToken;
    return response($token, 200);
  }
}