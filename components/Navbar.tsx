import React from 'react';


const Navbar: React.FC = () => {


 

  return (
    <div className='flex justify-around  py-4 shadow-sm'>
      <div className='flex items-start gap-2'>
        <img src='logo.png' alt='logo' className='w-40' />
        
      </div>
      
    </div>
  );
};

export default Navbar;
