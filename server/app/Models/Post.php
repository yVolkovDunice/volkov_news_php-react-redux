<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';

    protected $fillable = ['head', 'text', 'user_id', 'tags', 'image'];

    public function author () {
        return $this->belongsTo(user::class);
    }
}
