<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;

    protected $table = 'bill';

    protected $fillable =[
        'user_id',
        'total'
    ];

    public function user(){
        return  $this->hasMany(User::class);
    }

    public function bill_detail(){
        return $this->hasMany(BillDetail::class);
    }
}
