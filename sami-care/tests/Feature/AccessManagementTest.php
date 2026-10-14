<?php

namespace Tests\Feature;

use App\Http\Controllers\Backend\AccessController;
use App\Models\User;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Tests\TestCase;

class AccessManagementTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        $this->assertSame(':memory:', DB::connection()->getDatabaseName());
        Schema::create('users', function (Blueprint $table) {
            $table->id(); $table->string('first_name'); $table->string('last_name');
            $table->string('email')->unique(); $table->string('mobile')->nullable();
            $table->string('password'); $table->string('referral_code')->nullable();
            $table->boolean('status')->default(true); $table->boolean('is_banned')->default(false);
            $table->softDeletes(); $table->timestamps();
        });
        (require database_path('migrations/2023_01_01_000021_create_permission_tables.php'))->up();
        Role::create(['name' => 'admin', 'title' => 'Admin', 'guard_name' => 'web']);
        Route::post('/access-test/members/{member?}', [AccessController::class, 'saveMember'])->middleware(\Illuminate\Routing\Middleware\SubstituteBindings::class);
        Route::post('/access-test/roles/{role?}', [AccessController::class, 'saveRole'])->middleware(\Illuminate\Routing\Middleware\SubstituteBindings::class);
        Route::delete('/access-test/roles/{role}', [AccessController::class, 'deleteRole'])->middleware(\Illuminate\Routing\Middleware\SubstituteBindings::class);
    }

    private function member(bool $admin = false): User
    {
        $user = User::create(['first_name' => 'Test', 'last_name' => 'Member', 'email' => uniqid().'@example.com', 'password' => bcrypt('safe-password'), 'status' => 1]);
        if ($admin) { $user->assignRole('admin'); }
        return $user;
    }

    public function test_non_admin_cannot_manage_roles(): void
    {
        $this->actingAs($this->member())->postJson('/access-test/roles', [])->assertForbidden();
    }

    public function test_disabled_admin_is_denied(): void
    {
        $admin = $this->member(true); $admin->update(['status' => 0]);
        $this->actingAs($admin)->postJson('/access-test/roles', [])->assertForbidden();
    }

    public function test_admin_cannot_disable_self(): void
    {
        $admin = $this->member(true);
        $this->actingAs($admin)->postJson('/access-test/members/'.$admin->id, [
            'first_name' => 'Test', 'last_name' => 'Admin', 'email' => $admin->email,
            'status' => 0, 'roles' => [Role::findByName('admin')->id],
        ])->assertStatus(422);
        $this->assertEquals(1, $admin->fresh()->status);
    }

    public function test_fixed_role_cannot_be_edited_or_deleted(): void
    {
        $admin = $this->member(true); $role = Role::findByName('admin');
        $this->actingAs($admin)->postJson('/access-test/roles/'.$role->id, [])->assertForbidden();
        $this->deleteJson('/access-test/roles/'.$role->id)->assertStatus(422);
    }

    public function test_role_with_members_cannot_be_deleted(): void
    {
        $role = Role::create(['name' => 'reception', 'title' => 'Reception', 'guard_name' => 'web']);
        $this->member()->assignRole($role);
        $this->actingAs($this->member(true))->deleteJson('/access-test/roles/'.$role->id)->assertStatus(422);
    }

    public function test_role_permissions_are_saved_and_invalid_ids_are_rejected(): void
    {
        $permission = Permission::create(['name' => 'view_booking', 'guard_name' => 'web']);
        $this->actingAs($this->member(true))->postJson('/access-test/roles', ['name' => 'reception', 'title' => 'Reception', 'permissions' => [$permission->id]])->assertRedirect();
        $this->assertTrue(Role::findByName('reception')->hasPermissionTo($permission));
        $this->postJson('/access-test/roles', ['name' => 'invalid_role', 'title' => 'Invalid', 'permissions' => [99999]])->assertUnprocessable();
        $this->assertDatabaseMissing('roles', ['name' => 'invalid_role']);
    }

    public function test_membership_can_be_created_with_hashed_password_and_roles(): void
    {
        $role = Role::create(['name' => 'reception', 'title' => 'Reception', 'guard_name' => 'web']);
        $this->actingAs($this->member(true))->postJson('/access-test/members', [
            'first_name' => 'New', 'last_name' => 'Member', 'email' => 'new@example.com',
            'password' => 'strong-password-123', 'password_confirmation' => 'strong-password-123',
            'status' => 1, 'roles' => [$role->id],
        ])->assertRedirect();
        $member = User::where('email', 'new@example.com')->firstOrFail();
        $this->assertTrue(\Illuminate\Support\Facades\Hash::check('strong-password-123', $member->password));
        $this->assertTrue($member->hasRole('reception'));
    }

    public function test_role_changes_are_visible_without_global_cache_clear(): void
    {
        $user = $this->member(true);
        $this->assertTrue($user->hasRole('admin'));
        $role = Role::create(['name' => 'reception', 'title' => 'Reception', 'guard_name' => 'web']);
        $user->syncRoles([$role]);
        $this->assertFalse($user->fresh()->hasRole('admin'));
        $this->assertTrue($user->fresh()->hasRole('reception'));
    }
}
