<?php
use App\Models\Term;
$terms = Term::all();
?>


<?php $__env->startSection('title', 'إدارة السياسات والأحكام'); ?>

<?php $__env->startPush('after-styles'); ?>
<style>
    .form-section {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        margin-bottom: 20px;
    }
    .point-item {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }
    .point-item input {
        flex: 1;
    }
    .remove-btn {
        background: #dc2626;
        color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
    }
    .add-btn {
        margin-top: 10px;
        background: #4f46e5;
        color: #fff;
        border: none;
        padding: 7px 15px;
        border-radius: 4px;
        cursor: pointer;
    }
</style>
<?php $__env->stopPush(); ?>

<?php $__env->startSection('content'); ?>
<div class="form-section">
    <form action="<?php echo e(route('TermsAndConditions.store')); ?>" method="POST">
        <?php echo csrf_field(); ?>

        
        <div class="mb-3">
            <label class="form-label">العنوان (AR)</label>
            <input type="text" name="title_ar" class="form-control" required>
        </div>
        <div class="mb-3">
            <label class="form-label">Title (EN)</label>
            <input type="text" name="title_en" class="form-control" required>
        </div>

        
        <div class="mb-3">
            <label class="form-label">النقاط / Points</label>
            <div id="points-wrapper">
                <div class="point-item">
                    <input type="text" name="points[0][ar]" placeholder="النقطة بالعربي" class="form-control" required>
                    <input type="text" name="points[0][en]" placeholder="Point in English" class="form-control" required>
                    <button type="button" class="remove-btn" onclick="removePoint(this)">X</button>
                </div>
            </div>
            <?php if(Auth::user()->can('add_terms_and_conditions')): ?>
            <button type="button" class="add-btn" onclick="addPoint()">+ إضافة نقطة جديدة</button>
            <?php endif; ?>
        </div>
        <?php if(Auth::user()->can('add_terms_and_conditions')): ?>
        <button type="submit" class="btn btn-primary">حفظ السياسة</button>
        <?php endif; ?>
    </form>
</div>

<div class="form-section" style="overflow: auto;">
    <h4 class="mb-3">قائمة السياسات</h4>
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>العنوان (AR)</th>
                <th>Title (EN)</th>
                <th>النقاط</th>
                <th>الإجراءات</th>
            </tr>
        </thead>
        <tbody>
            <?php $__empty_1 = true; $__currentLoopData = $terms; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $term): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                <tr>
                    <td><?php echo e($index + 1); ?></td>
                    <td><?php echo e($term->title['ar'] ?? ''); ?></td>
                    <td><?php echo e($term->title['en'] ?? ''); ?></td>
                    <td>
                        <ul>
                            <?php $__currentLoopData = $term->points['ar'] ?? []; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $pIndex => $pointAr): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <li><?php echo e($pointAr); ?> <br> <?php echo e($term->points['en'][$pIndex] ?? ''); ?></li>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </ul>
                    </td>
                    <td>
                        <?php if(Auth::user()->can('edit_terms_and_conditions')): ?>
                        <button type="button" 
                            class="btn btn-sm btn-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#editModal"
                            data-id="<?php echo e($term->id); ?>"
                            data-title-ar="<?php echo e($term->title['ar'] ?? ''); ?>"
                            data-title-en="<?php echo e($term->title['en'] ?? ''); ?>"
                            data-points='<?php echo json_encode($term->points, 15, 512) ?>'>
                            تعديل
                        </button>
                        <?php endif; ?>
                        <?php if(Auth::user()->can('delete_terms_and_conditions')): ?>
                        <form action="<?php echo e(route('TermsAndConditions.destroy', $term->id)); ?>" method="POST" style="display:inline-block">
                            <?php echo csrf_field(); ?>
                            <?php echo method_field('DELETE'); ?>
                            <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('هل أنت متأكد من الحذف؟')">حذف</button>
                        </form>
                        <?php endif; ?>
                    </td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                <tr>
                    <td colspan="5" class="text-center">لا توجد سياسات مضافة</td>
                </tr>
            <?php endif; ?>
        </tbody>
    </table>
    <!-- Modal -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <form id="editForm" method="POST">
        <?php echo csrf_field(); ?>
        <?php echo method_field('PUT'); ?>
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">تعديل السياسة</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="إغلاق"></button>
        </div>
        <div class="modal-body">
          
          
          <div class="mb-3">
              <label class="form-label">العنوان (AR)</label>
              <input type="text" id="edit_title_ar" name="title_ar" class="form-control" required>
          </div>
          <div class="mb-3">
              <label class="form-label">Title (EN)</label>
              <input type="text" id="edit_title_en" name="title_en" class="form-control" required>
          </div>

          
          <div class="mb-3">
              <label class="form-label">النقاط / Points</label>
              <div id="edit_points_wrapper"></div>
              <button type="button" class="add-btn" id="addEditPoint">+ إضافة نقطة جديدة</button>
          </div>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
          <button type="submit" class="btn btn-primary">حفظ التعديلات</button>
        </div>
      </form>
    </div>
  </div>
