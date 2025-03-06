// import React from 'react'

// const Header = () => {
//   return (
//     <div className='HeaderBar'>
//       <div className="logo">
//         <img src="./images/logo.svg" alt="logo" />
//       </div>
//       <div className="centerDiv">
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             <li>Blog</li>
//             <li>Career</li>
//         </ul>
//       </div>
//       <img src="./images/icon-hamburger.svg" className='mobileView' alt="" />
//       <div className="rightDiv">
      
//         <button>Request Invite</button>
//       </div>
//       <script>
//         const mobileViewbtn = document.querySelector('.mobileView');
//         const centerDiv = document.querySelector('.centerDiv');

//         mobileViewbtn.addEventListener('click',function(){
//           centerDiv.classList.toggle('.centerDiv-show');
//         })
//       </script>


              

//     </div>
//   )
// }

// export default Header
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='HeaderBar'>
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className={`centerDiv ${menuOpen ? 'centerDiv-show' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Career</li>
        </ul>
      </div>
      <img 
        src="/images/icon-hamburger.svg" 
        className='mobileView' 
        alt="menu" 
        onClick={() => setMenuOpen(!menuOpen)} 
      />
      <div className="rightDiv">
        <button>Request Invite</button>
      </div>
    </div>
  );
};

export default Header;
