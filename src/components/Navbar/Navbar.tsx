import React from 'react'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
   <>
      <div className="navbar">
        <Link href={"/"}>
          <Image 
                src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/91/8492803091_9f8e6032-bbd7-4c52-b5bb-af372c505626.png?cb=1690390941"
                width={200}
                height={50}
                alt='Pokemon'
                priority={true}
            />
        </Link>
      </div>
   </>
  )
}

export default Navbar