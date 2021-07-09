import React from "react"
function AddBusiness(props) {
    const hello = ()=>{
    
        if(true){
        props.history.push("/shops")
        window.location.reload();
        }
        else{
            alert("Login failed")
        }
    }

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
            <a href="#"><h4>ADD STORE</h4></a>
            </div>
            </div>
            <div class="col-xl-6 col-lg-7">
            <nav class="header__menu">
            </nav>
            </div>
            <div class="col-lg-3">
            <div class="header__right">
            <div class="header__right__auth">
            <a href="home"><h3>Seller</h3></a>
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
            
            
           
            
            
            <section class="product ">
            <div class="container ">







            <div class="row ">
            <div className="col-2 text-center"></div>
            <div className="col-8 text-center">
            <div class="footer__newslatter">
            <form action="#">
            <div className="row mb-2">
            <div className="col-12 text-end">
            <label><b>Add your Business to our page and become berrybox partners</b></label>
            </div>

            </div>



            <div className="row mb-2 pt-1 ">
            <div className="col-12 text-end">
            <input type="text" placeholder="Business Name" className=""
                onChange={(e) => {
                e.preventDefault();
            //    setPassword(e.target.value);
              }}
            />
            </div>
            </div>
            <div className="row mb-2 pt-1 ">
            <div className="col-12 text-end">
            <input type="text" placeholder="Address/Location" className=""
                onChange={(e) => {
                e.preventDefault();
                // setEmail(e.target.value);
              }}

            />
            </div>

            </div>



            <div className="row mb-2 pt-1 " >
            <div className="col-12 text-end">
            <input type="text" placeholder="Owner" className=""
                onChange={(e) => {
                e.preventDefault();
                // setEmail(e.target.value);
              }}

            />
            </div>

            </div>




            <div className="row mb-2 pt-1 ">
            <div className="col-12 text-end">
            <input type="number" placeholder="Phone Number" className=""
                onChange={(e) => {
                e.preventDefault();
                // setEmail(e.target.value);
              }}

            />
            </div>

            </div>





            <div className="row mb-2 pt-1 ">
            <div className="col-12 text-end">
            <select type="text" placeholder="Category" className=""
                onChange={(e) => {
                e.preventDefault();
                // setEmail(e.target.value);
              }}

            >
            <option>Select a Category</option>
            <option>Jwellary</option>
            <option>Clothes</option>
            <option>Shoes</option>
            </select>
            </div>

            </div>


            <div className="row mb-2 pt-1 ">
            <div className="col-12 text-end">
              <label><b>Additional Information</b></label>
            </div>

            </div>

            <div className="row mb-2 pt-1 ">
            <div className="col-12 text-end">
            <input type="text" placeholder="Email" className=""
                onChange={(e) => {
                e.preventDefault();
                // setEmail(e.target.value);
              }}

            />
            </div>

            </div>







            <div className="row mb-2 pt-1 ">
            <div className="col-12 text-end">
            <input type="text" placeholder="Payment More" className=""
                onChange={(e) => {
                e.preventDefault();
                // setEmail(e.target.value);
              }}

            />
            </div>

            </div>



            <div className="row mb-2 pt-1 ">
            <div className="col-12 text-end">
            <input type="text" placeholder="Timings" className=""
                onChange={(e) => {
                e.preventDefault();
                // setEmail(e.target.value);
              }}

            />
            </div>

            </div>


            <div className="row mb-2 pt-1 ">
            <div className="col-7 text-center">
            <button onClick={hello} className="btn btn text-white" style={{backgroundColor:"#0b3a6a"}} >
             Register
            </button>
            </div>
            </div>



            <div className="row pt-5 ">
            <div className="col-12 text-end">
              <label><b>By Registering your Business to the Site you agree with BeryBox Partner <i className="text-warning"> Terms </i>and <i className="text-warning">Conditions</i></b></label>
            </div>
            </div>


            </form>
            <div class="footer__social">
            </div>
            </div>
              </div>

                
            </div>
            </div>
            </section>
            
              {/* <div className="row">
              <div className="col-1"></div>
              <div className="col-10 text-center">
              <div className="card-body">

              </div>
              </div>
              </div> */}







            
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



export default AddBusiness;