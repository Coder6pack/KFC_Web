<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Related extends Model
{
    use HasFactory;

    protected $table = 'related';

    protected $fillable = [
        'images_id',
        'path'
    ];

    public function image(){
        return $this->belongsTo(Image::class);
    }
}
