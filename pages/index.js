import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script'


export default function Home() {
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
      <a href="/" className="navbar-brand">
        <img src="img/mds.png" alt="logo" className="navbar-brd" />
      </a>
      {/* <a href="/" class="navbar-brand">
    <img src="img/ecofriendly.png" alt="logo" class="navbar-brd1" />
  </a> */}
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse  px-3" id="navbarCollapse">
        <div className="navbar-nav ml-auto py-0">
          <a href="index.html" className="nav-item nav-link active">
            Home
          </a>
          <a href="/about" className="nav-item nav-link">
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
  {/* Carousel Start */}
  <div className="container-fluid p-0">
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 800 }}>
              <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">
                Creative Interior Design
              </h4>
              <h3 className="display-3 text-white mb-md-4">
                Make Your Home Better
              </h3>
              <a
                href="service.html"
                className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 800 }}>
              <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">
                Creative Interior Design
              </h4>
              <h3 className="display-3 text-white mb-md-4">
                Stay At Home In Peace
              </h3>
              <a
                href=""
                className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#header-carousel"
        data-slide="prev"
      >
        <div className="btn btn-primary" style={{ width: 45, height: 45 }}>
          <span className="carousel-control-prev-icon mb-n2" />
        </div>
      </a>
      <a
        className="carousel-control-next"
        href="#header-carousel"
        data-slide="next"
      >
        <div className="btn btn-primary" style={{ width: 45, height: 45 }}>
          <span className="carousel-control-next-icon mb-n2" />
        </div>
      </a>
    </div>
  </div>
  {/* Carousel End */}
  {/* Under Nav Start */}
  {/* Under Nav End */}
  {/* Services Start */}
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 col text-center mb-4">
        <h2 className="text-primary">We Let Our Work To Speak</h2>
      </div>
    </div>
    <div>
      <div className="col-lg-6 pr-lg-5">
        <h6 className="text-primary font-weight-normal text-uppercase mb-6">
          Our Awesome Services
        </h6>
        <h1 className="mb-4 section-title">
          Awesome including Design &amp; Execution Services For Your Home and
          Office
        </h1>
        <p>
          We do residential apartments, Individual homes, Ship interiors,
          Caravans. Handled site works of villas, Palaces in Dubai and Sharjah,
          turnkey office interior projects, Hotel furniture’s.
          <span id="dots">...</span>
          <span id="more">
            , Including false ceilings, Wall panelling, aluminium, wooden and
            Gyp board partitions Carpeting, false flooring, parquet flooring,
            ceramic flooring, T &amp; G ceiling, panelling, steel fabrication,
            auditorium chairs, conference tables, library and magazine racks,
            kitchen cabinets, reception counters etc… We do commercial projects,
            Residential projects. Commercial projects like Corporate offices,
            Call centres, Luxury hotels, Restaurants, Public hospitals, Clinics,
            Pharmacy, Laboratories, Malls, Auditoriums, Theatres, Conference
            hall, Banks, Garments Show rooms, Shoe factories, Factories, Front
            offices, Bank offices, ATM’s, School &amp; Colleges
          </span>
        </p>
        <button
          id="myBtn"
          onclick="{myFunction}"
          className="btn btn-primary mt-3 py-2 px-4"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
  <div className="container py-5">
    <div className="card-deck">
      <div className="card">
        <img
          className="card-img-top"
          src="img/portfolio-1.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">False ceiling</h5>
          <p className="card-text">
            False ceilings are essentially used for concealing wires, sound
            proofing, fire safety, energy efficiency and to help in moisture and
            sag resistance
          </p>
          <a href="/service.html" className="read">
            Read More...
          </a>
          {/* <ul>
            <li>Gypsum ceiling</li>
            <li>Wooden ceiling</li>
            <li>Laminate ceilings</li>
            <li>Glass & mirror ceiling</li>
            <li>T & G ceiling</li>
            <li>Murals</li>
            <li>Carving panels</li>
            <li>Wall painting</li>
            <li>Exteriors painting</li>
            <li> Interior painting</li>
            <li>Texture painting</li>
            <li>Antique painting</li>
            <li>Rustic painting</li>
            <li>Joinery</li>
            <li>Door, Door frames</li>
            <li>Window, Window shutters</li>
            <li>Columnsg</li>
            <li>Pillars</li>
            <li>Pergolas</li>
            <li>Wooden bridges</li>
            <li>Pool floorings</li>
            <li>Columnsg</li>
            <li> Furniture</li>
          </ul> */}
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="img/portfolio-3.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Solid Wood Furniture</h5>
          <p className="card-text">
            Producing or Wooden chairs, kitchen cabinets, knock down furniture,
            modular office furniture and office furniture, antique furniture’s
            out of solid timber and panel based material etc…
          </p>
          <a href="/service.html" className="read">
            Read More...
          </a>
          {/* <ul>
            <li>Chairs</li>
            <li>Dining tables</li>
            <li>Bar stools</li>
            <li>Bar counters</li>
            <li>Reception counters</li>
            <li>Console tables</li>
            <li>Chess lounge</li>
            <li>Arm chairs</li>
            <li>Puff</li>
            <li>Cot</li>
            <li> Kitchen cabinets</li>
            <li>Buffy units</li>
            <li>Crockery units</li>
            <li>Book shelves</li>
            <li>Wardrobes</li>
            <li>Storages</li>
        </ul> */}
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="img/portfolio-2.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Upholstery Division</h5>
          <p className="card-text">
            Upholstery departments for Chair upholstery, lounge, bar stool,
            solid wood sofas, fully upholstery sofa including frame work like
            American sofas and Italian sofas.
          </p>
          <a href="/service.html" className="read">
            Read More...
          </a>
          {/* <ul>
            <li>Sofas</li>
            <li>Lounge</li>
            <li>Puff</li>
            <li>Chaise Lounge</li>
            <li>Ottoman</li>
            <li>Solid wood sofas</li>
            <li>Fully upholstery sofas</li>
            <li>SS fabricated sofas</li>
            <li>Head boards & foot boards</li>
            <li> Mattress bases</li>
        </ul> */}
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="img/portfolio-4.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Painting &amp; Polishing Division</h5>
          <p className="card-text">
            Melamine, PU polyester, duco pigment finishes, veneer selection,
            grain matching, group matching, stain mixing and inlays in veneers
            and painting.
          </p>
          <a href="/service.html" className="read">
            Read More...
          </a>
          {/* <ul>
            <li>Duco painting</li>
            <li>2K painting</li>
            <li>Auto lacquer</li>
            <li>Pigment finishes</li>
            <li>Melamine polish</li>
            <li>Polyurethane polish</li>
            <li>Polyester polish</li>
            <li>Site works</li>
            <li>Wall panelling</li>
            <li>Glass panelling</li>
            <li>Glass partition</li>
            <li>Wooden ceiling</li>
            <li>Wooden rafters</li>
            <li>Chaise Lounge</li>
            <li>Reception counters</li>
            <li>Bar counters</li>
            <li>Library displays</li>
            <li>Aluminium partitions</li>
            <li>Glass cladding works</li>
            <li>Mirror cladding works</li>
            <li>Fabric panel cladding</li>
            <li>Hospital storages</li>
            <li>File rackse</li>
            <li>Podium</li>
            <li>Bar counters</li>
            <li>Stage bases</li>
        </ul> */}
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
  {/* counter Start */}
  <div className="sectiontitle">
    <h2>Projects statistics</h2>
    <span className="headerLine" />
  </div>
  <div id="projectFacts" className="sectionClass">
    <div className="fullWidth eight columns">
      <div className="projectFactsWrap">
        <div
          className="item wow fadeInUpBig animated animated"
          data-number={12}
          style={{ visibility: "visible" }}
        >
          <i className="fa-solid fa-thumbs-up" />
          <p id="number1" className="number">
            1000
          </p>
          <span />
          <p>Project compeleted</p>
        </div>
        <div
          className="item wow fadeInUpBig animated animated"
          data-number={55}
          style={{ visibility: "visible" }}
        >
          <i className="fa-solid fa-building" />
          <p id="number2" className="number">
            1500
          </p>
          <span />
          <p>On going Projects</p>
        </div>
        <div
          className="item wow fadeInUpBig animated animated"
          data-number={359}
          style={{ visibility: "visible" }}
        >
          <i className="fa-solid fa-users" />
          <p id="number3" className="number">
            500
          </p>
          <span />
          <p>Satifyied Client</p>
        </div>
        <div
          className="item wow fadeInUpBig animated animated"
          data-number={246}
          style={{ visibility: "visible" }}
        >
          <i className="fa-solid fa-tape" />
          <p id="number4" className="number">
            1000
          </p>
          <span />
          <p>Sq.ft</p>
        </div>
      </div>
    </div>
  </div>
  {/* counter Start End */}
  {/* Features Start */}
  <div className="container-fluid bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mt-5 py-5 pr-lg-5">
          <h6 className="text-primary font-weight-normal text-uppercase mb-3">
            Why Choose Us?
          </h6>
          <h1 className="mb-4 section-title">
            29 Years Experience In The Interior Design Industry
          </h1>
          <p className="mb-4">
            Mcklean Interiors established in the year of June 1990, Passed 29
            years, our team of custom made turnkey interior solutions including
            Design &amp; Execution services in several projects
          </p>
          <ul className="list-inline">
            <li>
              <h5>
                <i className="far fa-check-square text-primary mr-3" />
                29 Years Experience
              </h5>
            </li>
            <li>
              <h5>
                <i className="far fa-check-square text-primary mr-3" />
                Best Interior Design
              </h5>
            </li>
            <li>
              <h5>
                <i className="far fa-check-square text-primary mr-3" />
                Customer Satisfaction
              </h5>
            </li>
          </ul>
          <a href="project.html" className="btn btn-primary mt-3 py-2 px-4">
            View More
          </a>
        </div>
        <div className="col-lg-5">
          <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
            <img className="h-100" src="img/feature.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
  {/* Projects Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col text-center mb-4">
          <h6 className="text-primary font-weight-normal text-uppercase mb-3">
            Our Projects
          </h6>
          <h1 className="mb-4">
            Some Of Our Awesome Design &amp; Execution Projects
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center mb-2">
          <ul className="list-inline mb-4" id="portfolio-flters">
            <li className="btn btn-outline-primary m-1 active" data-filter="*">
              All
            </li>
            <li className="btn btn-outline-primary m-1" data-filter=".first">
              Complete
            </li>
            <li className="btn btn-outline-primary m-1" data-filter=".second">
              Running
            </li>
            <li className="btn btn-outline-primary m-1" data-filter=".third">
              Upcoming
            </li>
          </ul>
        </div>
      </div>
      <div className="row mx-1 portfolio-container">
        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
          <div className="position-relative overflow-hidden">
            <div className="portfolio-img d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="img/portfolio-1.jpg" alt="" />
            </div>
            <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
              <h4 className="text-white mb-4">Project Name</h4>
              <div className="d-flex align-items-center justify-content-center">
                <a className="btn btn-outline-primary m-1" href="">
                  <i className="fa fa-link" />
                </a>
                <a
                  className="btn btn-outline-primary m-1"
                  href="img/portfolio-1.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
          <div className="position-relative overflow-hidden">
            <div className="portfolio-img d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="img/portfolio-2.jpg" alt="" />
            </div>
            <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
              <h4 className="text-white mb-4">Project Name</h4>
              <div className="d-flex align-items-center justify-content-center">
                <a className="btn btn-outline-primary m-1" href="">
                  <i className="fa fa-link" />
                </a>
                <a
                  className="btn btn-outline-primary m-1"
                  href="img/portfolio-2.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
          <div className="position-relative overflow-hidden">
            <div className="portfolio-img d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="img/portfolio-3.jpg" alt="" />
            </div>
            <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
              <h4 className="text-white mb-4">Project Name</h4>
              <div className="d-flex align-items-center justify-content-center">
                <a className="btn btn-outline-primary m-1" href="">
                  <i className="fa fa-link" />
                </a>
                <a
                  className="btn btn-outline-primary m-1"
                  href="img/portfolio-3.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
          <div className="position-relative overflow-hidden">
            <div className="portfolio-img d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="img/portfolio-4.jpg" alt="" />
            </div>
            <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
              <h4 className="text-white mb-4">Project Name</h4>
              <div className="d-flex align-items-center justify-content-center">
                <a className="btn btn-outline-primary m-1" href="">
                  <i className="fa fa-link" />
                </a>
                <a
                  className="btn btn-outline-primary m-1"
                  href="img/portfolio-4.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
          <div className="position-relative overflow-hidden">
            <div className="portfolio-img d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="img/portfolio-5.jpg" alt="" />
            </div>
            <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
              <h4 className="text-white mb-4">Project Name</h4>
              <div className="d-flex align-items-center justify-content-center">
                <a className="btn btn-outline-primary m-1" href="">
                  <i className="fa fa-link" />
                </a>
                <a
                  className="btn btn-outline-primary m-1"
                  href="img/portfolio-5.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
          <div className="position-relative overflow-hidden">
            <div className="portfolio-img d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="img/portfolio-6.jpg" alt="" />
            </div>
            <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
              <h4 className="text-white mb-4">Project Name</h4>
              <div className="d-flex align-items-center justify-content-center">
                <a className="btn btn-outline-primary m-1" href="">
                  <i className="fa fa-link" />
                </a>
                <a
                  className="btn btn-outline-primary m-1"
                  href="img/portfolio-6.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Projects End */}
  {/* Testimonial Start */}
  <div className="container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-md-7 py-5 pr-md-5">
          <h6 className="text-primary font-weight-normal text-uppercase mb-3 pt-5">
            Testimonial
          </h6>
          <h1 className="mb-4 section-title">What Our Clients Say</h1>
          <div className="owl-carousel testimonial-carousel position-relative pb-5 mb-md-5">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid rounded-circle"
                  src="img/testimonial-1.jpg"
                  style={{ width: 60, height: 60 }}
                  alt=""
                />
                <div className="ml-3">
                  <h5>Client Name</h5>
                  <i>Profession</i>
                </div>
              </div>
              <p>
                Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet
                clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet
                dolor lorem erat. Diam no amet sea justo vero ut. Dolor ipsum
                kasd ipsum dolore.
              </p>
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid rounded-circle"
                  src="img/testimonial-2.jpg"
                  style={{ width: 60, height: 60 }}
                  alt=""
                />
                <div className="ml-3">
                  <h5>Client Name</h5>
                  <i>Profession</i>
                </div>
              </div>
              <p className="m-0">
                Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet
                clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet
                dolor lorem erat. Diam no amet sea justo vero ut. Dolor ipsum
                kasd ipsum dolore.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
            <img className="h-100" src="img/testimonial.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
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
  {/* JavaScript Libraries */}
  {/* 
    
    
     */}
  {/* Contact Javascript File */}
  {/*
   */}
  {/* Template Javascript */}
  {/*  */}
  
</>

  )
}
