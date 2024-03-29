<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $table = 'image';

    protected $fillable = [
        'food_id',
        'path'
    ];

    public function food(){
        return  $this->belongsTo(Food::class);
    }

    public function related(){
        return $this->hasMany(Related::class);
    }
}
