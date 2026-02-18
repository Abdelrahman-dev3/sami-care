<?php $__env->startSection('title', 'Staff Working Hours'); ?>

<?php $__env->startSection('content'); ?>
<body style="background: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">

    <div style="max-width: 850px; margin: 0 auto; background: #fff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
        <div class="col-md-12 d-flex justify-content-between">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h4><i class="fa-solid fa-clock"></i> <?php echo e(__('employee.working_hours')); ?> </h4>
            </div>
        </div>

        <form action="<?php echo e(route('staff.working-hours.store',  $userId )); ?>" method="POST">
            <?php echo csrf_field(); ?>
            


            <?php
            $savedWorkingHours = App\Models\StaffWorkingHour::where('staff_id', $userId)->get()->keyBy('day_of_week');
                $days = [
                    1 => 'saturday',
                    2 => 'sunday',
                    3 => 'monday',
                    4 => 'tuesday',
                    5 => 'wednesday',
                    6 => 'thursday',
                    7 => 'friday',
                ];
            ?>
            <?php
                $defaultTimes = [
                    'saturday' => ['start' => '11:00', 'end' => '19:00'],
                    'sunday' => ['start' => '11:00', 'end' => '19:00'],
                    'monday' => ['start' => '11:00', 'end' => '19:00'],
                    'tuesday' => ['start' => '11:00', 'end' => '19:00'],
                    'wednesday' => ['start' => '11:00', 'end' => '19:00'],
                    'thursday' => ['start' => '11:00', 'end' => '19:00'],
                    'friday' => ['start' => '11:00', 'end' => '19:00'], 
                ];
            ?>

            <?php if($savedWorkingHours->count() > 0): ?>
            <ul class="data-scrollbar list-group list-group-flush">
    <?php $__currentLoopData = $days; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $day): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php if($savedWorkingHours->has($day)): ?>
            <?php
                $dayData   = $savedWorkingHours[$day];
                $defaultStart = $dayData->start_time;
                $defaultEnd   = $dayData->end_time;
                $isHoliday    = $dayData->is_holiday;
                $breaks       = json_decode($dayData->breaks, true) ?? [];
            ?>

            <li class="form-group col-md-12 list-group-item">
                <div class="form-group col-md-12 gap-1">
                    <h4 class="text-capitalize"><?php echo e($index); ?>. <?php echo e(__('employee.' . $day)); ?></h4>

                    <div class="col-md-12 row row-cols-3">
                        
                        <div class="flatpickr-wrapper">
                            <input class="form-control"
                                   type="time"
                                   name="working_hours[<?php echo e($day); ?>][start]"
                                   value="<?php echo e($defaultStart); ?>">
                        </div>

                        
                        <div class="flatpickr-wrapper">
                            <input class="form-control"
                                   type="time"
                                   name="working_hours[<?php echo e($day); ?>][end]"
                                   value="<?php echo e($defaultEnd); ?>">
                        </div>

                        
                        <div class="form-group">
                            <div class="d-flex gap-1">
                                <div class="form-check">
                                    <input class="form-check-input"
                                           name="working_hours[<?php echo e($day); ?>][is_holiday]"
                                           id="<?php echo e($index); ?>-dayoff"
                                           type="checkbox"
                                           value="1"
                                           <?php echo e($isHoliday ? 'checked' : ''); ?>>
                                </div>
                                <label class="form-label" for="<?php echo e($index); ?>-dayoff"><?php echo e(__('employee.add_holiday')); ?></label>
                            </div>
                        </div>
                    </div>

                    
                    <div class="breaks-container" data-day="<?php echo e($day); ?>">
                        <?php $__currentLoopData = $breaks; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $bIndex => $break): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="col-md-12 row row-cols-3 align-items-end mt-2 gap-2 break-row">
                                <div class="flatpickr-wrapper">
                                    <input class="form-control" type="time" name="working_hours[<?php echo e($day); ?>][breaks][<?php echo e($bIndex); ?>][start_break]" value="<?php echo e($break['start_break']); ?>">
                                </div>
                                <div class="flatpickr-wrapper">
                                    <input class="form-control" type="time" name="working_hours[<?php echo e($day); ?>][breaks][<?php echo e($bIndex); ?>][end_break]" value="<?php echo e($break['end_break']); ?>">
                                </div>
                                <div>
                                    <a class="btn btn-danger remove-break"><?php echo e(__('employee.remove')); ?></a>
                                </div>
                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>

                    
                    <div>
                        <a class="clickable-text" data-day="<?php echo e($day); ?>">
                            <h6><i class="fa fa-plus-circle" aria-hidden="true"></i> <?php echo e(__('employee.add_break')); ?> </h6>
                        </a>
                    </div>
                </div>
            </li>
        <?php endif; ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</ul>
            <?php else: ?>
            <ul class="data-scrollbar list-group list-group-flush">
                <?php $__currentLoopData = $days; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $day): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <?php
                        $defaultStart = $defaultTimes[$day]['start'] ?? '09:00';
                        $defaultEnd = $defaultTimes[$day]['end'] ?? '17:00';
                    ?>
            
                    <li class="form-group col-md-12 list-group-item">
                        <div class="form-group col-md-12 gap-1">
                            <h4 class="text-capitalize"><?php echo e($index); ?>. <?php echo e(__('employee.' . $day)); ?></h4>
            
                            <div class="col-md-12 row row-cols-3">
                                
                                <div class="flatpickr-wrapper">
                                    <input class="form-control"
                                           type="time"
                                           name="working_hours[<?php echo e($day); ?>][start]"
                                           value="<?php echo e(old('working_hours.' . $day . '.start', $defaultStart)); ?>">
                                </div>
            
                                
                                <div class="flatpickr-wrapper">
                                    <input class="form-control"
                                           type="time"
                                           name="working_hours[<?php echo e($day); ?>][end]"
                                           value="<?php echo e(old('working_hours.' . $day . '.end', $defaultEnd)); ?>">
                                </div>
            
                                
                                <div class="form-group">
                                    <div class="d-flex gap-1">
                                        <div class="form-check">
                                            <input class="form-check-input"
                                                   name="working_hours[<?php echo e($day); ?>][is_holiday]"
                                                   id="<?php echo e($index); ?>-dayoff"
                                                   type="checkbox"
                                                   value="1">
                                        </div>
                                        <label class="form-label" for="<?php echo e($index); ?>-dayoff"><?php echo e(__('employee.add_holiday')); ?> </label>
                                    </div>
                                </div>
                            </div>
            
                            
                            <div>
                                <a class="clickable-text" data-day="<?php echo e($day); ?>">
                                    <h6><i class="fa fa-plus-circle" aria-hidden="true"></i> <?php echo e(__('employee.add_break')); ?> </h6>
                                </a>
                            </div>
            
                            
                            <div class="breaks-container" data-day="<?php echo e($day); ?>"></div>
                        </div>
                    </li>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</ul>
            <?php endif; ?>

                <div data-v-50fdd42d="" class="d-grid d-md-block setting-footer"><button data-v-50fdd42d="" class="btn btn-primary" name="submit"><i data-v-50fdd42d="" class="fa-solid fa-floppy-disk"></i> <?php echo e(__('employee.submit')); ?></button></div>
        </form>
    </div>

