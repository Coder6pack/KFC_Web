<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = 'user';

    protected $fillable = [
        'name',
        'phone',
        'email',
        'account',
        'password',
        'role_id'
    ];

    public function role(){
        return $this->belongsTo(Role::class);
    }

    public function bill(){
        return $this->belongsTo(Bill::class);
    }

    public function cart(){
        return $this->hasOne(Cart::class);
    }
}
