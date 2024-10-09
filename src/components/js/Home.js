import React from 'react';
import '../css/YourRestaurant.css';
import '../css/FontAwesomeAll.css';
import { activeLink } from '../YourRestaurant.js';
import imagesHome from './imagesHome.js';

function Home() {

  return (
    <>
      <section className="py-banner">
        <img src={imagesHome[0].urlh} alt={imagesHome[0].alth}
          className="py-banner-img"
        />
        <div className="py-banner-content">
          The best and most exquisite food is here
        </div>
      </section>

      <main className="py-main">
        <section className="py-group py-group-color">
          <div className="py-container">
            <h2 className="py-main-title">Welcome to your restaurant</h2>
            <p className="py-main-txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Distinctio, fuga. Praesentium maxime, excepturi debitis 
              consequatur illum.
            </p>
          </div>
        </section>
        
        <section className="py-group py-main-about-description">
          <div className="py-container py-container-flex">
            <div className="py-column py-column-50">
              <img src={imagesHome[1].urlh} alt={imagesHome[1].alth}/>
            </div>
            <div className="py-column py-column-50">
              <h3 className="py-column-title">Expertice In Industrial Solution</h3>
              <p className="py-column-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Distinctio, fuga. Praesentium maxime, excepturi debitis 
                consequatur illum.
              </p>
              <a href="https://pedrotuarez.github.io/yourrestaurant-contact" 
               className="py-btn py-btn-contact" 
               onClick={() => activeLink("btnContact")}>
                 Contact
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-group py-today-special">
          <h2 className="py-group-title">Today's Specials</h2>
          <div className="py-container py-container-flex">
            <div className="py-column py-column-50-25">
              <img src={imagesHome[2].urlh} alt={imagesHome[2].alth} 
                className="py-today-special-img"
              />
              <div className="py-today-special-title">Special of the day 1</div>
              <div className="py-today-special-price">$20</div>
            </div>
            <div className="py-column py-column-50-25">
              <img src={imagesHome[3].urlh} alt={imagesHome[3].alth} 
                className="py-today-special-img"
              />
              <div className="py-today-special-title">Special of the day 2</div>
              <div className="py-today-special-price">$20</div>
            </div>
            <div className="py-column py-column-50-25">
              <img src={imagesHome[4].urlh} alt={imagesHome[4].alth} 
                className="py-today-special-img"
              />
              <div className="py-today-special-title">Special of the day 3</div>
              <div className="py-today-special-price">$20</div>
            </div>
            <div className="py-column py-column-50-25">
              <img src={imagesHome[5].urlh} alt={imagesHome[5].alth} 
                className="py-today-special-img"
              />
              <div className="py-today-special-title">Special of the day 4</div>
              <div className="py-today-special-price">$20</div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;