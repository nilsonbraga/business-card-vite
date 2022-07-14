import React, { useState, useEffect } from 'react';
import BusinessCard from "../../components/BusinessCard";
import BusinessCardForm from "../../components/BusinessCardForm";


import photo from '../../assets/img/profile2.png';
import logoimg from '../../assets/img/logo.png';

export default function BusinessCardPage() {
    const [avatar, setAvatar] = useState(null);
    const [avatarData, setAvatarData] = useState(photo);
    const [logo, setLogo] = useState(null);
    const [logoData, setLogoData] = useState(logoimg);
    const [name, setName] = useState(['Nilson']);
    const [position, setPosition] = useState(['Fullstack Developer']);
    const [id, setId] = useState(['0188084614']);
    const [expDate, setExpDate] = useState(['12/22']);
    const [tcTitle, setTcTitle] = useState(['Terms and Conditions']);
    const [pBack, setPBack] = useState(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend justo. Aenean tincidunt turpis eu rhoncus pulvinar. Mauris volutpat vehicula.']);
    const [join, setJoin] = useState(['01/22']);
    const [website, setWebsite] = useState(['www.github.com/nilsonbraga']);
    const [phone, setPhone] = useState(['+55 11 99999999']);
    const [address, setAddress] = useState(['South America']);



    const onChangeAvatar = e => {
        if (e.target.files[0]) {
          console.log("avatar: ", e.target.files);
          setAvatar(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setAvatarData(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
      };

      const onChangeLogo = e => {
        if (e.target.files[0]) {
          console.log("logo: ", e.target.files);
          setLogo(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setLogoData(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
      };

    return (
        <div className='flex flex-row justify-between'>
            <div class="basis-1/2">
                <BusinessCard 
                    avatarData={avatarData}
                    logoData={logoData}
                    name={name} 
                    position={position} 
                    id={id} 
                    expDate={expDate} 
                    tcTitle={tcTitle} 
                    pBack={pBack}
                    join={join}
                    website={website}
                    phone={phone}
                    address={address}
                />
            </div>
            <div class="basis-1/2">
            
                <div className='business-card-form'>
                    <span>
                        <input name='avatar' type="file" onChange={onChangeAvatar} />
                    </span>
                    <span>
                        <input name='logo' type="file" onChange={onChangeLogo} />
                    </span>
                    <span>
                        <label htmlFor="name">Name</label>
                        <input name='name' class="input w-full max-w-xs" type="text" value={name} onChange={e => setName(e.target.value)}/>
                    </span>
                    <span>
                        <label htmlFor="position">Position</label>
                        <input name='position' type="text" value={position} onChange={e => setPosition(e.target.value)}/>
                    </span>
                    <span>
                        <label htmlFor="id">Id Nº</label>
                        <input name='id' type="text" value={id} onChange={e => setId(e.target.value)}/>
                    </span>
                    <span>
                        <label htmlFor="expdate">Valid Thru</label>
                        <input name='expdate' type="text" value={expDate} onChange={e => setExpDate(e.target.value)}/>
                    </span>
                    <span>
                        <label htmlFor="tctitle">Title Back</label>
                        <input name='tctitle' type="text" value={tcTitle} onChange={e => setTcTitle(e.target.value)}/>
                    </span>
                    <span>
                        <label htmlFor="pback">Paragraph Back</label>
                        <input name='pback' type="text" value={pBack} onChange={e => setPBack(e.target.value)}/>
                    </span>
                    <span>
                        <label htmlFor="join">Join Date</label>
                        <input name='join' type="text" value={join} onChange={e => setJoin(e.target.value)}/>
                    </span>
                    <span>
                        <label htmlFor="website">Website</label>
                        <input name='website' type="text" value={website} onChange={e => setWebsite(e.target.value)}/>
                    </span>
                    <span>
                        <label htmlFor="phone">Phone Number</label>
                        <input name='phone' type="text" value={phone} onChange={e => setPhone(e.target.value)}/>
                    </span>
                    <span>
                        <label htmlFor="address">Address</label>
                        <input name='address' type="text" value={address} onChange={e => setAddress(e.target.value)}/>
                    </span>
                
                </div>
            </div>
        </div>
    )
}
