<?php

namespace Database\Factories;

use App\Models\Image;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\WithFaker;

class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Image::class;
    use WithFaker;
    public function definition(): array
    {
        static $order = 0;
        return [
            'food_id'=>$order++,
            'path' =>$this->faker->imageUrl
        ];
    }
}
