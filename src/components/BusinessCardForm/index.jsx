import React, { useState, useEffect } from 'react';
import './style.css';

export default function BusinessCardForm() {
    const [avatar, setAvatar] = useState([]);
    const [logo, setLogo] = useState([]);
    const [name, setName] = useState([]);
    const [position, setPosition] = useState([]);
    const [id, setId] = useState([]);
    const [expDate, setExpDate] = useState([]);
    const [tcTitle, setTcTitle] = useState([]);
    const [pBack, setPBack] = useState([]);
    const [join, setJoin] = useState([]);
    const [website, setWebsite] = useState([]);
    const [phone, setPhone] = useState([]);
    const [address, setAddress] = useState([]);

    return (
        <div className='container'>
            <div className='business-card-form'>
                <span>
                    <input name='avatar' type="file" value={avatar} onChange={e => setAvatar(e.target.value)} />
                </span>
                <span>
                    <input name='logo' type="file" value={logo} onChange={e => setLogo(e.target.value)}/>
                </span>
                <span>
                    <label htmlFor="name">Name</label>
                    <input name='name' type="text" value={name} onChange={e => setName(e.target.value)}/>
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
    )
}