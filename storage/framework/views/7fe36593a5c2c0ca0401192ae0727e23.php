<style>
    .screen-hero{
        width: 100%;
        height: 855px;
        background-image: url('images/pages/main-bg.png');
        background-repeat: no-repeat;
        background-size: 100% 153%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        display: flex;
        width: 70%;
        min-height: 61%;
        direction: rtl;
        border: 5px dashed #cf9233;
        margin-bottom: 90px;
    }

    .imge-galary{
        width: 18%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .imge-galary img{
        width: 43%;
        position: absolute;
    }
            
    .text-content{
        width: 82%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 29px;
        font-family: 'Almarai';
    }
    
    .text-content h1{
        font-size: 71px;
        font-weight: bold;
        color: white;
    }
    
    .text-content span{
        color: #CF9233;
    }
    
    .sub-title{
        font-size: 30px;
        color: white;
        margin: 24px 0;
        gap: 20px;
    }
    
    .more-btn-main {
        width: 38%;
        height: 55px;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        left: -200px;
        cursor: pointer;
        background:
            linear-gradient(90deg, #CF9233, #694A1A) padding-box,
            linear-gradient(90deg, #CF9233 0%, #FFFFFF 51.36%, #CF9233 100%) border-box;
    
        border: 2px solid transparent;
    }

    .mt-28{
        margin-top: 0;
    }
    
    @media (max-width: 576px) {
        
        .screen-hero{
            height: 500px;
            align-items: flex-start;
        }
        .text-content h1 {
            font-size: 28px;
        }
        .content {
            min-height: 76%;
        }
        .imge-galary img {
            width: <?php echo e(app()->getLocale() == 'ar' ? '68%' : '53%'); ?>;
            <?php if(app()->getLocale() == 'en'): ?>
                height: 35%;
            <?php endif; ?>
    
        }
        .text-content {
            justify-content: flex-start;
            margin-top: 27px;
            gap: 6px;
        }

        .sub-title p{
            font-size: 9px !important;
            color:#FFFFFF;
        }
        .mt-28{
            margin-top: 28px;
        }
        .more-btn-main {
            width: 205px;
            left: 0;
        } 
        .content {
            border: 1px solid #cf9233;
        }
    }

</style>
<div class="screen-hero">
    <div class="content">
        
        <div class="imge-galary">
            <img src="<?php echo e(asset('images/pages/person.png')); ?>">
        </div>
        
        <div class="text-content">
            
            <h1>
                <?php echo e(__('messagess.your_look')); ?>

                <span>
                    <?php echo e(__('messagess.your_signature')); ?>

                </span>
            </h1>
            <h1>
                <span>
                    <?php echo e(__('messagess.your_elegance')); ?>

                </span>
                <?php echo e(__('messagess.starts_here')); ?>

            </h1>
            
            <div class="sub-title d-flex">
                <p>
                    <?php echo e(__('messagess.modern_cuts')); ?>

                </p>
                <p class="mt-28">
                    <?php echo e(__('messagess.professional_experience')); ?>

                </p>
                <p>
                    <?php echo e(__('messagess.full_care')); ?>

                </p>
            </div>
            <a href="<?php echo e(route('salon.create')); ?>" class="more-btn-main">
                <p style="color:white;font-size: 18px;margin: 0 13px;">
                    <img style="width: 18px;margin: 0 8px;" src="<?php echo e(asset('images/icons/Vector (2).png')); ?>" >
                    <?php echo e(__('messagess.book_now')); ?>

                </p>
            </a>
            
        </div>
    </div>
</div>
<?php /**PATH D:\projects\php8\cityart\samiCare\sami-care\resources\views/components/frontend/slider-hero.blade.php ENDPATH**/ ?>