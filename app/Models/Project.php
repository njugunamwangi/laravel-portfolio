<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'image',
        'project_url',
        'active',
        'created_at',
        'updated_at',
    ];

    public function categories() : BelongsToMany {
        return $this->belongsToMany(Category::class);
    }
}
