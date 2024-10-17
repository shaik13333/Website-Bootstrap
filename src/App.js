import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap CSS
import image from "./pexels-divinetechygirl-1181316.jpg"
import image2 from "./pexels-fauxels-3183183.jpg"
import image3 from "./pexels-hillaryfox-1595385.jpg"
import data from "./db.js"

function App() {
  return (
    <div className="App">
      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</nav>

<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:"800px"}}>
      <img src={image} class="d-block w-100" alt="..." style={{height:"800px"}}/>
    </div>
    <div class="carousel-item" style={{height:"800px"}}>
      <img src={image2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" style={{height:"800px"}}>
      <img src={image3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div id='cardsCont'>
{data.map((x)=>{
  return(
  <div class="card">
  <img src={x.img} class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">{x.title}</h5>
    <p class="card-text">{x.des}</p>
  
  </div>
</div>
  )
})}
</div>
<footer style={{ backgroundColor: '#333', color: '#ccc', height:"171px" }} className="py-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase" style={{marginTop:"10px"}}>Techno Waves</h5>
            <p className="small">Delivering excellence in technology solutions since 2024.</p>
            <p className="small">&copy; 2024 Your Company. All Rights Reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">About Us</a></li>
              <li><a href="#" className="text-light">Services</a></li>
              <li><a href="#" className="text-light">Privacy Policy</a></li>
              <li><a href="#" className="text-light">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase" style={{marginTop:"45px"}}>Follow Us</h5>
            <div>
              <a href="#" className="text-light mx-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light mx-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light mx-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light mx-2">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
