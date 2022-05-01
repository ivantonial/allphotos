import './home.css'

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
          <div className='photo-box'>
            <div className="photo-box-header">
              <img src="/src/assets/imgProfile.jpeg" alt="" /> 
              <p>Username</p>
              </div>
            <div className="photo-box-body"><img src="/src/assets/galolindo.png" alt="" /></div>
            <div className="photo-box-footer">
              <img src="/src/assets/heart.svg" alt="" className='photo-box-heart-img' />
              <p className="photo-box-likes">145</p> <p className="photo-box-description">Wow, nice cock!</p>
            </div>
          </div>
          <div className='photo-box'></div>
          <div className='photo-box'></div>
          <div className='photo-box'></div>
          <div className='photo-box'></div>
          <div className='photo-box'></div>
          <div className='photo-box'></div>
          <div className='photo-box'></div>
          
        </div>
      </div>
  )
}