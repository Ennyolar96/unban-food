import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Images from './images';
import items from './items';

const Home =()=> {

  const show =()=> {
    let slideIndex = 0;

      const  showSlides =()=> {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000);// Change image every 3 seconds
      };
      showSlides();  
  }
  setTimeout(show, 5000);

  


  return (
    <div className='main'>
      <div className="top">
        <aside>
          <div className="txt1">
            <p>YOU DON'T NEED A </p>
            <p>UTENSIL TO EAT</p>
            <p>GOOD MEALS</p>
            <p>EVERYDAY...</p>
          </div>
        </aside>
        <div className="slideshow-container">
            <div className="mySlides fade">
                <div className="numbertext">1 / 3</div>
                <img src={Images.One} alt='Food'/>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">2 / 3</div>
                <img src={Images.Two} alt='Food'/>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src={Images.Three} alt='Food'/>
            </div>
        </div>
      </div>

      <div className="txt">
        <h3>Welcome to Home of Good Meals...</h3>
      </div>

      <section className="content">

        {items.map(item => 
          <div className="card" key={item.id}>
          <img src={item.image} alt="Jollof" className='img'/>
          <div className='desc'>
            <strong><p>{item.name}</p></strong>
            <p>{item.desc}</p>
            <ul className='button'><li><Link to="/product">View details</Link></li></ul>
          </div>
        </div>
        )}
      </section>
    </div>
    
  );
};

export default Home;