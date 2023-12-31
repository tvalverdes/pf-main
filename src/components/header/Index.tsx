'use client'
import { IoCloseSharp } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { WebLinks } from '../web-links/Index'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <header className="bg-gray_light">
      <nav className="mx-auto container flex py-4 justify-between items-center">
        <div>
          <Link href={'/'}>
            <Image
              src={'/images/logo-pf.webp'}
              priority
              width={200}
              height={70}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="font-semibold hidden sm:flex text-lg">
          <ul className="flex gap-8">
            <WebLinks />
          </ul>
        </div>
        {showMenu && (
          <div className="navbar__links sm:hidden font-semibold text-lg flex  gap-8">
            <ul className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100">
              <WebLinks hideMenu={handleShowMenu} className="flex w-full justify-center items-center pt-12" />
            </ul>
          </div>
        )}
        <button
          onClick={handleShowMenu}
          className="text-xl z-50 toggle-btn p-2 sm:hidden rounded-full"
        >
          {showMenu ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>
      </nav>
    </header>
  )
}
