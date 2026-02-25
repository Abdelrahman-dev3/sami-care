<?php
    use App\Models\Branch;
    $branches = Branch::where('status', 1)->whereNull('deleted_by')->get();
?>
<style>
    /* Footer Styles */
    .footer-section {
        position: relative;
        background: #212121;
        color: #fff;
        margin-top: 0;
    }

    .footer-curve {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: translateY(-100%);
        z-index: 1;
    }

    .footer-curve svg {
        display: block;
        width: 100%;
        height: 120px;
    }

    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 80px 20px 20px;
        position: relative;
        z-index: 2;
    }

    .footer-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
        margin-bottom: 50px;
    }


    .footer-column {
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .footer-column h5 {
        font-size: 24px !important;
        font-weight: bold;
        font-family: 'Almarai';
        margin-bottom: 20px;
        color: #fff;
    }

    .footer-column p {
        margin-bottom: 8px;
        color: #FFFFFFB2;
        font-size: 14px;
        line-height: 1.6;
        font-weight: 600;
        font-family: Almarai;
    }

    .footer-column p i {
        margin-left: 8px;
    }

    .footer-link {
        color: #bbb;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .footer-link:hover {
        color: #fff;
    }

        /* WhatsApp Subscription */
    .subscription-form {
        display: flex;
        justify-content: center;
        align-items: center; 
        gap: 10px;
        margin-bottom: 25px;
        flex-wrap: nowrap;
    }
    
    .subscription-input {
        padding: 12px 20px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        border-radius: 8px;
        text-align: center;
        font-size: 1rem;
        width: 180px; 
        outline: none;
        transition: all 0.3s ease;
    }
    
    .whatsapp-btn {
        padding: 12px 24px;
        background: #25D366;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        transition: all 0.3s ease;
    }

        .whatsapp-btn:hover {
            background: #1fb855;
            transform: translateY(-2px);
        }

        /* Social Icons */
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .social-icons a {
            color: #fff;
            font-size: 1.5rem;
            transition: all 0.3s ease;
            display: inline-block;
        }

        .social-icons a:hover {
            color: #d4af37;
            transform: scale(1.2);
        }

        /* Logo */
        .footer-logo-container {
            text-align: center;
            margin: 50px 0 30px 0;
        }

        .footer-logo {
            max-height: 150px;
            max-width: 300px;
        }

        /* Payment Icons */
        .payment-icons {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-bottom: 40px;
            flex-wrap: wrap;
        }

        .payment-card {
            background: white;
            padding: 12px 20px;
            border-radius: 8px;
            transition: transform 0.3s ease;
            cursor: pointer;
        }

        .payment-card:hover {
            transform: scale(1.1);
        }

        .payment-card span {
            font-weight: 700;
            font-size: 1.25rem;
        }

        .payment-visa { color: #1434CB; }
        .payment-mastercard { color: #EB001B; }
        .payment-mada { color: #00A859; }
        .payment-tabby { color: #3BDEAE; }

        /* Responsive */
        @media (max-width: 768px) {
        
        

            .footer-content {
                padding: 60px 15px 20px;
                text-align: center;
            }
        
            .footer-grid {
                display: flex;
                flex-direction: column-reverse;
                gap: 25px;
            }
        
            .footer-column {
                align-items: center;
                text-align: center;
            }
        
            .footer-column h5 {
                font-size: 20px !important;
            }
        
            .footer-column p {
                font-size: 13px;
            }
        
            /* خلفية اللوجو في النص */
            .footer-content::before {
                top: 35%;
                width: 180px;
                height: 180px;
                opacity: 0.08;
                filter: blur(1px);
            }
        
            /* حقل الإدخال */
            .input-wrapper {
                max-width: 100%;
                justify-content: center;
            }
        
            .subscription-input {
                width: 100%;
                padding: 14px 100px 14px 15px;
                border-radius: 50px;
            }
        
            .join-btn {
                right: 8px;
                padding: 8px 18px;
                font-size: 0.85rem;
            }
        
            /* زر واتساب */
            .whatsapp-btn.full-width {
                width: 100%;
                max-width: 100%;
                border-radius: 50px;
                font-size: 0.95rem;
            }
        
            /* Social Icons مربعات زي الصورة */
            .example-2 {
                justify-content: center;
                gap: 15px;
            }
        
            .example-2 .icon-content a {
                width: 45px;
                height: 45px;
                border-radius: 8px; /* بدل الدائرة */
            }
        
            /* وسائل الدفع */
            .payment-icons {
                justify-content: center;
                gap: 15px;
            }
        
            .payment-icon {
                width: 55px;
            }
        
            /* إخفاء عمود about في الموبايل */
            .d-none-mv {
                display: none !important;
            }
        }
        
        @media (max-width: 500px) {
            .footer-logo-bg{
                right: 20% !important;
            }
            .d-none-mv{
                display: none;
            }
        }

    /* Background image behind footer text */
    .footer-content {
        position: relative;
        z-index: 2; 
    }

    .footer-content::before {
        content: '';
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        background: url('https://city2tec.com/images/samilogo.png') no-repeat center/contain;
        opacity: 0.15;
        filter: blur(2px) brightness(1.15); 
        z-index: 1;
        pointer-events: none;
    }

    .input-wrapper {
        position: relative;
        display: flex;
        width: 100%;
        max-width: 280px;
    }
    
    .subscription-input {
        flex: 1;
        padding: 14px 90px 14px 15px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        border-radius: 50px; 
        font-size: 1rem;
        outline: none;
    }

    .subscription-input::placeholder {
        color: #bbb;
    }
    
    .join-btn {
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        padding: 10px 20px;
        background: #d4af37;
        border: none;
        border-radius: 50px; 
        color: #212121;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9rem;
    }
    
    .join-btn:hover {
        background: #c19d2b;
    }
    
    .whatsapp-btn.full-width {
        margin-top: 12px;
        width: 100%;
        max-width: 280px;
        padding: 14px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        background: #25D366;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        cursor: pointer;
        color: white;
        transition: all 0.3s ease;
    }

    .whatsapp-btn.full-width:hover {
        background: #1fb855;
    }
    
    .payment-icons {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }
    
    .payment-card {
        background: white;
        padding: 10px 18px;
        border-radius: 6px;
        cursor: pointer;
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px; 
        height: 50px;
    }
    
    .payment-card:hover {
        transform: scale(1.05);
    }
    
    .payment-card img.payment-icon {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain; 
    }
    .payment-icons {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 40px;
        flex-wrap: wrap;
    }
    
    .payment-card {
        background: transparent; 
        padding: 8px;
        border-radius: 8px;
        transition: transform 0.3s ease;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .payment-card:hover {
        transform: scale(1.1);
    }
    
    .payment-icon {
        width: 60px; 
        height: auto;
        object-fit: contain;
    }
    .footer-logo-bg{
        height: 400px;
        position: absolute;
        transform: translate(10px, 10px);
        top: 0;
        right: 40%;
        z-index: -1;
    }
    ul {
      list-style: none;
    }
    
    .example-2 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .example-2 .icon-content {
      margin: 0 10px;
      position: relative;
    }
    .example-2 .icon-content .tooltip {
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      padding: 6px 10px;
      border-radius: 5px;
      opacity: 0;
      visibility: hidden;
      font-size: 14px;
      transition: all 0.3s ease;
    }
    .example-2 .icon-content:hover .tooltip {
      opacity: 1;
      visibility: visible;
      top: -50px;
    }
    .example-2 .icon-content a {
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: #4d4d4d;
      background-color: #fff;
      transition: all 0.3s ease-in-out;
    }
    .example-2 .icon-content a:hover {
      box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
    }
    .example-2 .icon-content a svg {
      position: relative;
      z-index: 1;
      width: 30px;
      height: 30px;
    }
    .example-2 .icon-content a:hover {
      color: white;
    }
    .example-2 .icon-content a .filled {
      position: absolute;
      top: auto;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background-color: #000;
      transition: all 0.3s ease-in-out;
    }
    .example-2 .icon-content a:hover .filled {
      height: 100%;
    }
    
    .example-2 .icon-content a[data-social="whatsapp"] .filled,
    .example-2 .icon-content a[data-social="whatsapp"] ~ .tooltip {
      background-color: #128c7e;
    }
    
    .example-2 .icon-content a[data-social="facebook"] .filled,
    .example-2 .icon-content a[data-social="facebook"] ~ .tooltip {
      background-color: #3b5998;
    }
    .example-2 .icon-content a[data-social="instagram"] .filled,
    .example-2 .icon-content a[data-social="instagram"] ~ .tooltip {
      background: linear-gradient(
        45deg,
        #405de6,
        #5b51db,
        #b33ab4,
        #c135b4,
        #e1306c,
        #fd1f1f
      );
    }
    .example-2 .icon-content a[data-social="youtube"] .filled,
    .example-2 .icon-content a[data-social="youtube"] ~ .tooltip {
      background-color: #ff0000;
    }

</style>
<div class="h-10"></div>

    <!-- Footer Section -->
    <footer class="footer-section">
        <!-- Wave Curve -->
        <div class="footer-curve">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                <path fill="#212121" fill-opacity="1" d="M0,150 C360,0 1080,0 1440,150 L1440,150 L0,150 Z"></path>
            </svg>
        </div>
        <!-- Footer Content -->
        <div class="footer-content">
            
            <img class="footer-logo-bg" src="<?php echo e(asset('images/samilogo.png')); ?>">
            
            <div class="footer-grid">

                <!-- Join Us -->
                <div class="footer-column" style="gap: 28px;">
                    <h5><?php echo e(__('messagess.Join Us For Latest Offers')); ?></h5>
                    
                    <div class="subscription-form" style="justify-content: center;">
                        <div class="input-wrapper">
                            <input type="tel" class="subscription-input" placeholder="+966" id="phoneInput" dir="ltr">
                            <button class="join-btn" onclick="joinOffers()"><?php echo e(__('messagess.Join')); ?></button>
                        </div>
                    </div>
                
                    <button class="whatsapp-btn full-width" onclick="subscribeWhatsApp()">
                        <i class="bi bi-whatsapp"></i> <?php echo e(__('messagess.Quick WhatsApp Contact')); ?>

                    </button>
                    <ul class="example-2">
                      <li class="icon-content">
                          <a
                            data-social="twitter"
                            aria-label="Twitter"
                            href="https://x.com/samicare_sa"
                            target="_blank"
                          >
                            <div class="filled"></div>
                            <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                              <path d="M18.244 2H21.5L14.62 9.86L22.5 22H16.44L11.68 14.83L5.4 22H2.14L9.46 13.62L2 2H8.2L12.5 8.52L18.244 2Z"/>
                            </svg>
                          </a>
                          <div class="tooltip">Twitter</div>
                        </li>
                      <li class="icon-content">
                        <a
                          data-social="instagram"
                          aria-label="Instagram"
                          href="https://www.instagram.com/samicare.sa/"
                        >
                          <div class="filled"></div>
                          <svg
                            xml:space="preserve"
                            viewBox="0 0 16 16"
                            class="bi bi-instagram"
                            fill="currentColor"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="currentColor"
                              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                            ></path>
                          </svg>
                        </a>
                        <div class="tooltip">Instagram</div>
                      </li>
                      <li class="icon-content">
                        <a
                          data-social="facebook"
                          aria-label="Facebook"
                          href="https://www.facebook.com/samicare.sa"
                        >
                          <div class="filled"></div>
                          <svg
                            xml:space="preserve"
                            viewBox="0 0 24 24"
                            class="bi bi-facbook"
                            fill="currentColor"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="currentColor"
                              d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
                            ></path>
                          </svg>
                        </a>
                        <div class="tooltip">Facebook</div>
                      </li>
                    </ul>

                </div>
                
                <!-- About SAMI -->
                <div class="footer-column d-none-mv">
                    <h5><?php echo e(__('messagess.about Sami')); ?></h5>
                    <p><a href="<?php echo e(route('frontend.home')); ?>" class="footer-link"><?php echo e(__('messagess.nav_home')); ?></a></p>
                    <p><a href="<?php echo e(route('frontend.about')); ?>" class="footer-link"><?php echo e(__('messagess.nav_about')); ?></a></p>
                    <p><a href="<?php echo e(route('frontend.services')); ?>" class="footer-link"><?php echo e(__('messagess.nav_services')); ?></a></p>
                    <p><a href="<?php echo e(route('frontend.branches')); ?>" class="footer-link"><?php echo e(__('messagess.our_branches')); ?></a></p>
                    <p><a href="<?php echo e(route('frontend.Packages')); ?>" class="footer-link"><?php echo e(__('messagess.nav_package')); ?></a></p>
                </div>
    
                <!-- Help -->
                <div class="footer-column">
                    <h5><?php echo e(__('messagess.Help')); ?></h5>
                    <p><a href="<?php echo e(route('frontend.contact')); ?>" class="footer-link"><?php echo e(__('messagess.nav_contact')); ?></a></p>
                    <p><a href="<?php echo e(route('frontend.TermsAndConditions')); ?>" class="footer-link"><?php echo e(__('messagess.Privacy Policy')); ?></a></p>
                    <p><a href="<?php echo e(route('frontend.TermsAndConditions')); ?>" class="footer-link"><?php echo e(__('messagess.Terms & Conditions')); ?></a></p>
                </div>
                
                <!-- Branches -->
                <div class="footer-column">
                    <h5><?php echo e(__('messagess.Branch Addresses')); ?></h5>
                    <?php $__currentLoopData = $branches; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $branch): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <p><?php echo e($branch->name); ?></p>
                        <p><?php echo e($branch->description ?? ''); ?></p>
                        <p><i class="bi bi-telephone-fill"></i><?php echo e($branch->contact_number); ?></p>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </div>
    
            <div class="payment-icons">
                <div class="payment-card">
                    <img src="https://city2tec.com/images/O.webp" alt="Visa" class="payment-icon">
                </div>
                <div class="payment-card">
                    <img src="https://city2tec.com/images/OI.webp" alt="Mastercard" class="payment-icon">
                </div>
                <div class="payment-card">
                    <img src="https://city2tec.com/images/OIP.webp" alt="Mada" class="payment-icon">
                </div>
                <div class="payment-card">
                    <img src="https://city2tec.com/images/OIPp.jfif" alt="Tabby" class="payment-icon">
                </div>
            </div>
        </div>
    </footer>

    <script>
        // WhatsApp Subscription Function
        function subscribeWhatsApp() {
            const phoneInput = document.getElementById('phoneInput');
            const phoneNumber = phoneInput.value.trim();
            
            if (phoneNumber) {
                // Replace with your actual WhatsApp business number
                const whatsappNumber = '966555666777'; // Your WhatsApp number
                const message = encodeURIComponent('أريد الاشتراك في العروض. رقم الهاتف: ' + phoneNumber);
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
                
                window.open(whatsappUrl, '_blank');
                phoneInput.value = '';
            } else {
                alert('الرجاء إدخال رقم الهاتف');
            }
        }

        // Allow Enter key to submit
        document.getElementById('phoneInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeWhatsApp();
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    </script><?php /**PATH D:\projects\php8\cityart\samiCare\sami-care\resources\views/components/frontend/footer.blade.php ENDPATH**/ ?>