import React, { useState, useEffect } from 'react';
import BusinessCard from "../../components/BusinessCard";
import BusinessCardForm from "../../components/BusinessCardForm";


import photo from '../../assets/img/profile2.png';
import logoimg from '../../assets/img/logo.png';
import bgImg from '../../assets/img/blurry-gradient-haikei.svg';

export default function BusinessCardPage() {
    const [avatar, setAvatar] = useState(null);
    const [bg, setBg] = useState(null);
    const [bgData, setBgData] = useState(bgImg);
    const [avatarData, setAvatarData] = useState(photo);
    const [logo, setLogo] = useState(null);
    const [logoData, setLogoData] = useState(logoimg);
    const [name, setName] = useState(['Nilson Braga']);
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

      const onChangeBg = e => {
        if (e.target.files[0]) {
          console.log("bg: ", e.target.files);
          setBg(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setBgData(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
      };

    return (
        <div className='flex flex-row justify-between flex-wrap'>
            <div className="basis-1/2">
                <BusinessCard 
                    avatarData={avatarData}
                    bgData={bgData}
                    setBgData={setBgData}
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
            <div className="flex flex-col basis-1/2 justify-between">
                <BusinessCardForm 
                    avatarData={avatarData}
                    bgData={bgData}
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

                    setAvatarData={setAvatarData}
                    setBgData={setBgData}
                    setLogoData={setLogoData}
                    setName={setName} 
                    setPosition={setPosition} 
                    setId={setId} 
                    setExpDate={setExpDate} 
                    setTcTitle={setTcTitle} 
                    setPBack={setPBack}
                    setJoin={setJoin}
                    setWebsite={setWebsite}
                    setPhone={setPhone}
                    setAddress={setAddress}
                    onChangeAvatar={onChangeAvatar}
                    onChangeLogo={onChangeLogo}
                    onChangeBg={onChangeBg}
                />
                
            </div>
        </div>
    )
}
