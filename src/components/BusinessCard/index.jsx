import './style.css';
import {
    FaGlobe,
    FaPhone,
    FaMapMarkedAlt
} from 'react-icons/fa';

const BusinessCard = (props) => {
    return (
        <div className="flex flex-row justify-start gap-3">
            <div className='business-card front' 
                style={{backgroundImage: `url(${props.bgData})`}}
            >
                <div className='profile'>
                    <div className='photo'>
                        <img src={props.avatarData} alt="" />
                    </div>
                    <div className='name'>
                        {props.name}
                    </div>
                    <div className='company-position'>
                        {props.position}
                    </div>
                    <div className='info'>
                        <div className='id-num'>
                            {'id nº ' + props.id}
                        </div>  
                        <div className='exp-date'>
                            {'Valid Thru: ' + props.expDate}
                        </div>  
                    </div>
                </div>
                <div className='business-card-footer'>
                    <div className='logo'>
                        <img src={props.logoData} alt="" />
                    </div>
                </div>
            </div>

            <div className='business-card back' 
                style={{backgroundImage: `url(${props.bgData})`}}
            >
                <div className='container-back'>
                    <div className='terms-and-conditions'>
                        <h1>
                            {props.tcTitle}
                        </h1>
                        <p>
                            {props.pBack ? props.pBack : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend justo. Aenean tincidunt turpis eu rhoncus pulvinar. Mauris volutpat vehicula."}
                        </p>
                    </div>
                    
                </div>
                <div className='profile-data-back'>
                    <h1>
                        {props.id}
                    </h1>
                    <p>
                        {'Join Date: ' + props.join}
                    </p>
                    <p>
                        {'Valid Thru: ' + props.expDate}
                    </p>
                </div>
                <div className='footer-back'>
                    <div className='social-item'>
                        <FaGlobe />
                        <p>{props.website}</p>
                    </div>
                    <div className='social-item'>
                        <FaPhone />
                        <p>{props.phone}</p>
                    </div>
                    <div className='social-item'>
                        <FaMapMarkedAlt />
                        <p>{props.address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessCard;