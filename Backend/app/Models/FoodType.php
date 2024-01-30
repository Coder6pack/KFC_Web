<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodType extends Model
{
    use HasFactory;
    protected $table = 'food_type';

    protected $fillable = [
        'name',
    ];

    public function food(){
        return $this->hasMany(Food::class);
    }
}
