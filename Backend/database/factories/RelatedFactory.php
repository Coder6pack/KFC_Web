<?php

namespace Database\Factories;

use App\Models\Related;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\WithFaker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Related>
 */
class RelatedFactory extends Factory
{

    protected $model = Related::class;
    use WithFaker;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'images_id' =>$this->faker->numberBetween(1,10),
            'path' =>$this->faker->imageUrl
        ];
    }
}
