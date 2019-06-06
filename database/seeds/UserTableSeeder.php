<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $user->name = 'baohq user';
        $user->email = 'user@gmail.com';
        $user->password = bcrypt('123456');
        $user->save();
        $user->roles()->attach(Role::where('name', 'user')->first());

        $admin = new User;
        $admin->name = 'baohq admin';
        $admin->email = 'admin@gmail.com';
        $admin->password = bcrypt('123456');
        $admin->save();
        $admin->roles()->attach(Role::where('name', 'admin')->first());
    }
}
