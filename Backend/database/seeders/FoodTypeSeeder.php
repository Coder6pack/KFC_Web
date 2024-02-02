<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FoodTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $foodTypes = [
            'Breakfast',
            'Main Dishes',
            'Drinks',
            'Desserts'
        ];

        foreach($foodTypes as $foodType){
            DB::table('food_type')->insert([
                'name' => $foodType,
                'updated_at' => date("Y-m-d H:i:s"),
                'created_at' => date("Y-m-d H:i:s")
            ]);
        }
    }
}
