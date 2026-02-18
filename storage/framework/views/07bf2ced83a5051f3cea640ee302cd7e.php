

<?php $__env->startSection('title'); ?> <?php echo e(__($module_action)); ?> <?php echo e(__($module_title)); ?> <?php $__env->stopSection(); ?>



<?php $__env->startSection('content'); ?>
<?php if(session('flash_success')): ?>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <?php echo e(session('flash_success')); ?>

        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
<?php endif; ?>

<div class="card">
    <div class="card-body">
        <?php if (isset($component)) { $__componentOriginal57a22d33ea7984d606412297cfe33b67 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal57a22d33ea7984d606412297cfe33b67 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.backend.section-header','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('backend.section-header'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
            <i class="<?php echo e($module_icon); ?>"></i> <?php echo e($module_title); ?> <small class="text-muted"><?php echo e(__($module_action)); ?></small>

             <?php $__env->slot('subtitle', null, []); ?> 
                <?php echo app('translator')->get(":module_name Management Dashboard", ['module_name'=>Str::title($module_name)]); ?>
             <?php $__env->endSlot(); ?>
             <?php $__env->slot('toolbar', null, []); ?> 
                <?php if (isset($component)) { $__componentOriginal03c0e80d38d2a15cf58878ae679803f0 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal03c0e80d38d2a15cf58878ae679803f0 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.backend.buttons.return-back','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('backend.buttons.return-back'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal03c0e80d38d2a15cf58878ae679803f0)): ?>
<?php $attributes = $__attributesOriginal03c0e80d38d2a15cf58878ae679803f0; ?>
<?php unset($__attributesOriginal03c0e80d38d2a15cf58878ae679803f0); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal03c0e80d38d2a15cf58878ae679803f0)): ?>
<?php $component = $__componentOriginal03c0e80d38d2a15cf58878ae679803f0; ?>
<?php unset($__componentOriginal03c0e80d38d2a15cf58878ae679803f0); ?>
<?php endif; ?>
             <?php $__env->endSlot(); ?>
         <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal57a22d33ea7984d606412297cfe33b67)): ?>
