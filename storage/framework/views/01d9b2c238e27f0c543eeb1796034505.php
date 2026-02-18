<?php $__env->startSection('title'); ?>
<?php echo e(__('messagess.cancellation_of_reservation')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startPush('after-styles'); ?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">

<style>
    .card {
        border-radius: 15px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }
    .table th, .table td {
        vertical-align: middle;
    }
</style>
<?php $__env->stopPush(); ?>

<?php $__env->startSection('content'); ?>

<div class="container-fluid py-4" style="margin-top: 30px;">
    <div class="row g-4">
        <div class="col-lg-4">
            <div class="card h-100">
                <div class="card-header bg-primary text-white">
                    <h5 class="mb-0"><i class="fa-solid fa-plus"></i> <?php echo e(__('messagess.add_new_reason')); ?></h5>
                </div>
                <div class="card-body">
                    <form action="<?php echo e(route('app.store')); ?>" method="post">
                        <?php echo csrf_field(); ?>
                        <div class="mb-3">
                            <label class="form-label"><?php echo e(__('messagess.reason_name')); ?> (AR)</label>
                            <input type="text" name="reasonAR" class="form-control" placeholder="<?php echo e(__('messagess.enter_reason')); ?>">
                        </div>
                        <div class="mb-3">
                            <label class="form-label"><?php echo e(__('messagess.reason_name')); ?> (EN)</label>
                            <input type="text" name="reasonEN" class="form-control" placeholder="<?php echo e(__('messagess.enter_reason')); ?>">
                        </div>
                        <?php if(Auth::user()->can('store_reject_reasons')): ?>
                        <button type="submit" class="btn btn-primary w-100"><?php echo e(__('messagess.add_reason')); ?></button>
                        <?php endif; ?>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card h-100">
                <div class="card-header bg-light">
                    <h5 class="mb-0"><i class="fa-solid fa-list"></i> <?php echo e(__('messagess.reasons_list')); ?></h5>
                </div>
                <div class="card-body">
                    <table class="table table-hover align-middle">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th><?php echo e(__('messagess.reason_name')); ?> (AR)</th>
                                <th><?php echo e(__('messagess.reason_name')); ?> (EN)</th>
                                <th><?php echo e(__('messagess.actions')); ?></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $__currentLoopData = $reasons; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $reason): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <tr>
                                <td><?php echo e($index + 1); ?></td>
                                <td> <?php echo e($reason->name['ar']); ?> </td>
                                <td> <?php echo e($reason->name['en']); ?> </td>
                                <td>
                                    <?php if(Auth::user()->can('update_reject_reasons')): ?>
                                    <button class="btn btn-sm btn-warning edit-btn"
                                        data-id="<?php echo e($reason->id); ?>"
                                        data-ar="<?php echo e($reason->name['ar']); ?>"
                                        data-en="<?php echo e($reason->name['en']); ?>"
                                    >
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <?php endif; ?>
                                    <?php if(Auth::user()->can('delete_reject_reasons')): ?>
                                    <a href="<?php echo e(route('reject.destroy' , $reason->id)); ?>" class="btn btn-sm btn-danger"
                                       onclick="return confirm('<?php echo e(__('messagess.confirm_delete')); ?>');">
                                        <i class="fa-solid fa-trash"></i>
                                    </a>
                                    <?php endif; ?>
                                </td>
                            </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-header bg-info text-white">
                    <h5 class="mb-0"><i class="fa-solid fa-chart-pie"></i> <?php echo e(__('messagess.cancellation_statistics')); ?></h5>
                </div>
                <div class="card-body">
                    <canvas id="reasonsChart" height="100"></canvas>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Edit Reason Modal -->
<div class="modal fade" id="editReasonModal" tabindex="-1" aria-labelledby="editReasonModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <form id="editReasonForm" method="POST">
        <?php echo csrf_field(); ?>
        <?php echo method_field('PUT'); ?>
        <div class="modal-header">
          <h5 class="modal-title" id="editReasonModalLabel"><?php echo e(__('messagess.edit_reason')); ?></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="<?php echo e(__('messagess.close')); ?>"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label"><?php echo e(__('messagess.reason_name')); ?> (AR)</label>
            <input type="text" name="reasonAR" id="editReasonAR" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label"><?php echo e(__('messagess.reason_name')); ?> (EN)</label>
            <input type="text" name="reasonEN" id="editReasonEN" class="form-control" required>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?php echo e(__('messagess.cancel')); ?></button>
          <button type="submit" class="btn btn-primary"><?php echo e(__('messagess.save_changes')); ?></button>
        </div>
      </form>
    </div>
  </div>
</div>

<?php $__env->stopSection(); ?>

<?php $__env->startPush('after-scripts'); ?>
<!-- مكتبة Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script>
<?php if(session('success')): ?>
    toastr.success("<?php echo e(session('success')); ?>");
<?php endif; ?>

<?php if(session('error')): ?>
    toastr.error("<?php echo e(session('error')); ?>");
<?php endif; ?>

<?php if(session('warning')): ?>
    toastr.warning("<?php echo e(session('warning')); ?>");
<?php endif; ?>

<?php if(session('info')): ?>
    toastr.info("<?php echo e(session('info')); ?>");
<?php endif; ?>
</script>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const reasons = <?php echo json_encode($reasons, 15, 512) ?>;
    const labels = reasons.map(r => r.name.ar);
    const dataValues = reasons.map(r => r.count);

    const ctx = document.getElementById('reasonsChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '<?php echo e(__("messagess.number_of_selections")); ?>',
                data: dataValues,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: '<?php echo e(__("messagess.most_common_cancellation_reasons")); ?>',
                    font: { size: 18 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });
    
    const editButtons = document.querySelectorAll('.edit-btn');
    const editForm = document.getElementById('editReasonForm');
    const reasonARInput = document.getElementById('editReasonAR');
    const reasonENInput = document.getElementById('editReasonEN');
        editButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            const ar = button.dataset.ar;
            const en = button.dataset.en;

            reasonARInput.value = ar;
            reasonENInput.value = en;

            editForm.action = `/reject/update/${id}`;

            const modal = new bootstrap.Modal(document.getElementById('editReasonModal'));
            modal.show();
        });
    });
});
</script>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('backend.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/city2tec/sami-care.sa/resources/views/backend/cancellation-of-reservation/index_datatable.blade.php ENDPATH**/ ?>