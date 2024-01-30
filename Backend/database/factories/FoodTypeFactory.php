<?php

namespace Database\Factories;

use App\Models\FoodType;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\WithFaker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FoodType>
 */
class FoodTypeFactory extends Factory
{
    protected $model = FoodType::class;

    use WithFaker;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' =>$this->faker->name
        ];
    }
}