</div>

</div>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('after-scripts'); ?>
<script>
    let pointIndex = 1;

    function addPoint() {
        const wrapper = document.getElementById('points-wrapper');
        const div = document.createElement('div');
        div.classList.add('point-item');
        div.innerHTML = `
            <input type="text" name="points[${pointIndex}][ar]" placeholder="النقطة بالعربي" class="form-control" required>
            <input type="text" name="points[${pointIndex}][en]" placeholder="Point in English" class="form-control" required>
            <button type="button" class="remove-btn" onclick="removePoint(this)">X</button>
        `;
        wrapper.appendChild(div);
        pointIndex++;
    }

    function removePoint(button) {
        button.parentElement.remove();
    }
</script>
<script>
  let editPointIndex = 0;

  const editModal = document.getElementById('editModal');
  editModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;

    // البيانات من زرار التعديل
    const id = button.getAttribute('data-id');
    const titleAr = button.getAttribute('data-title-ar');
    const titleEn = button.getAttribute('data-title-en');
    const points = JSON.parse(button.getAttribute('data-points'));
    // تعبئة الفورم
    document.getElementById('edit_title_ar').value = titleAr;
    document.getElementById('edit_title_en').value = titleEn;

    // إعداد الرابط للفورم
    document.getElementById('editForm').action = `/TermsAndConditions/${id}/update`;

    // إعادة ضبط النقاط
    const wrapper = document.getElementById('edit_points_wrapper');
    wrapper.innerHTML = '';
    editPointIndex = 0;

    if(points && points.ar) {
      points.ar.forEach((pAr, index) => {
        const pEn = points.en[index] ?? '';
        wrapper.insertAdjacentHTML('beforeend', `
          <div class="point-item">
              <input type="text" name="points[${editPointIndex}][ar]" value="${pAr}" class="form-control" required>
              <input type="text" name="points[${editPointIndex}][en]" value="${pEn}" class="form-control" required>
              <button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>
          </div>
        `);
        editPointIndex++;
      });
    }
  });

  // زرار إضافة نقطة جديدة داخل المودال
  document.getElementById('addEditPoint').addEventListener('click', function () {
    const wrapper = document.getElementById('edit_points_wrapper');
    wrapper.insertAdjacentHTML('beforeend', `
      <div class="point-item">
          <input type="text" name="points[${editPointIndex}][ar]" placeholder="النقطة بالعربي" class="form-control" required>
          <input type="text" name="points[${editPointIndex}][en]" placeholder="Point in English" class="form-control" required>
          <button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>
      </div>
    `);
    editPointIndex++;
  });
</script>

<?php $__env->stopPush(); ?>

<?php echo $__env->make('backend.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/city2tec/sami-care.sa/resources/views/backend/TermsAndConditions/index_datatable.blade.php ENDPATH**/ ?>