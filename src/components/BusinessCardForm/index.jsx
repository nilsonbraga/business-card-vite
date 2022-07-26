import React, { useState, useEffect } from 'react';
import FormCard from '../FormCard';

export default function BusinessCardForm(props) {
    const [formStep, setFormStep] = useState(0);
    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    return (
      <FormCard className="form-control" currentStep={formStep} prevFormStep={prevFormStep} nextFormStep={nextFormStep}>
        {formStep == 0 && (
          <>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
            />
            <label className="label">
              <span className="label-text">Position</span>
            </label>
            <input
              type="text"
              placeholder="Position"
              className="input input-bordered"
              value={props.position}
              onChange={(e) => props.setPosition(e.target.value)}
            />
          </>
        )}

        {formStep == 1 && (
          <>
            <label className="label">
              <span className="label-text">Id Number</span>
            </label>
            <input
              type="text"
              placeholder="Id Number"
              className="input input-bordered"
              value={props.id}
              onChange={(e) => props.setId(e.target.value)}
            />

            <label className="label">
              <span className="label-text">Valid Thru</span>
            </label>
            <input
              type="text"
              placeholder="Valid Thru"
              className="input input-bordered"
              value={props.expDate}
              onChange={(e) => props.setExpDate(e.target.value)}
            />
          </>
        )}

        {formStep == 2 && (
          <>
            <label className="label">
              <span className="label-text">Title Back</span>
            </label>
            <input
              type="text"
              placeholder="Title Back"
              className="input input-bordered"
              value={props.tcTitle}
              onChange={(e) => props.setTcTitle(e.target.value)}
            />

            <label className="label">
              <span className="label-text">Paragraph Back</span>
            </label>
            <input
              type="text"
              placeholder="text.."
              className="input input-bordered"
              value={props.pBack}
              onChange={(e) => props.setPBack(e.target.value)}
            />
          </>
        )}

        {formStep == 3 && (
          <>
            <label className="label">
              <span className="label-text">Join Date</span>
            </label>
            <input
              type="text"
              placeholder="Join Date"
              className="input input-bordered"
              value={props.join}
              onChange={(e) => props.setJoin(e.target.value)}
            />

            <label className="label">
              <span className="label-text">Website</span>
            </label>
            <input
              type="text"
              placeholder="Website"
              className="input input-bordered"
              value={props.website}
              onChange={(e) => props.setWebsite(e.target.value)}
            />

            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="phone"
              className="input input-bordered"
              value={props.phone}
              onChange={(e) => props.setPhone(e.target.value)}
            />

            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered"
              value={props.address}
              onChange={(e) => props.setAddress(e.target.value)}
            />
          </>
        )}

        {formStep >= 3 && (
          <>
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <div className="flex justify-center items-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col justify-center items-center w-full h-30 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-100"
              >
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and
                    drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">your PHOTO</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  name="avatar"
                  onChange={props.onChangeAvatar}
                />
              </label>
            </div>

            <label className="label">
              <span className="label-text">Logo</span>
            </label>
            <div className="flex justify-center items-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col justify-center items-center w-full h-30 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-100"
              >
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and
                    drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">your LOGO</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  name="logo"
                  onChange={props.onChangeLogo}
                />
              </label>
            </div>
          </>
        )}
      </FormCard>
    );
}