import React from "react";
import PhotoBox from "./photobox.jsx";
import './home.css'

// async function get_posts(){
//   const path = 'http://localhost:8000';
//   const myRequests = new Request(path+'/getImages');

//   const request = await fetch(myRequests);
//   console.log(request.status);
//   let requestJson
//     if(request.status === 200){
//       requestJson = await request.json();
      
//     }else{
//       requestJson = 'DEU ERRADO'
//     }
//   console.log(requestJson)
//   return requestJson
// };

// const images = get_posts();
// Mock DATA
// const images = [
//   { name: 'MaquinhosGAMEPLAY', title: 'NADA', description: 'I like toads', img: <img src="/src/assets/galolindo.png"  /> },
//   { name: 'MaquinhosGAMEPLAY', title: 'NADA', description: 'I like big cocks', img: <img src="/src/assets/galolindo.png"  /> },
//   { name: 'MaquinhosGAMEPLAY', title: 'NADA', description: 'I like toads', img: <img src="/src/assets/galolindo.png"  /> }
// ]
// function imgAreaGeneration(imgArray){
//   let tagArea =[]
//   imgArray.forEach(element => {
//     tagArea.push(<PhotoBox name={element.name} imgTag={element.img} description={element.description}></PhotoBox>)
//     document.getElementById("photos-display").innerHTML += `
//     <div class='photo-box'>
//     <div class="photo-box-header">
//       <img src="/src/assets/imgProfile.jpeg" alt="" /> 
//       <p>${element.name}</p>
//     </div>
//     <div class="photo-box-body">${element.img}</div>
//     <div class="photo-box-footer">
//         <p class="photo-box-description">${element.description}</p>
//     </div>
//   </div>`
//   });
//   const theReturn = tagArea;
//   console.log(theReturn);
//   return theReturn
// }
// //const imgArea = imgAreaGeneration(images)

// export const Home = () => {
//   return (
//       <div id="homepage">
//         <img src="/src/assets/BackgroundImage.png" id="backgroundImg" ></img>
//         <div id="navbar-home">
//           <div id="right-homebar-area">
//             <img src="/src/assets/Logo.svg" alt="" id='logo-svg-homebar'/>
//             <p>AllPhotos</p>
//           </div>
//           <div id="left-homebar-area">
//             <button id='photosUpload'>+</button>
//             <p id='username-navbar'>Username</p>
//             <button id='btn-profile'><img src="/src/assets/imgProfile.jpeg" id='imgProfile'/></button>
//           </div>
//         </div>
//         <div id='photos-display'>
//         </div>
//       </div>
//   )
// }


function imgAreaGeneration(imgArray) {
  let tagArea = [];
  imgArray.forEach(element => {
    tagArea.push( React.createElement(PhotoBox, {
      name: element.name,
      imgTag: element.img,
      description: element.description
    }));
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
  </div>`;
  });
  const theReturn = tagArea;
  console.log(theReturn);
  return theReturn;
} 


export const Home = () => {
  return React.createElement("div", {
    id: "homepage"
  }, React.createElement("img", {
    src: "/src/assets/BackgroundImage.png",
    id: "backgroundImg"
  }), React.createElement("div", {
    id: "navbar-home"
  }, React.createElement("div", {
    id: "right-homebar-area"
  }, React.createElement("img", {
    src: "/src/assets/Logo.svg",
    alt: "",
    id: "logo-svg-homebar"
  }), React.createElement("p", null, "AllPhotos")), React.createElement("div", {
    id: "left-homebar-area"
  }, React.createElement("button", {
    id: "photosUpload"
  }, "+"), React.createElement("p", {
    id: "username-navbar"
  }, "Username"), React.createElement("button", {
    id: "btn-profile"
  }, React.createElement("img", {
    src: "/src/assets/imgProfile.jpeg",
    id: "imgProfile"
  })))), React.createElement("div", {
    id: "photos-display"
  }));
};