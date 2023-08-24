<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryProject extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id',
        'category_id',
        'created_at',
        'updated_at',
    ];
}
