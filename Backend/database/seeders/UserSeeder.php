<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            ['Lam Hoai Nhon','0123456789','nhon@gmail.com','admin123','123456','1'],
            ['Nguyen Van Thien','0987654321','thien@gmail.com','user123','123456','2']
        ];

        foreach($users as $user){
            DB::table('user')->insert([
                'name' => $users[0],
                'phone' => $user[1],
                'email' =>$user[2],
                'account' =>$user[3],
                'password' => $user[4],
                'role_id' =>$user[5],
                'updated_at' => date("Y-m-d H:i:s"),
                'created_at' => date("Y-m-d H:i:s")
            ]);
        }
    }
}
