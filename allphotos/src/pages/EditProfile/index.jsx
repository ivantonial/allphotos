import './editprofile.css'

export function EditProfile() {
  return (
  <div id="editProfilePage">
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
    <div id="edit-profile-body">
      <h1 id="edit-profile-title">Editar profile</h1>
      <div id="edit-profile-input-fields">

        <div className="single-input-div">
          <label htmlFor="full-name-input">Nome completo</label>
          <input type="text" id='full-name-input' />
        </div>

        <div className="single-input-div">
          <label htmlFor="password-input">Senha</label>
          <input type="password" id='password-input' />
        </div>

        <div className="single-input-div">
          <label htmlFor="email-input">Email</label>
          <input type="email" id='email-input' />
        </div>

        <div className="single-input-div">
          <label htmlFor="phone-input">Número de celular</label>
          <input type='tel' id='phone-input' />
        </div>

        <div className="single-input-div">
          <label htmlFor="birthdate-input">Data de nascimento</label>
          <input type='date' id='birthdate-input' />
        </div>

        <div className="single-input-div">
          <label htmlFor="CPF-input">CPF</label>
          <input type='number' id='CPF-input' />
        </div>

        <div className="single-input-div">
        <label htmlFor="gender-input">Sexo</label>
        <select name="select" id='gender-input'>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="nao-informar">Prefiro não informar</option>
          <option value="sim">Faço</option>
        </select>
        </div>

      </div>
      <div id="input-profile-photo-field">
        <p>COLOCAR IMPORTAÇÂO DE FOTO AQUI</p>
      </div>
      <button type='button' id='save-edit-profile-btn'>Salvar</button>
    </div>
  </div>
)
}