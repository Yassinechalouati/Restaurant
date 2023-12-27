// src/Menu.js

import React from 'react';
import { Icon } from '@iconify/react';
import pepperHot from '@iconify/icons-fa6-solid/pepper-hot';

function Menu() {
  return (
    <div>
        <div className="header">
            <p>Chili's Tunisie</p>    
            <h1>Découvrez les meilleurs recettes syriennes</h1>
            <a href="#" className="button">Voir notre menu</a>
        </div>    
            <div className="notremenu">
        <div className="menu-title-container">
          <Icon icon={pepperHot} className="icon" />
          <p>
            <b>Notre Menu</b>
          </p>
          <Icon icon={pepperHot} className="icon" />
        </div>
        <hr />
      </div>
      <div className="green-text-section nos-fajitas">
        <p><b>Nos Fajitas</b></p>
        <div className="fajitas-images">
            <div className='fajita-item'>
                <img src="faj1.png" alt="Fajita 1" />
                <p className="trio-name">Trio Fajitas</p>
                <p className="price price-style">49,90 DT</p>
            </div>
            <div className='fajita-item'>
                <img src="faj2.png" alt="Fajita 2" />
                <p className="trio-name">Trio Fajitas</p>
                <p className="price price-style">49,90 DT</p>
            </div>
            <div className='fajita-item'>
            <img src="faj3.png" alt="Fajita 3" />
                <p className="trio-name">Trio Fajitas</p>
                <p className="price price-style">49,90 DT</p>
            </div>
        </div>
      </div>
      <div className="green-text-section nos-fajitas">
        <div className="fajitas-images">
            <div className='fajita-item'>
                <img src="faj4.png" alt="Fajita 1" />
                <p className="trio-name">Trio Fajitas</p>
                <p className="price price-style">49,90 DT</p>
            </div>
            <div className='fajita-item'>
                <img src="faj5.png" alt="Fajita 2" />
                <p className="trio-name">Trio Fajitas</p>
                <p className="price price-style">49,90 DT</p>
            </div>
            <div className='fajita-item'>
            <img src="faj6.png" alt="Fajita 3" />
                <p className="trio-name">Trio Fajitas</p>
                <p className="price price-style">49,90 DT</p>
            </div>
        </div>
      </div>
        <div className="voir">
            <p className="voirplus">
                <a href="#" className="underline">Voir plus</a>
            </p>
        </div>
        <div className="green-text-section nos-fajitas">
        <p><b>Nos Fajitas</b></p>
        <div className="fajitas-images">
            <div className='fajita-item'>
                <img src="faj1.png" alt="Fajita 1" />
                <p className="trio-name">Trio Fajitas</p>
                <p className="price price-style">49,90 DT</p>
            </div>
            <div className='fajita-item'>
                <img src="faj2.png" alt="Fajita 2" />
                <p className="trio-name">Trio Fajitas</p>
                <p className="price price-style">49,90 DT</p>
            </div>
            <div className='fajita-item'>
            <img src="faj3.png" alt="Fajita 3" />
                <p className="trio-name">Trio Fajitas</p>
                <p className="price price-style">49,90 DT</p>
            </div>
        </div>
      </div>
      <div className="green-text-section nos-fajitas">
        <div className="fajitas-images">
            <div className='fajita-item'>
                <img src="faj4.png" alt="Fajita 1" />
                <p className="trio-name">Trio Fajitas</p>
                <p className="price price-style">49,90 DT</p>
            </div>
            <div className='fajita-item'>
                <img src="faj5.png" alt="Fajita 2" />
                <p className="trio-name">Trio Fajitas</p>
                <p className="price price-style">49,90 DT</p>
            </div>
            <div className='fajita-item'>
            <img src="faj6.png" alt="Fajita 3" />
                <p className="trio-name">Trio Fajitas</p>
                <p className="price price-style">49,90 DT</p>
            </div>
        </div>
      </div>
        <div className="voir">
            <p className="voirplus">
                <a href="#" className="underline">Voir plus</a>
            </p>
        </div>
        <div className="image-container">
             <img src="chilis.jpg" />
             <p className="white">Prendre Contact</p>
        </div>
    </div>
  );
}

export default Menu;