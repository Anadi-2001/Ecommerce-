// import React from 'react'
// import {assets} from '../assets/assets'

// const Footer = () => {
//   return (
//     <div>
//         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]gap-14 my-10 mt-40 text-sm'>
//          <div>
//           <img src= {assets.logo} className='mb-5 w-32' alt="" />
//           <p className='w-full md:w-2/3 text-gray-600'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim voluptatem aperiam libero? Ut unde quidem quas iusto porro accusamus maxime suscipit quibusdam, facere beatae sit! Soluta accusantium cupiditate adipisci!
//           </p>
//          </div>
//          <div>
//           <p className='text-x1 font-medium mb-5'>COMPANY</p>
//           <ul className='flex flex-col gap-1 text-gray-600'>
//            <li>Home</li>
//            <li>About</li>
//            <li>Delivery</li>
//            <li>Privacy policy</li>
//           </ul>
//          </div>
//         </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus enim voluptatem aperiam libero? Ut unde quidem quas iusto porro accusamus maxime suscipit quibusdam, facere beatae sit! Soluta accusantium cupiditate adipisci!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

         <div>
          <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-977-888-53-44</li>
            <li>contact@gmail.com</li>
          </ul>
         </div>

      </div>
      <div >
         <hr />
         <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
