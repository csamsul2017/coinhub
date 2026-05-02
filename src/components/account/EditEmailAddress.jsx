import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditEmailAddress = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('email', email);

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
    <div className="flex flex-col w-full gap-8 px-6 py-6 md:w-1/2">
      {/* <EditPageWrapper title={'Legal name'} desc={'Your legal name as it appears on your government-issued ID'} data={label.state} apiField="legalName" /> */}
      <div>
        <h2 className="text-2xl font-bold">Enter your new email address</h2>
        <p className="text-muted">You'll need to confirm this email address</p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-8 text-sm">
        <div className="flex flex-col ">
          <label htmlFor="" className="font-semibold ">
            Email
          </label>
          <input type="text" onChange={e => setEmail(e.target.value)} value={email} className="p-4 border rounded-md" placeholder="Your email address" disabled={isLoading} />
        </div>

        <div className="flex justify-end gap-2 font-semibold">
          <button className="px-4 py-2 rounded-full bg-surface/50 hover:bg-surface/100 active:scale-95" disabled={isLoading}>
            Cancel
          </button>
          <button className="px-4 py-2 text-white rounded-full bg-primary hover:bg-primary/80 active:scale-95" disabled={isLoading}>
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmailAddress;
