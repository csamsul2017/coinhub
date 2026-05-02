import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EditPageWrapper from './EditPageWrapper';
import axios from 'axios';

const EditLegalName = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);

      const res = await axios.patch('https://anaf17-coinhub.hf.space/api/profile/user-update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      navigate('/profile');

      console.log(res);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-8 px-6 py-6">
      {/* <EditPageWrapper title={'Legal name'} desc={'Your legal name as it appears on your government-issued ID'} data={label.state} apiField="legalName" /> */}
      <div>
        <h2 className="text-2xl font-bold">Legal name</h2>
        <p className="text-muted">Please make sure your legal name matches your goverment ID.</p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-8 text-sm">
        <div className="flex flex-col ">
          <label htmlFor="" className="font-semibold ">
            Legal first name
          </label>
          <input type="text" onChange={e => setFirstName(e.target.value)} value={firstName} className="p-4 border rounded-md" placeholder="Enter your legal first name" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="font-semibold ">
            Legal last name
          </label>
          <input type="text" onChange={e => setLastName(e.target.value)} value={lastName} className="p-4 border rounded-md" placeholder="Enter your legal last name" />
        </div>

        <div className="flex justify-end gap-2 font-semibold">
          <button className="px-4 py-2 rounded-full bg-surface/50 hover:bg-surface/100 active:scale-95">Cancel</button>
          <button className="px-4 py-2 text-white rounded-full bg-primary hover:bg-primary/80 active:scale-95">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default EditLegalName;
