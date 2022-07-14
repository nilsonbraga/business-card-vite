import React, { useState, useEffect } from 'react';
import BusinessCard from "../../components/BusinessCard";


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
            
                <div className='form-control'>
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" class="input input-bordered" value={name} onChange={e => setName(e.target.value)}/>

                    <label class="label">
                        <span class="label-text">Position</span>
                    </label>
                    <input type="text" placeholder="Position" class="input input-bordered" value={position} onChange={e => setPosition(e.target.value)}/>

                    <label class="label">
                        <span class="label-text">Id Number</span>
                    </label>
                    <input type="text" placeholder="Id Number" class="input input-bordered" value={id} onChange={e => setId(e.target.value)}/>

                    <label class="label">
                        <span class="label-text">Valid Thru</span>
                    </label>
                    <input type="text" placeholder="Valid Thru" class="input input-bordered" value={expDate} onChange={e => setExpDate(e.target.value)}/>
                    
                    <label class="label">
                        <span class="label-text">Title Back</span>
                    </label>
                    <input type="text" placeholder="Title Back" class="input input-bordered" value={tcTitle} onChange={e => setTcTitle(e.target.value)}/>

                    <label class="label">
                        <span class="label-text">Paragraph Back</span>
                    </label>
                    <input type="text" placeholder="text.." class="input input-bordered" value={pBack} onChange={e => setPBack(e.target.value)}/>

                    <label class="label">
                        <span class="label-text">Join Date</span>
                    </label>
                    <input type="text" placeholder="Join Date" class="input input-bordered" value={join} onChange={e => setJoin(e.target.value)}/>

                    <label class="label">
                        <span class="label-text">Website</span>
                    </label>
                    <input type="text" placeholder="Website" class="input input-bordered" value={website} onChange={e => setWebsite(e.target.value)}/>

                    <label class="label">
                        <span class="label-text">Phone Number</span>
                    </label>
                    <input type="text" placeholder="phone" class="input input-bordered" value={phone} onChange={e => setPhone(e.target.value)}/>

                    <label class="label">
                        <span class="label-text">Address</span>
                    </label>
                    <input type="text" placeholder="Address" class="input input-bordered" value={address} onChange={e => setAddress(e.target.value)}/>



                    <label class="label">
                        <span class="label-text">Photo</span>
                    </label>
                    <div class="flex justify-center items-center w-full">
                        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-30 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-100">
                            <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">your PHOTO</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" name="avatar" onChange={onChangeAvatar}/>
                        </label>
                    </div> 

                    <label class="label">
                        <span class="label-text">Logo</span>
                    </label>
                    <div class="flex justify-center items-center w-full">
                        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-30 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-100">
                            <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">your LOGO</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" name="avatar" onChange={onChangeLogo}/>
                        </label>
                    </div> 




                    
                
                </div>
            </div>
        </div>
    )
}
