<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartDetail extends Model
{
    use HasFactory;

    protected $table = 'cart_detail';

    protected $fillable = [
        'cart_id',
        'food_id',
    ];

    public function cart(){
        return $this->belongsTo(Cart::class);
    }

    public function food(){
        return $this->belongsTo(Food::class);
    }
}
