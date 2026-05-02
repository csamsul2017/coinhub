import React, { use, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

const EditPageWrapper = ({ data, title, desc, apiField }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = localStorage.get('accessToken');

  const handleUpdate = async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append(apiField, inputValue);

      const res = await axios.patch('https://anaf17-coinhub.hf.space/api/profile/user-update', formData, {
        headers: {
          'Content-type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log('data success', res);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response);
    }
  };

  return (
    <div className="flex flex-col gap-8 px-6 py-12">
      <Link to={'/profile'} className="p-3 rounded-full hover:bg-surface/50 bg-surface w-fit">
        <FaArrowLeft />
      </Link>
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-muted">{desc}</p>
      </div>

      <form onSubmit={handleUpdate} className="relative flex flex-col gap-2">
        <label className="text-sm font-semibold">{title}</label>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} className="w-full p-4 border rounded-md border-muted bg-surface" placeholder={data?.label} disabled />
        <button type="submit" className="absolute px-2 py-1 font-semibold rounded-full right-1 bottom-3 text-primary hover:bg-gray-50 active:bg-gray-100">
          Change
        </button>
      </form>
    </div>
  );
};

export default EditPageWrapper;
