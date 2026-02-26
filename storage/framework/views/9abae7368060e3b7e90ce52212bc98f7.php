

<?php $__env->startSection('content'); ?>
    <?php if (isset($component)) { $__componentOriginal428ce2b846773f91eb7dd13597a849fe = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal428ce2b846773f91eb7dd13597a849fe = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.learn-about-section','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('frontend.learn-about-section'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal428ce2b846773f91eb7dd13597a849fe)): ?>
<?php $attributes = $__attributesOriginal428ce2b846773f91eb7dd13597a849fe; ?>
<?php unset($__attributesOriginal428ce2b846773f91eb7dd13597a849fe); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal428ce2b846773f91eb7dd13597a849fe)): ?>
<?php $component = $__componentOriginal428ce2b846773f91eb7dd13597a849fe; ?>
<?php unset($__componentOriginal428ce2b846773f91eb7dd13597a849fe); ?>
<?php endif; ?>

    <?php if (isset($component)) { $__componentOriginal46776d0b7db5693fe6a82b4f364cd987 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal46776d0b7db5693fe6a82b4f364cd987 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.services-section','data' => ['services' => $services,'categories' => $categories,'showDuration' => $showDuration]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('frontend.services-section'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['services' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($services),'categories' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($categories),'showDuration' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($showDuration)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal46776d0b7db5693fe6a82b4f364cd987)): ?>
<?php $attributes = $__attributesOriginal46776d0b7db5693fe6a82b4f364cd987; ?>
<?php unset($__attributesOriginal46776d0b7db5693fe6a82b4f364cd987); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal46776d0b7db5693fe6a82b4f364cd987)): ?>
<?php $component = $__componentOriginal46776d0b7db5693fe6a82b4f364cd987; ?>
<?php unset($__componentOriginal46776d0b7db5693fe6a82b4f364cd987); ?>
<?php endif; ?>
    <?php if (isset($component)) { $__componentOriginalfc63de52e08f3d4397c936ba02c6fea4 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalfc63de52e08f3d4397c936ba02c6fea4 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.gift-section','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('frontend.gift-section'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalfc63de52e08f3d4397c936ba02c6fea4)): ?>
<?php $attributes = $__attributesOriginalfc63de52e08f3d4397c936ba02c6fea4; ?>
<?php unset($__attributesOriginalfc63de52e08f3d4397c936ba02c6fea4); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalfc63de52e08f3d4397c936ba02c6fea4)): ?>
<?php $component = $__componentOriginalfc63de52e08f3d4397c936ba02c6fea4; ?>
<?php unset($__componentOriginalfc63de52e08f3d4397c936ba02c6fea4); ?>
<?php endif; ?>

    <?php if (isset($component)) { $__componentOriginal7aeab9953e2daca09d5e26e5c5d5626a = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal7aeab9953e2daca09d5e26e5c5d5626a = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.premium-packages-section','data' => ['packages' => $packages]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('frontend.premium-packages-section'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['packages' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($packages)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal7aeab9953e2daca09d5e26e5c5d5626a)): ?>
<?php $attributes = $__attributesOriginal7aeab9953e2daca09d5e26e5c5d5626a; ?>
<?php unset($__attributesOriginal7aeab9953e2daca09d5e26e5c5d5626a); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal7aeab9953e2daca09d5e26e5c5d5626a)): ?>
<?php $component = $__componentOriginal7aeab9953e2daca09d5e26e5c5d5626a; ?>
<?php unset($__componentOriginal7aeab9953e2daca09d5e26e5c5d5626a); ?>
<?php endif; ?>
    <?php if (isset($component)) { $__componentOriginal820bc895a373b48340bc6780d610b618 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal820bc895a373b48340bc6780d610b618 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.product-section','data' => ['products' => $products]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('frontend.product-section'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['products' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($products)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal820bc895a373b48340bc6780d610b618)): ?>
<?php $attributes = $__attributesOriginal820bc895a373b48340bc6780d610b618; ?>
<?php unset($__attributesOriginal820bc895a373b48340bc6780d610b618); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal820bc895a373b48340bc6780d610b618)): ?>
<?php $component = $__componentOriginal820bc895a373b48340bc6780d610b618; ?>
<?php unset($__componentOriginal820bc895a373b48340bc6780d610b618); ?>
<?php endif; ?>
    <?php if (isset($component)) { $__componentOriginalda8f112ead44ebd77207d062b1cb8117 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalda8f112ead44ebd77207d062b1cb8117 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.slider','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('frontend.slider'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalda8f112ead44ebd77207d062b1cb8117)): ?>
<?php $attributes = $__attributesOriginalda8f112ead44ebd77207d062b1cb8117; ?>
<?php unset($__attributesOriginalda8f112ead44ebd77207d062b1cb8117); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalda8f112ead44ebd77207d062b1cb8117)): ?>
<?php $component = $__componentOriginalda8f112ead44ebd77207d062b1cb8117; ?>
<?php unset($__componentOriginalda8f112ead44ebd77207d062b1cb8117); ?>
<?php endif; ?>
    <style>
    .ellipse-1092 {
        height: 789px !important;
        left: 0;
        position: absolute;
        top: -242px !important;
        width: 100%;
    }
    </style>
    <?php if (isset($component)) { $__componentOriginal29ac77599b2eb7a0a7c0a2718d77aca7 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal29ac77599b2eb7a0a7c0a2718d77aca7 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.discount','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('frontend.discount'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal29ac77599b2eb7a0a7c0a2718d77aca7)): ?>
<?php $attributes = $__attributesOriginal29ac77599b2eb7a0a7c0a2718d77aca7; ?>
<?php unset($__attributesOriginal29ac77599b2eb7a0a7c0a2718d77aca7); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal29ac77599b2eb7a0a7c0a2718d77aca7)): ?>
<?php $component = $__componentOriginal29ac77599b2eb7a0a7c0a2718d77aca7; ?>
<?php unset($__componentOriginal29ac77599b2eb7a0a7c0a2718d77aca7); ?>
<?php endif; ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend::layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\projects\php8\cityart\samiCare\sami-care\Modules/rontend\Resources/views/index.blade.php ENDPATH**/ ?>