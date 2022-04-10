import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Footer = () => {
  const footers = ["About Us","Careers","Social Impact","For Business Partners","Order and Pickup"]
  const footers2 = [
    
  ]
  return (
    <div className='flex flex-col p-[20px] ml-[30px] mb-[10px] mt-[50px] justify-center gap-[30px] font-mono text-xl'>

      {
        footers.map((footer,key)=> {
          return (
            <div key={key} className='flex flex-row justify-between p-2 cursor-pointer hover:text-2xl hover:opacity-[0.6]'>
              <h1>{footer}</h1>
              <span className='mr-10'><KeyboardArrowDownIcon  fontSize='large'/></span>
            </div>
           
          )
        })
      }
    </div>
  )
};

export default Footer;
