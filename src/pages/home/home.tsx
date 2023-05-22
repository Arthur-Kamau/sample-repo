function HomeScreen() {
    return (  <div>
      
      {/* <!-- header section start --> */} 
    <div  className="header_section">
      <nav  className="destop_header navbar navbar-expand-lg navbar-light bg-light">
        <div  className="logo"></div>
        <div  className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul  className="navbar-nav mr-auto">
            <li  className="nav-item">
              <a  className="nav-link" href="index.html">Home</a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="about.html">About</a>
            </li>
            <li  className="nav-item">
              <a  className="logo_main" href="index.html"><img src="images/logo.png" /></a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="https://themewagon.github.io/guide/depatments.html">Blog</a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="contact.html">Contact</a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="index.html#"><img src="images/search-icon.png" /></a>
            </li>              
          </ul>
        </div>
      </nav>
      <nav  className="mobile_header navbar navbar-expand-lg navbar-light bg-light">
        <div  className="logo_main"><a href="index.html"><img src="images/logo.png" /></a></div>
        <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2"aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
          <span  className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbarSupportedContent2">
          <ul  className="navbar-nav mr-auto">
            <li  className="nav-item">
              <a  className="nav-link" href="index.html">Home</a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="about.html">About</a>
            </li>
            <li  className="nav-item">
              <a  className="logo_main" href="index.html"><img src="images/logo.png" /></a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="https://themewagon.github.io/guide/Blog.html">Blog</a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="contact.html">Contact</a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="index.html#"><img src="images/search-icon.png" /></a>
            </li>             
          </ul>
        </div>
      </nav>
    </div>
   {/* <!-- header section end --> */}
   {/* <!-- banner section start --> */}
    <div  className="banner_section layout_padding">
      <div id="main_slider"  className="carousel slide" data-ride="carousel">
        <div  className="carousel-inner">
          <div  className="carousel-item active">
            <div  className="container-fluid">
              <div  className="row">
                <div  className="col-md-6 padding_0">
                  <div  className="bg_1">
                    <div  className="padding_left0">
                      <h1  className="best_text">We Are<br/> 
                      Best Guide<br/> 
                      For Transports</h1>
                      <p  className="many_text">There are many variations of passages of Lorem Ipsum available, but the majority</p>
                      <div  className="read_bt"><a href="index.html#">Read More</a></div>
                    </div>
                  </div>
                </div>
                <div  className="col-md-6 padding_0">
                  <div  className="image_1"><img src="images/img-1.png"/></div>
                </div>
              </div>
            </div>
          </div>
          <div  className="carousel-item">
            <div  className="container-fluid">
              <div  className="row">
                <div  className="col-md-6 padding_0">
                  <div  className="bg_1">
                    <div  className="padding_left0">
                      <h1  className="best_text">We Are<br/> 
                      Best Guide<br/> 
                      For Transports</h1>
                      <p  className="many_text">There are many variations of passages of Lorem Ipsum available, but the majority</p>
                      <div  className="read_bt"><a href="index.html#">Read More</a></div>
                    </div>
                  </div>
                </div>
                <div  className="col-md-6 padding_0">
                  <div  className="image_1"><img src="images/img-1.png"/></div>
                </div>
              </div>
            </div>
          </div>
          <div  className="carousel-item">
            <div  className="container-fluid">
              <div  className="row">
                <div  className="col-md-6 padding_0">
                  <div  className="bg_1">
                    <div  className="padding_left0">
                      <h1  className="best_text">We Are<br/> 
                      Best Guide<br/> 
                      For Transports</h1>
                      <p  className="many_text">There are many variations of passages of Lorem Ipsum available, but the majority</p>
                      <div  className="read_bt"><a href="index.html#">Read More</a></div>
                    </div>
                  </div>
                </div>
                <div  className="col-md-6 padding_0">
                  <div  className="image_1"><img src="images/img-1.png"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a  className="carousel-control-prev" href="index.html#main_slider" role="button" data-slide="prev">
          <i  className="fa fa-angle-left"></i>
        </a>
        <a  className="carousel-control-next" href="index.html#main_slider" role="button" data-slide="next">
          <i  className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
   {/* <!-- banner section end --> */}
   {/* <!-- about section start --> */}
    <div  className="about_section layout_padding">
      <div  className="container-fluid">
        <div  className="row">
          <div  className="col-md-6 padding_0">
              <div  className="image_2"><img src="images/img-2.png"/></div>
            </div>
          <div  className="col-md-6 padding_0">
            <div  className="bg_2">
              <div  className="padding_left01">
                <h1  className="about_text">About</h1>
                <p  className="many_text1">There are many variations of passages of Lorem Ipsum available, but the majority</p>
                <div  className="read_bt1"><a href="index.html#">Read More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   {/* <!-- about section end --> */}
   {/* <!-- services section start --> */}
    <div  className="services_section layout_padding">
      <div  className="container-fluid">
        <div  className="row">
          <div  className="col-md-6 padding_0">
            <div  className="bg_3">
              <div  className="padding_left0">
                <h1  className="services_text">Our<br/> 
                <span style={{color: "#000"}}>Services</span></h1>
                <p  className="many_text2">There are many variations of passages of Lorem Ipsum available, but the majority</p>
                <div  className="read_bt2"><a href="index.html#">Next</a></div>
              </div>
            </div>
          </div>
          <div  className="col-md-6 padding_0">
            <div  className="image_1"><img src="images/img-3.png"/></div>
          </div>
        </div>
      </div>
    </div>
   {/* <!-- services section end --> */}
   {/* <!-- client section start --> */}
    <div  className="about_section layout_padding">
      <div  className="container-fluid">
        <div  className="row">
          <div  className="col-md-6 padding_0">
              <div  className="bg_4">
                <div id="carouselExampleControls"  className="carousel slide" data-ride="carousel">
                  <div  className="carousel-inner">
                    <div  className="carousel-item active">
                      <div  className="image_4"><img src="images/img-4.png"/></div>
                      <h1  className="readable_text">Readable</h1>
                      <p  className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less </p>
                    </div>
                    <div  className="carousel-item">
                      <div  className="image_4"><img src="images/img-4.png"/></div>
                      <h1  className="readable_text">Readable</h1>
                      <p  className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less </p>
                    </div>
                    <div  className="carousel-item">
                      <div  className="image_4"><img src="images/img-4.png"/></div>
                      <h1  className="readable_text">Readable</h1>
                      <p  className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less </p>
                    </div>
                  </div>
                  <a  className="carousel-control-prev" href="index.html#carouselExampleControls" role="button" data-slide="prev">
                    <i  className="fa fa-angle-left fas" style={{fontSize:"44px"}} aria-hidden="true"></i>
                  </a>
                  <a  className="carousel-control-next" href="index.html#carouselExampleControls" role="button" data-slide="next">
                    <i  className="fa fa-angle-right fas" style={{fontSize:"44px"}} aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          <div  className="col-md-6 padding_0">
            <div  className="bg_5  ">
              <div  className="padding_left01">
                <h1  className="about_text">Testimonial</h1>
                <p  className="many_text1">There are many variations of passages of Lorem Ipsum available, but the majority</p>
                <div  className="read_bt1"><a href="index.html#">Read More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   {/* <!-- client section end --> */}
   {/* <!-- contact section start --> */}
    <div  className="contact_section layout_padding">
      <div  className="container-fluid">
        <div  className="row">
          <div  className="col-md-6 padding_0">
            <div  className="bg_7">
              <div  className="padding_left10">
                <h1  className="contact_text">Contact Us</h1>
                <p  className="content_text">readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</p>
              </div>
            </div>
          </div>
          <div  className="col-md-6 padding_0">
            <div  className="bg_6">
              <div  className="mail_section">
                <input type=""  className="mail_text" placeholder="Name" name="Name"/>
                <input type=""  className="mail_text" placeholder="Phone Number" name="Phone Number"/>
                <input type=""  className="mail_text" placeholder="Name" name="Name"/>
                <textarea  className="massage_text" placeholder="Email" rows={5} id="comment" name="Email"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   {/* <!-- contact section end --> */}
   {/* <!-- footer section start --> */}
    <div  className="footer_section layout_padding">
      <div  className="container">
        <div  className="row">
          <div  className="col-lg-3">
            <h1  className="footer_taital">Manu</h1>
            <div  className="footer_menu">
              <ul>
                <li  className="active"><a href="index.html#">Home</a></li>
                <li><a href="index.html#">About</a></li>
                <li><a href="index.html#">Blog</a></li>
                <li><a href="index.html#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div  className="col-lg-3">
            <h1  className="footer_taital">Location</h1>
            <div  className="map_text"><a href="index.html#"><img src="images/map-icon.png"/><span  className="map_icon">104 loram ipusm</span></a></div>
            <div  className="map_text"><a href="index.html#"><img src="images/map-icon.png"/><span  className="map_icon">( +98 76543210 )</span></a></div>
            <div  className="map_text"><a href="index.html#"><img src="images/mail-icon.png"/><span  className="map_icon">demo@gmail.com</span></a></div>
          </div>
          <div  className="col-lg-3">
            <h1  className="footer_taital">Social Link</h1>
            <div  className="social_icon">
              <ul>
                <li><a href="index.html#"><img src="images/fb-icon.png"/></a></li>
                <li><a href="index.html#"><img src="images/twitter-icon.png"/></a></li>
                <li><a href="index.html#"><img src="images/instagram-icon.png"/></a></li>
                <li><a href="index.html#"><img src="images/linkedin-icon.png"/></a></li>
              </ul>
            </div>
          </div>
          <div  className="col-lg-3">
            <h1  className="footer_taital">Newsletter</h1>
            <input type=""  className="email_text" placeholder="Enter Your Email" name="text"/>
            <div  className="Subscribe_text"><a href="index.html#">SUBSCRIBE</a></div>
          </div>
        </div>
      </div>
    </div>
   {/* <!-- footer section end --> */}
   {/* <!-- copyright section start --> */}
    <div  className="copyright_section">
      <div  className="container">
        <div  className="border"></div>
        <p  className="copyright_text">2023 All Rights Reserved. <a href="https://html.design">Free html  Templates</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a></p>
      </div>
    </div>






    </div>);
}

export default HomeScreen;