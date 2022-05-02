import React from "react";
import PhotoBox from "./photobox.jsx";
import './home.css'

let imgArea;

function get_posts(){
  const path = 'http://localhost:8000';
  const myRequests = new Request(path + '/getImages');
  fetch(myRequests).then(elem => {
    if(elem.status != 200) return "Deu errado"  
    else return elem.json()
  }).then(elem => {
    imgArea = imgAreaGeneration(elem)
  }).catch(err => {
    console.log(err);
  })
};

get_posts();

function imgAreaGeneration(imgArray){
  let tagArea =[]
  imgArray.forEach(element => {
    tagArea.push(<PhotoBox name={element.name} imgTag={element.img} description={element.description}></PhotoBox>)
    document.getElementById("photos-display").innerHTML += `
    <div class='photo-box'>
    <div class="photo-box-header">
      <img src="/src/assets/imgProfile.jpeg" alt="" /> 
      <p>${element.name}</p>
    </div>
    <div class="photo-box-body">${element.img}</div>
    <div class="photo-box-footer">
        <p class="photo-box-description">${element.description}</p>
    </div>
  </div>`
  });
  const theReturn = tagArea;
  return theReturn
}

export const Home = () => {
  return (
      <div id="homepage">
        <img src="/src/assets/BackgroundImage.png" id="backgroundImg" ></img>
        <div id="navbar-home">
          <div id="right-homebar-area">
            <img src="/src/assets/Logo.svg" alt="" id='logo-svg-homebar'/>
            <p>AllPhotos</p>
          </div>
          <div id="left-homebar-area">
            <button id='photosUpload'>+</button>
            <p id='username-navbar'>Username</p>
            <button id='btn-profile'><img src="/src/assets/imgProfile.jpeg" id='imgProfile'/></button>
          </div>
        </div>
        <div id='photos-display'>
        </div>
      </div>
  )
}