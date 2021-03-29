import './Tour.scss';
import {useState} from "react";

function Tour(props) {
        const [showInfo, setShowInfo] = useState(false);
        const {id, city, img, name, info } = props.tour;
        const handleinfo = () =>{
            setShowInfo(!showInfo)
        }
        return (
            
            <article className="tour">
                <div className="img-container">
                    <img  src={img} alt="" />
                <span className="close-btn">
                    <i onClick={() =>props.remove(id)} className="fas fa-window-close" />
                </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{""}
                        <span>
                            <i onClick={handleinfo} className="fas fa-caret-square-down"></i>
                        </span>
                    </h5>
                    {showInfo && <p>{info}</p> }
                    
                </div>
            </article>
        );
    }


export default Tour;