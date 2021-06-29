import React from "react"
function Home() {


    return (
<div className="maincontainer">
        <div id="preloder">
            <div class="loader"></div>
            </div>
            
            <div class="offcanvas-menu-overlay"></div>
            <div class="offcanvas-menu-wrapper">
            <div class="offcanvas__close">+</div>
            <ul class="offcanvas__widget">
            <li><span class="icon_search search-switch"></span></li>
            <li><a href="#"><span class="icon_heart_alt"></span>
            <div class="tip">2</div>
            </a></li>
            <li><a href="#"><span class="icon_bag_alt"></span>
            <div class="tip">2</div>
            </a></li>
            </ul>
            <div class="offcanvas__logo">
            <a href="#"><img src="assets/img/logo.png" alt="" /></a>
            </div>
            <div id="mobile-menu-wrap"></div>
            <div class="offcanvas__auth">
            <a href="#">Login</a>
            <a href="#">Register</a>
            </div>
            </div>
            
            
            <header class="header">
            <div class="container-fluid">
            <div class="row">
            <div class="col-xl-3 col-lg-2">
            <div class="header__logo">
            <a href="#"><h3 style={{fontFamily:"cursive"}}>DASHBOARD</h3></a>
            </div>
            </div>
            <div class="col-xl-6 col-lg-7">
            <nav class="header__menu">
            {/* <ul>
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Women’s</a></li>
            <li><a href="#">Men’s</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Pages</a>
            <ul class="dropdown">
            <li><a href="#">Product Details</a></li>
            <li><a href="#">Shop Cart</a></li>
            <li><a href="#">Checkout</a></li>
            <li><a href="#">Blog Details</a></li>
            </ul>
            </li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            </ul> */}
            </nav>
            </div>
            <div class="col-lg-3">
            <div class="header__right">
            <div class="header__right__auth">
            <h3 style={{fontFamily:"cursive"}}>Seller</h3>
            {/* <a href="#">Login</a>
            <a href="#">Register</a> */}
            </div>
            <ul class="header__right__widget">
            <li><span class="icon_search search-switch"></span></li>
            <li><a href="#"><span class="icon_heart_alt"></span>
            <div class="tip">2</div>
            </a></li>
            <li><a href="#"><span class="icon_bag_alt"></span>
            <div class="tip">2</div>
            </a></li>
            </ul>
            </div>
            </div>
            </div>
            <div class="canvas__open">
            <i class="fa fa-bars"></i>
            </div>
            </div>
            </header>
            
            
           
            
            
            <section class="product spad">
            <div class="container">
            <div class="row">
            <div class="col-lg-4 col-md-4">
            <div class="section-title">
            <h4>jewellery shop</h4>
            </div>
            </div>
            <div class="col-lg-8 col-md-8">
            </div>
            </div>
            <div class="row property__gallery">
            <div class="col-lg-3 col-md-4 col-sm-6 mix">
            <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-1.jpg">
            <div class="label new">New</div>
            <ul class="product__hover">
            <li><a href="assets/img/product/product-1.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
            <li><a href="#"><span class="icon_heart_alt"></span></a></li>
            <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
            <h6><a href="#">Buttons tweed blazer</a></h6>
            <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div class="product__price">$ 59.0</div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix">
            <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-2.jpg">
            <ul class="product__hover">
            <li><a href="assets/img/product/product-2.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
            <li><a href="#"><span class="icon_heart_alt"></span></a></li>
            <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
            <h6><a href="#">Flowy striped skirt</a></h6>
            <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div class="product__price">$ 49.0</div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix">
            <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-3.jpg">
            <div class="label stockout">out of stock</div>
            <ul class="product__hover">
            <li><a href="assets/img/product/product-3.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
            <li><a href="#"><span class="icon_heart_alt"></span></a></li>
            <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
            <h6><a href="#">Cotton T-Shirt</a></h6>
            <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div class="product__price">$ 59.0</div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix">
            <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-4.jpg">
            <ul class="product__hover">
            <li><a href="assets/img/product/product-4.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
            <li><a href="#"><span class="icon_heart_alt"></span></a></li>
            <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
            <h6><a href="#">Slim striped pocket shirt</a></h6>
            <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div class="product__price">$ 59.0</div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix">
            <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-5.jpg">
            <ul class="product__hover">
            <li><a href="assets/img/product/product-5.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
            <li><a href="#"><span class="icon_heart_alt"></span></a></li>
            <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
            <h6><a href="#">Fit micro corduroy shirt</a></h6>
            <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div class="product__price">$ 59.0</div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
            <div class="product__item sale">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-6.jpg">
            <div class="label sale">Sale</div>
            <ul class="product__hover">
            <li><a href="assets/img/product/product-6.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
            <li><a href="#"><span class="icon_heart_alt"></span></a></li>
            <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
            <h6><a href="#">Tropical Kimono</a></h6>
            <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div class="product__price">$ 49.0 <span>$ 59.0</span></div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
            <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-7.jpg">
            <ul class="product__hover">
            <li><a href="assets/img/product/product-7.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
            <li><a href="#"><span class="icon_heart_alt"></span></a></li>
            <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
            <h6><a href="#">Contrasting sunglasses</a></h6>
            <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div class="product__price">$ 59.0</div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
            <div class="product__item sale">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-8.jpg">
            <div class="label">Sale</div>
            <ul class="product__hover">
            <li><a href="assets/img/product/product-8.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
            <li><a href="#"><span class="icon_heart_alt"></span></a></li>
            <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
            <h6><a href="#">Water resistant backpack</a></h6>
            <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div class="product__price">$ 49.0 <span>$ 59.0</span></div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            
            
            <section class="banner set-bg" data-setbg="assets/img/banner/banner-1.jpg">
            <div class="container">
            <div class="row">
            <div class="col-xl-7 col-lg-8 m-auto">
            <div class="banner__slider owl-carousel">
            <div class="banner__item">
            <div class="banner__text">
            <span>The Chloe Collection</span>
            <h1>The Project Jacket</h1>
            <a href="#">Shop now</a>
            </div>
            </div>
            <div class="banner__item">
            <div class="banner__text">
            <span>The Chloe Collection</span>
            <h1>The Project Jacket</h1>
            <a href="#">Shop now</a>
            </div>
            </div>
            <div class="banner__item">
            <div class="banner__text">
            <span>The Chloe Collection</span>
            <h1>The Project Jacket</h1>
            <a href="#">Shop now</a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            
            

            
            
            <footer class="footer">
            <div class="container">
            <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-7">
            <div class="footer__about">
            <div class="footer__logo">
            <a href="#"><h3>Berrybox</h3></a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            cilisis.</p>
            <div class="footer__payment">
            <a href="#"><img src="assets/img/payment/payment-1.png" alt="" /></a>
            <a href="#"><img src="assets/img/payment/payment-2.png" alt="" /></a>
            <a href="#"><img src="assets/img/payment/payment-3.png" alt="" /></a>
            <a href="#"><img src="assets/img/payment/payment-4.png" alt="" /></a>
            <a href="#"><img src="assets/img/payment/payment-5.png" alt="" /></a>
            </div>
            </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-5">
            <div class="footer__widget">
            <h6>Quick links</h6>
            <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            </ul>
            </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4">
            <div class="footer__widget">
            <h6>Account</h6>
            <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Orders Tracking</a></li>
            <li><a href="#">Checkout</a></li>
            <li><a href="#">Wishlist</a></li>
            </ul>
            </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8">
            <div class="footer__newslatter">
            <h6>NEWSLETTER</h6>
            <form action="#">
            <input type="text" placeholder="Email" />
            <button type="submit" class="site-btn">Subscribe</button>
            </form>
            <div class="footer__social">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-youtube-play"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-pinterest"></i></a>
            </div>
            </div>
            </div>
            </div>
            <div class="row">
            <div class="col-lg-12">
            
            <div class="footer__copyright__text">
                <p>Copywrite section here</p>
            </div>
            
            </div>
            </div>
            </div>
            </footer>
            
            
            <div class="search-model">
            <div class="h-100 d-flex align-items-center justify-content-center">
            <div class="search-close-switch">+</div>
            <form class="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....." />
            </form>
            </div>
            </div>
      </div>)

}



export default Home;