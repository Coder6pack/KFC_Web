<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WareHouse extends Model
{
    use HasFactory;

    protected $table = 'ware_house';

    protected $fillable = [
        'food_id',
        'quantity'
    ];

    public function food(){
        return $this->belongsTo(Food::class);
    }
}
