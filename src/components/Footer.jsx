import React from 'react'
import { FaPlus } from "react-icons/fa6";

function Footer() {
  return (
    <div className='bg-black font-open-sans text-white'>
        <div>
            <ul>
                <li>
                    <span>Creators</span>
                    <FaPlus size={27}/>
                </li>
                <li>
                    <span>Features</span>
                    <FaPlus size={27}/>
                </li>
                <li>
                    <span>Pricing</span>
                    <FaPlus size={27}/>
                </li>
                <li>
                    <span>Resources</span>
                    <FaPlus size={27}/>
                </li>
                <li>
                    <span>Company</span>
                    <FaPlus size={27}/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer