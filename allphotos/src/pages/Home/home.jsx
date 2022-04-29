import './home.css'

export const Home = () => {
  return (
      <div id="homepage">
        <img src="/src/assets/BackgroundImage.png" id="backgroundImg" ></img>
        <div id="navbar-home">
          <button id='photosUpload'>+</button>
          <p id='username-navbar'>Username</p>
          <button id='btn-profile'><img src="/src/assets/imgProfile.jpeg" id='imgProfile'/></button>
        </div>     
      </div>
  )
}