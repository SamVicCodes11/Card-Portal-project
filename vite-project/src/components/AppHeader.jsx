import React from "react";
import { useLocation } from "react-router-dom";

const AppHeader = () => {
  const { pathname } = useLocation();

  return (
    <header className="app_layout_header">
      {/* <div>{pathname === "/dashboard" ? "Dashboard" : pathname === '/card-details' ? 'Card Details' : "Card Profile"}</div> */}

      {/* <div>RIght</div> */}
    </header>
  );
};

export default AppHeader;


// import React from "react";
// import { Link } from "react-router-dom";
// import { GrHomeRounded } from "react-icons/gr";

// const AppSidebar = () => {
//   return (
//     <aside className="app_layout_aside">
//       <div>
//         <div>
//           <h2>Lapo</h2>
//         </div>

//         <div className="app_layout_aside_items">
//           <div>
//             <div className="aside_item">
//               <Link to="/">
//                 <span>
//                   <GrHomeRounded />
//                 </span>
//                 <span>Dashboard</span>
//               </Link>
//             </div>

//             <div className="aside_item">
//               <Link to="/cardprofile">
//                 <span>
//                   <GrHomeRounded />
//                 </span>
//                 <span>Card Profile</span>
//               </Link>
//             </div>

//             <div className="aside_item">
//               <Link to="/card-details">
//                 <span>
//                   <GrHomeRounded />
//                 </span>
//                 <span>Card Profile</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div></div>
//     </aside>
//   );
// };

// export default AppSidebar;
