import './style.css';
import photo from '../../assets/img/profile2.png';
import logo from '../../assets/img/logo.png';
import {
    FaGlobe,
    FaPhone,
    FaMapMarkedAlt
} from 'react-icons/fa';

const BusinessCard = () => {
    return (
        <div className='container'>
            <div className='business-card front'>
                <div className='profile'>
                    <div className='photo'>
                        <img src={photo} alt="" />
                    </div>
                    <div className='name'>
                        Nilson Braga
                    </div>
                    <div className='company-position'>
                        Fullstack Developer
                    </div>
                    <div className='info'>
                        <div className='id-num'>
                            id nº 0188084614
                        </div>  
                        <div className='exp-date'>
                            Valid Thru: 12/22
                        </div>  
                    </div>
                </div>
                <div className='business-card-footer'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>

            <div className='business-card back'>
                <div className='container-back'>
                    <div className='terms-and-conditions'>
                        <h1>
                            Terms and Conditions
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend justo. Aenean tincidunt turpis eu rhoncus pulvinar. Mauris volutpat vehicula.
                        </p>
                    </div>
                    
                </div>
                <div className='profile-data-back'>
                    <h1>
                        id nº 0188084614
                    </h1>
                    <p>
                        Join Date: 01/22
                    </p>
                    <p>
                        Valid Thru: 01/22
                    </p>
                </div>
                <div className='footer-back'>
                    <div className='social-item'>
                        <FaGlobe />
                        <p>www.github.com/nilsonbraga</p>
                    </div>
                    <div className='social-item'>
                        <FaPhone />
                        <p>+55 11 9999-9999</p>
                    </div>
                    <div className='social-item'>
                        <FaMapMarkedAlt />
                        <p>South America</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessCard;