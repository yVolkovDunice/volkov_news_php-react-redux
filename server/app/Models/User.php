<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users';

    protected $fillable = [ 'name', 'email', 'password', 'url_avatar'];

    public function posts () {
        return $this->hasMany(Post::class);
    }
}
