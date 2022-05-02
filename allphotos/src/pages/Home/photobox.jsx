import React from "react";
function likeFunc(e){
    if(e.target.src === '/src/assets/heartRed.svg'){
        e.target.src= '/src/assets/heart.svg'
    }
    if(e.target.src === '/src/assets/heart.svg'){
        e.target.src= '/src/assets/heartRed.svg'
    }
}
export default props =>{
    return(
        <div className='photo-box'>
            <div className="photo-box-header">
              <img src="/src/assets/imgProfile.jpeg" alt="" /> 
              <p>{props.name}</p>
            </div>
            <div className="photo-box-body">{props.imgTag}</div>
            <div className="photo-box-footer">
                <img src="/src/assets/heart.svg" value='black' className='photo-box-heart-img' onClick={(e)=> 
                {
                    let heartColor = e.target.getAttribute('value')
                    if(heartColor === 'black'){
                        e.target.src= '/src/assets/heartRed.svg'
                        e.target.setAttribute('value','red')
                    }
                    if(heartColor === 'red'){
                        e.target.src= '/src/assets/heart.svg'
                        e.target.setAttribute('value','black')
                    }
                }
                }/>
                <p className="photo-box-description">{props.description}</p>
            </div>
          </div>
    )
}