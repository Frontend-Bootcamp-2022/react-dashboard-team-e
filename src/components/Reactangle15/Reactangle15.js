import React from 'react'
import Style from "./Reactangle15.module.scss"

function Reactangle15() {
  return (
    <div className={Style.reactangle}>
      
       <div className={Style.left}>

        
         <ul>
          <li>All</li>
          <li>Inactive</li>
          <li>Active</li>
          <li>On hold</li>
          <li>Completed</li>
         </ul>

       </div>
       
       <div className={Style.right}>
        <span className='default'>Default </span>
        <img src='vector/Vectorreactangle15.png' alt='vector'/>

       </div>

    </div>
  )
}

export default Reactangle15