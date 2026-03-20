'use client';

import { useState } from 'react';

export default function UserStatusToggle({initialStatus}:{initialStatus:boolean}){
const[status, setStatus] = useState(initialStatus);

const handleStatus = () =>{
    setStatus((prev)=>!prev);
};

return (
    <div className="text-left space-y-3">
     <p className = "text-gray-700">
        <span className="font-semibold">Status: {status ? 'Active' : 'InActive'}</span>
     </p>
      
<div className ="border-t my-4"></div> 
      
      <button
        onClick={handleStatus}
        className={`px-4 py-2 rounded ${
          status ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}
      >
        {status ? 'Active' : 'InActive'}
      </button>
    </div>
  );
} 