<?php
use App\Models\GiftCard;
?>



<?php $__env->startSection('title'); ?>
<?php echo e(__($module_action)); ?> <?php echo e(__($module_title)); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startPush('after-styles'); ?>
<style>

/* ===== Invoice Card ===== */
.invoice-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 18px 25px;
    margin-bottom: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;
    border: 1px solid #eee;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.invoice-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.invoice-details {
    display: none;
    margin-top: 15px;
}

/* ===== Invoice Box ===== */
.invoice-box {
    background: #fff;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    border: 1px solid #eee;
}

.invoice-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #f1f1f1;
    padding-bottom: 15px;
    margin-bottom: 20px;
}

.invoice-title {
    font-size: 22px;
    font-weight: bold;
    color: #333;
}

.invoice-meta {
    font-size: 14px;
    color: #777;
}

.invoice-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.invoice-table th {
    background: #f8f9fa;
    padding: 10px;
    text-align: left;
    font-weight: 600;
    border-bottom: 2px solid #eee;
}

.invoice-table td {
    padding: 10px;
    border-bottom: 1px solid #f1f1f1;
}

.invoice-summary {
    margin-top: 25px;
    background: #f9fafc;
    padding: 20px;
    border-radius: 10px;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.summary-total {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    border-top: 2px solid #ddd;
    padding-top: 10px;
}

.payment-method {
    margin-top: 15px;
    font-weight: 600;
    color: #0d6efd;
}

</style>
<?php $__env->stopPush(); ?>

<?php $__env->startSection('content'); ?>
<div class="card">
<div class="card-body">

<h3 class="mb-4"><?php echo e(__('messages.invoice_cards_list')); ?></h3>

<?php $__currentLoopData = $invoices; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $invoice): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

<div class="invoice-card" onclick="toggleInvoiceDetails(<?php echo e($invoice->id); ?>)">
    <div>
        <strong><?php echo e($invoice->user->first_name); ?> <?php echo e($invoice->user->last_name); ?></strong><br>
        <small>#INV-<?php echo e($invoice->id); ?></small>
    </div>
    <div>
        <?php echo e($invoice->created_at->format('Y-m-d H:i')); ?>

    </div>
</div>

<div id="invoice-details-<?php echo e($invoice->id); ?>" class="invoice-details">

<div class="invoice-box">

    
    <div class="invoice-header">
        <div>
            <div class="invoice-title">INVOICE</div>
            <div class="invoice-meta">
                Invoice #: INV-<?php echo e($invoice->id); ?> <br>
                Date: <?php echo e($invoice->created_at->format('Y-m-d')); ?>

            </div>
        </div>

        <div class="invoice-meta">
            <strong>Customer:</strong><br>
            <?php echo e($invoice->user->first_name); ?> <?php echo e($invoice->user->last_name); ?>

        </div>
    </div>

    <?php
        $cartIds = json_decode($invoice->cart_ids, true);
        $bookings = Modules\Booking\Models\Booking::whereIn('id', $cartIds)->with('services')->get();
        $gift_ids = json_decode($invoice->gift_ids, true);
        $bookingsGift = GiftCard::whereIn('id', $gift_ids)->get();
        $products = $invoice->products;
    ?>

    
    <table class="invoice-table">
        <thead>
            <tr>
                <th>Item</th>
                <th>Type</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>

        <?php $__currentLoopData = $bookings; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $booking): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php $__currentLoopData = $booking->services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $service): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td><?php echo e($service->service_name); ?></td>
                    <td>Service</td>
                    <td><?php echo e($service->service_price - ($service->discount_amount ?? 0)); ?> SR</td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

        <?php $__currentLoopData = $bookingsGift; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $gift): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td>Gift Card (<?php echo e($gift->recipient_name); ?>)</td>
                <td>Gift</td>
                <td><?php echo e($gift->subtotal); ?> SR</td>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

        <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td><?php echo e($product->name); ?></td>
                <td>Product</td>
                <td><?php echo e($product->price ?? $product->min_price ?? $product->max_price); ?> SR</td>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

        </tbody>
    </table>

    
    <div class="invoice-summary">

        <div class="summary-row">
            <div>Discount</div>
            <div>- <?php echo e($invoice->discount_amount); ?> SR</div>
        </div>

        <div class="summary-row">
            <div>Tax & Service</div>
            <div><?php echo e($invoice->taxs_service); ?> SR</div>
        </div>

        <div class="summary-row summary-total">
            <div>Total</div>
            <div><?php echo e($invoice->final_total); ?> SR</div>
        </div>

        
        <div class="payment-method">
            Payment Method:
            <?php echo e($invoice->payment_method ?? ''); ?>

        </div>

    </div>

</div>
</div>

<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

</div>
</div>

<script>
function toggleInvoiceDetails(id) {
    const detailsDiv = document.getElementById(`invoice-details-${id}`);
    detailsDiv.style.display =
        detailsDiv.style.display === 'block' ? 'none' : 'block';
}
</script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('backend.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/city2tec/sami-care.sa/resources/views/backend/invoice/index_datatable.blade.php ENDPATH**/ ?>