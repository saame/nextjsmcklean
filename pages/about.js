import Head from 'next/head';
import Link from 'next/link';
import script from 'next/script'


export default function about() {
   function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
  return (
<>
    <head>
  <meta charSet="utf-8" />
  <title>mcklean</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="Free HTML Templates" name="keywords" />
  <meta content="Free HTML Templates" name="description" />
  {/* Favicon */}
  {/* <link href="img/favicon.ico" rel="icon"/> */}
  {/* Google Web Fonts */}
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
  {/* Font Awesome */}
  {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"> */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  {/* jquery */}
  {/*  */}
  {/* Flaticon Font */}
  {/* <link href="lib/flaticon/font/flaticon.css" rel="stylesheet"> */}
  {/* Libraries Stylesheet */}
  {/* <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"> */}
  {/* <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet"> */}
  {/* Customized Bootstrap Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />

    </head>
  {/* Navbar Start */}
  <div className="container-fluid p-0">
    <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
      <img src="img/mds.png" alt="logo" className="navbar-brd" />
      {/* <a href="" class="navbar-brand">
    <h1 class="m-0 display-5 text-white">
      <span class="text-primary">Mcklean</span>Design studio
    </h1>
    <img src="img/mcklean-logo.png" alt="logo" class="mcklean-logo" />
  </a> */}
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-between px-3"
        id="navbarCollapse"
      >
        <div className="navbar-nav ml-auto py-0">
          <a href="index.html" className="nav-item nav-link">
            Home
          </a>
          <a href="about.html" className="nav-item nav-link active">
            About
          </a>
          <a href="./project.html" className="nav-item nav-link">
            Project
          </a>
          <a href="service.html" className="nav-item nav-link">
            Service
          </a>
          {/* <div class="nav-item dropdown">
        <a
          href="#"
          class="nav-link dropdown-toggle"
          data-toggle="dropdown"
          >Pages</a
        >
        <div class="dropdown-menu rounded-0 m-0">
          <a href="blog.html" class="dropdown-item">Blog Grid</a>
          <a href="single.html" class="dropdown-item">Blog Detail</a>
        </div>
      </div> */}
          <a href="contact.html" className="nav-item nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </div>
  {/* Navbar End */}
  {/* mainbanner Start */}
  <section className="main-banner bg-img1">
    <div className="container">
      <h1 className="project-heading">About Us</h1>
    </div>
  </section>
  {/* mainbanner End */}
  {/* tabs Start */}
  <div className="container-fluid row about-main">
    <div className="col-md-4">
      <img src="/img/pngegg(2).png" alt="" className="img-fluid" />
    </div>
    <div className="col-md-8">
      <h2 className="about_heading">John - CEO</h2>
      <p className="about-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem erat,
        tempor sit amet ornare in, eleifend sit amet ante. Nulla quam felis,
        condimentum non venenatis id, efficitur non nulla. Nullam ligula sem,
        tincidunt a convallis at, molestie ac nibh. Vestibulum ultricies
        imperdiet laoreet. Maecenas leo neque, sodales quis turpis ut,
        vestibulum imperdiet sem. Maecenas et vestibulum lacus. Aenean lobortis
        enim elit, sit amet condimentum augue lobortis quis.
      </p>
    </div>
  </div>
  <div className="container row who_we_are">
    <div className="col-md-12 p-0">
      <h2 className="about_heading">Who We Are</h2>
      <p className="about-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem erat,
        tempor sit amet ornare in, eleifend sit amet ante. Nulla quam felis,
        condimentum non venenatis id, efficitur non nulla. Nullam ligula sem,
        tincidunt a convallis at, molestie ac nibh. Vestibulum ultricies
        imperdiet laoreet. Maecenas leo neque, sodales quis turpis ut,
        vestibulum imperdiet sem. Maecenas et vestibulum lacus. Aenean lobortis
        enim elit, sit amet condimentum augue lobortis quis.
      </p>
    </div>
  </div>
  {/* <div class="container">
<h2 class="about_heading1">Teams</h2>
<div class="container m-auto p-0 row">
  <div class="col-md-3 mb-3">
    <div class="card">
      <img src="/img/pngegg(2).png" alt="" />
      <div class="card-body">
        <p><b>Peter</b></p>
        <p>Manager</p>
      </div>
    </div>
  </div>
  <div class="col-md-3 mb-3">
    <div class="card">
      <img src="/img/pngegg(2).png" alt="" />
      <div class="card-body">
        <p><b>Peter</b></p>
        <p>Manager</p>
      </div>
    </div>
  </div>
  <div class="col-md-3 mb-3">
    <div class="card">
      <img src="/img/pngegg(2).png" alt="" />
      <div class="card-body">
        <p><b>Peter</b></p>
        <p>Manager</p>
      </div>
    </div>
  </div>
  <div class="col-md-3 mb-3">
    <div class="card">
      <img src="/img/pngegg(2).png" alt="" />
      <div class="card-body">
        <p><b>Peter</b></p>
        <p>Manager</p>
      </div>
    </div>
  </div>
</div>
    </div> */}
  {/* <div class="container py-5">
<h2 class="about_heading">Teams</h2>
<div class="card-deck">
  <div class="card">
    <img
      class="card-img-top"
      src="img/pngegg(2).png"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Peter</h5>
      <p class="card-text">
        Manager
      </p>
    </div>
  </div>
  <div class="card">
    <img
      class="card-img-top"
      src="img/pngegg(2).png"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Peter</h5>
      <p class="card-text">
        Manager
      </p>
    </div>
  </div>
  <div class="card">
    <img
      class="card-img-top"
      src="img/pngegg(2).png"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Peter</h5>
      <p class="card-text">
        Manager
      </p>
    </div>
  </div>
  <div class="card">
    <img
      class="card-img-top"
      src="img/pngegg(2).png"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Peter</h5>
      <p class="card-text">
        Manager
      </p>
    </div>
  </div>
</div>
    </div> */}
  {/* <div class="container-fluid py-5">
<div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-8 col text-center mb-4">
      <h6 class="text-primary font-weight-normal text-uppercase mb-3">
        Our achievement
      </h6>
      <h1 class="mb-4">
        Some Of Our Awesome achievement
      </h1>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div> */}
  {/* tabs End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
    <div className="row pt-5">
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-primary mb-4">Get In Touch</h4>
        <p>
          <i className="fa fa-map-marker-alt mr-2" />
          No. 10, 12th East Cross Road, Gandhi Nagar, Vellore – 632 006
        </p>
        <p>
          <i className="fa fa-phone-alt mr-2" />
          +91 96262 24666
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +91 86819 38193
        </p>
        <p>
          <i className="fa fa-envelope mr-2" />
          mckleandesigns@gmail.com
        </p>
        <div className="d-flex justify-content-start mt-4">
          <a
            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
            style={{ width: 38, height: 38 }}
            href="#"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
            style={{ width: 38, height: 38 }}
            href="#"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
            style={{ width: 38, height: 38 }}
            href="#"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
            style={{ width: 38, height: 38 }}
            href="#"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-primary mb-4">Quick Links</h4>
        <div className="d-flex flex-column justify-content-start">
          <a className="text-white mb-2" href="index.html">
            <i className="fa fa-angle-right mr-2" />
            Home
          </a>
          <a className="text-white mb-2" href="about.html">
            <i className="fa fa-angle-right mr-2" />
            About Us
          </a>
          <a className="text-white mb-2" href="service.html">
            <i className="fa fa-angle-right mr-2" />
            Our Services
          </a>
          <a className="text-white mb-2" href="project.html">
            <i className="fa fa-angle-right mr-2" />
            Our Projects
          </a>
          <a className="text-white" href="contact.html">
            <i className="fa fa-angle-right mr-2" />
            Contact Us
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5" />
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-primary mb-4">Newsletter</h4>
        <form action="">
          <div className="form-group">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Your Name"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control border-0"
              placeholder="Your Email"
              required="required"
            />
          </div>
          <div>
            <button
              className="btn btn-lg btn-primary btn-block border-0"
              type="submit"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary back-to-top">
    <i className="fa fa-angle-double-up" />
  </a>
</>
)}