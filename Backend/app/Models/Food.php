<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    use HasFactory;

    protected $table = 'food';

    protected $fillable=[
        'food_type_id',
        'name',
        'quantity',
        'price',
    ];

    public function food_type(){
        return $this->belongsTo(FoodType::class);
    }

    public function bill_detail(){
        return $this->hasMany(BillDetail::class);
    }

    public function ware_house(){
        return $this->hasOne(WareHouse::class);
    }

    public function image(){
        return   $this->hasOne(Image::class);
    }

    public function cart_detail(){
        return $this->hasMany(CartDetail::class);
    }
}
