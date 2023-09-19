import { useState } from "react"

const WorkItems = (props) => {
    const{title, id, description, image, url} = props

    const handleDemoClick = () => {
        window.location.href = url
    }
   
  return (
    <div className="work__card" key={id}>
        <a 
        href={url} 
        className="work__img-container"
        >
            <img src={image} alt={title} className="work__img" />
        </a>
        <h3 className="work__title">{title}</h3>
        <div className="work__description-div">
            <span className="work__description">{description}</span>    
        </div>
        <button onClick={handleDemoClick} className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </button>
    </div>
  )
}
export default WorkItems