<script>
document.addEventListener("DOMContentLoaded", function () {
    const addBreakLinks = document.querySelectorAll(".clickable-text");

    addBreakLinks.forEach((link) => {
        link.addEventListener("click", function () {
            const day = link.getAttribute("data-day");
            const breaksContainer = document.querySelector(`.breaks-container[data-day="${day}"]`);

            const breakIndex = breaksContainer.querySelectorAll(".break-row").length;

            const breakRow = document.createElement("div");
            breakRow.classList.add("col-md-12", "row", "row-cols-3", "align-items-end", "mt-2", "gap-2", "break-row");

            breakRow.innerHTML = `
                <div class="flatpickr-wrapper">
                    <input class="form-control" value="09:00" type="time" name="working_hours[${day}][breaks][${breakIndex}][start_break]">
                </div>
                <div class="flatpickr-wrapper">
                    <input class="form-control" value="17:00" type="time" name="working_hours[${day}][breaks][${breakIndex}][end_break]">
                </div>
                <div>
                    <a class="btn btn-danger remove-break"><?php echo e(__('employee.remove')); ?></a>
                </div>
            `;

            breaksContainer.appendChild(breakRow);

            breakRow.querySelector('.remove-break').addEventListener('click', function () {
                breakRow.remove();
            });
        });
    });
});
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script>
    <?php if(session('success')): ?>
        toastr.success("<?php echo e(session('success')); ?>");
    <?php endif; ?>

    <?php if(session('error')): ?>
        toastr.error("<?php echo e(session('error')); ?>");
    <?php endif; ?>

    <?php if(session('info')): ?>
        toastr.info("<?php echo e(session('info')); ?>");
    <?php endif; ?>

    <?php if(session('warning')): ?>
        toastr.warning("<?php echo e(session('warning')); ?>");
    <?php endif; ?>
</script>


</body>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('styles'); ?>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

<?php $__env->stopPush(); ?>

<?php $__env->startPush('scripts'); ?>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('backend.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/city2tec/sami-care.sa/Modules/Employee/Resources/views/backend/employees/staff-working-hours.blade.php ENDPATH**/ ?>