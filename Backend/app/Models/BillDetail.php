<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BillDetail extends Model
{
    use HasFactory;

    protected $table = 'bill_detail';

    protected $fillable = [
        'bill_id',
        'food_id',
        'quantity',
        'price'
    ];

    public function bill(){
        return $this->belongsTo(Food::class);
    }

    public function food(){
        return $this->belongsTo(Food::class);
    }

}
