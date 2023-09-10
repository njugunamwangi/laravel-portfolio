<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryProject extends Model
{
    use HasFactory;

    protected $table = 'category_project';
    const CREATED_AT = null;
    const UPDATED_AT = null;
    protected $fillable = [
        'project_id',
        'category_id'
    ];
}
