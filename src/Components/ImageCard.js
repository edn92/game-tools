import {Link } from 'react-router-dom';

function ImageCard(props){
    const styles = {
        backgroundImage: `url(${props.backgroundImage})`
    }

    return (
        <div className="card-container" style={styles}>
            <Link to={props.link}>
                <span><label>{props.labelText}</label></span>
            </Link>
        </div>
    )
}

export default ImageCard;