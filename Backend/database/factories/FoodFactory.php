<?php

namespace Database\Factories;

use App\Models\Food;
use App\Models\FoodType;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Food>
 */
class FoodFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = Food::class;

     use WithFaker;
    public function definition(): array
    {
        $array = ['16','17','18','19'];
        return [
            'food_type_id' =>Arr::random($array),
            'name' =>$this->faker->name,
            'quantity' =>$this->faker->randomNumber,
            'price' =>$this->faker->randomDigit
        ];
    }
}
