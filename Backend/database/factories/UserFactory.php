<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    
    protected $model = User::class;

    use WithFaker;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' =>$this->faker->name,
            'phone' => $this->faker->unique()->phoneNumber,
            'email' =>$this->faker->unique()->email,
            'account' => $this->faker->unique()->userName,
            'password'=> $this->faker->Hash::make('123456'),
            'role_id' =>$this->faker->numberBetween(1,2),
        ];
    }    
}