<?php $attributes = $__attributesOriginal57a22d33ea7984d606412297cfe33b67; ?>
<?php unset($__attributesOriginal57a22d33ea7984d606412297cfe33b67); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal57a22d33ea7984d606412297cfe33b67)): ?>
<?php $component = $__componentOriginal57a22d33ea7984d606412297cfe33b67; ?>
<?php unset($__componentOriginal57a22d33ea7984d606412297cfe33b67); ?>
<?php endif; ?>

        <hr>

        <div class="row mt-4">
            <div class="col">

                <?php echo e(html()->form('POST', route('backend.users.store'))->class('form-horizontal')->open()); ?>

                <?php echo e(csrf_field()); ?>


                <div class="form-group row">
                    <?php echo e(html()->label(__('labels.backend.users.fields.first_name'))->class('col-sm-2 form-control-label')->for('first_name')); ?>

                    <div class="col-sm-10">
                        <?php echo e(html()->text('first_name')
                                ->class('form-control')
                                ->placeholder(__('labels.backend.users.fields.first_name'))
                                ->attribute('maxlength', 191)
                                ->required()); ?>

                    </div>
                </div>

                <div class="form-group row">
                    <?php echo e(html()->label(__('labels.backend.users.fields.last_name'))->class('col-sm-2 form-control-label')->for('last_name')); ?>

                    <div class="col-sm-10">
                        <?php echo e(html()->text('last_name')
                                ->class('form-control')
                                ->placeholder(__('labels.backend.users.fields.last_name'))
                                ->attribute('maxlength', 191)
                                ->required()); ?>

                    </div>
                </div>

                <div class="form-group row">
                    <?php echo e(html()->label(__('labels.backend.users.fields.email'))->class('col-sm-2 form-control-label')->for('email')); ?>


                    <div class="col-sm-10">
                        <?php echo e(html()->email('email')
                                ->class('form-control')
                                ->placeholder(__('labels.backend.users.fields.email'))
                                ->attribute('maxlength', 191)
                                ->required()); ?>

                    </div>
                </div>

                <div class="form-group row">
                    <?php echo e(html()->label(__('labels.backend.users.fields.mobile'))->class('col-sm-2 form-control-label')->for('mobile')); ?>


                    <div class="col-sm-10">
                        <?php echo e(html()->text('mobile')
                                ->class('form-control')
                                ->placeholder(__('labels.backend.users.fields.mobile'))
                                ->attribute('maxlength', 20)
                                ->required()); ?>

                    </div>
                </div>

                <div class="form-group row">
                    <?php echo e(html()->label(__('labels.backend.users.fields.password'))->class('col-sm-2 form-control-label')->for('password')); ?>


                    <div class="col-sm-10">
                        <?php echo e(html()->password('password')
                                ->class('form-control')
                                ->placeholder(__('labels.backend.users.fields.password'))
                                ->required()); ?>

                    </div>
                </div>

                <div class="form-group row">
                    <?php echo e(html()->label(__('labels.backend.users.fields.password_confirmation'))->class('col-sm-2 form-control-label')->for('password_confirmation')); ?>


                    <div class="col-sm-10">
                        <?php echo e(html()->password('password_confirmation')
                                ->class('form-control')
                                ->placeholder(__('labels.backend.users.fields.password_confirmation'))
                                ->required()); ?>

                    </div>
                </div>

                <div class="form-group row">
                    <?php echo e(html()->label(__('labels.backend.users.fields.status'))->class('col-6 col-sm-2 form-control-label')->for('status')); ?>


                    <div class="col-6 col-sm-10">
                        <?php echo e(html()->checkbox('status', true, '1')); ?> <?php echo e(__('users.active')); ?>

                    </div>
                </div>

                <div class="form-group row">
                    <?php echo e(html()->label(__('labels.backend.users.fields.confirmed'))->class('col-6 col-sm-2 form-control-label')->for('confirmed')); ?>


                    <div class="col-6 col-sm-10">
                        <?php echo e(html()->checkbox('confirmed', true, '1')); ?> <?php echo e(__('users.email_confirmed')); ?>

                    </div>
                </div>

                <div class="form-group row">
                    <?php echo e(html()->label(__('labels.backend.users.fields.email_credentials'))->class('col-6 col-sm-2 form-control-label')->for('confirmed')); ?>


                    <div class="col-6 col-sm-10">
                        <?php echo e(html()->checkbox('email_credentials', true, '1')); ?> <?php echo e(__('users.email_credentials')); ?>

                    </div>
                </div>

                <div class="form-group row">
                    <?php echo e(html()->label(__('users.abilities'))->class('col-sm-2 form-control-label')); ?>


                    <div class="col">
                        <div class="row">
                            <div class="col-12 col-sm-7">
                                <div class="card card-accent-danger">
                                    <div class="card-header">
                                        <?php echo e(__('users.roles')); ?>

                                    </div>
                                    <div class="card-body">
                                        <?php if($roles->count()): ?>
                                        <?php $__currentLoopData = $roles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $role): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <div class="card">
                                            <div class="card-header">
                                                <div class="checkbox">
                                                    <?php echo e(html()->label(html()->checkbox('roles[]', old('roles') && in_array($role->name, old('roles')) ? true : false, $role->name)->id('role-'.$role->id) . "&nbsp;" . ucwords($role->name). "&nbsp;(".$role->name.")")->for('role-'.$role->id)); ?>

                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <?php if($role->id != 1): ?>
                                                <?php if($role->permissions->count()): ?>
                                                <?php $__currentLoopData = $role->permissions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $permission): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <i class="far fa-check-circle mr-1"></i><?php echo e($permission->name); ?>&nbsp;
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                <?php else: ?>
                                                <?php echo e(__('users.none')); ?>

                                                <?php endif; ?>
                                                <?php else: ?>
                                                <?php echo e(__('users.all_permissions')); ?>

                                                <?php endif; ?>
                                            </div>
                                        </div>
                                        <!--card-->
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-5">
                                <div class="card card-accent-danger">
                                    <div class="card-header">
                                        <?php echo e(__('users.permissions')); ?>

                                    </div>
                                    <div class="card-body">
                                        <?php if($permissions->count()): ?>
                                        <?php $__currentLoopData = $permissions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $permission): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <div class="checkbox">
                                            <?php echo e(html()->label(html()->checkbox('permissions[]', old('permissions') && in_array($permission->name, old('permissions')) ? true : false, $permission->name)->id('permission-'.$permission->id) . ' ' . $permission->name)->for('permission-'.$permission->id)); ?>

                                        </div>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--form-group-->

                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <?php if (isset($component)) { $__componentOriginal9b9e18b95e82fd4467419c83b8a91f29 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal9b9e18b95e82fd4467419c83b8a91f29 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.buttons.create','data' => ['title' => ''.e(__('users.create')).' '.e(__($module_title)).'']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('buttons.create'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['title' => ''.e(__('users.create')).' '.e(__($module_title)).'']); ?>
                                <?php echo e(__('users.create')); ?>

                             <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal9b9e18b95e82fd4467419c83b8a91f29)): ?>
<?php $attributes = $__attributesOriginal9b9e18b95e82fd4467419c83b8a91f29; ?>
<?php unset($__attributesOriginal9b9e18b95e82fd4467419c83b8a91f29); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal9b9e18b95e82fd4467419c83b8a91f29)): ?>
<?php $component = $__componentOriginal9b9e18b95e82fd4467419c83b8a91f29; ?>
<?php unset($__componentOriginal9b9e18b95e82fd4467419c83b8a91f29); ?>
<?php endif; ?>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="float-end">
                            <div class="form-group">
                                <?php if (isset($component)) { $__componentOriginal98d403696e9440d7fce00fa99530283d = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal98d403696e9440d7fce00fa99530283d = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.buttons.cancel','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('buttons.cancel'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal98d403696e9440d7fce00fa99530283d)): ?>
<?php $attributes = $__attributesOriginal98d403696e9440d7fce00fa99530283d; ?>
<?php unset($__attributesOriginal98d403696e9440d7fce00fa99530283d); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal98d403696e9440d7fce00fa99530283d)): ?>
<?php $component = $__componentOriginal98d403696e9440d7fce00fa99530283d; ?>
<?php unset($__componentOriginal98d403696e9440d7fce00fa99530283d); ?>
<?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
                <?php echo e(html()->form()->close()); ?>


            </div>
        </div>

    </div>

    <div class="card-footer">
        <div class="row">
            <div class="col">
                <small class="float-end text-muted">

                </small>
            </div>
        </div>
    </div>
</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/city2tec/sami-care.sa/resources/views/backend/users/create.blade.php ENDPATH**/ ?>