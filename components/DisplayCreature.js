import React, { useState } from "react";
import styles from "../styles/DisplayCreature.module.css";
import creatureNames from "../libs/creatureNames.js";
import { StatBlock } from "./StatBlock";



export function DisplayCreature({ handleLinkClick }) {
  const [dropdown, setDropdown] = useState(false);
  
  function toggleDropdown() {
    setDropdown((current) => !current);
  }

  return(
    <>
    <div onClick={toggleDropdown} className={styles.collapseTop}>
      <h2>{creatureNames[i]}</h2>
      <button>Select</button>
    </div>
      
    {dropdown && (
    <div className={styles.dropdown}>
      <p>Statblock here</p>
      <StatBlock/>
    </div>
    )}
    </>
  )
}


// export function DisplayCreature({ handleLinkClick }) {
//   const [dropdown, setDropdown] = useState(false);

//   function toggleDropdown() {
//     setDropdown((current) => !current);
//   }

//   return (
//     <>
//         <div onClick={toggleDropdown} className={styles.collapseTop}>
//           <h2>Creature Name</h2>
//           <button>Select</button>
//         </div>
        
//         {dropdown && (
//         <div className={styles.dropdown}>
//           <p>Statblock should dipsplay here.</p>
//         </div>
//       )}
//     </>
//   );
// }
