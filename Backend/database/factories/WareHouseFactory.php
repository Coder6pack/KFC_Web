<?php

namespace Database\Factories;

use App\Models\WareHouse;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\WithFaker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\WareHouse>
 */
class WareHouseFactory extends Factory
{
    protected $model = WareHouse::class;
    use WithFaker;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
       
        return [
            'food_id' => '1' ,
            'quantity' =>$this->faker->numberBetween
        ];
    }
}
