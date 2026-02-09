import React, { useEffect, useState } from 'react'
import { navbarStyles } from '../assets/BOOKSELLER/dummystyles'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/BOOKSELLER/logoicon.png'
import {navItems} from '../assets/BOOKSELLER/dummydata'
import { FaOpencart } from 'react-icons/fa'
import { User } from 'lucide-react'
import { useCart } from '../CardContext/CardContext'


const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const { cart } = useCart()
    
    const totalQuantity = cart.items.reduce((total, item) => total + item.quantity, 0)
    
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10) 
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[])

  return (
      <nav className={navbarStyles.nav(scrolled)}>
          <div className={navbarStyles.container}>
              <div className='flex items-center justify-between'>
                  
                  {/* logo */}

                  <Link to='/' className={navbarStyles.logoContainer}>
                      <div className='relative group'>
                          <div className={navbarStyles.loginGradient} />
                          <div className='relative flex items-center'>
                              <img src={logo} alt="Logo" className={navbarStyles.logoImage} />
                              <div className='ml-2'>
                                  <h1 className={navbarStyles.logoText}>BOOKSHELL</h1>
                                  <div className={navbarStyles.logoUnderline} />
                              </div>
                          </div>
                      </div>
                  </Link>

                  {/* {DESKTOP NAVIAGTION} */}
                  
                  <div className={navbarStyles.desktopNavWrapper}>
                      {navItems.map((item) => {
                          const isActive = location.pathname === item.path
                          return (
                              <Link key={item.name} to={item.path} className={navbarStyles.navLink} >
                                  <div className='relative z-10 flex items-center'>
                                      <div className='relative'>
                                          <div className={navbarStyles.navIconWrapper(item.color)} />
                                          <item.icon className={navbarStyles.navIcon(isActive)}/>
                                      </div>
                                      <span className={navbarStyles.navText(isActive,item.color)}>
                                          {item.name}
                                      </span>
                                      {isActive && <span className={navbarStyles.navUnderline(item.color)} />}

                                  </div>
                              </Link>
                          )
                      })}
                  </div>
                  
                  {/* RIGHT ICONS */}

                  <div className={navbarStyles.rightIconsWrapper}>
                      <Link to='/cart' className={navbarStyles.cartWrapper} >
                          <div className={navbarStyles.cartGradient} />
                          <div className='relative'>
                              <FaOpencart className={navbarStyles.cartIcon} />
                              {totalQuantity > 0 && (
                                  <span className={navbarStyles.cartBadge}>
                                      {totalQuantity}
                                  </span>
                              )}
                          </div>
                          
                      </Link>
                      <Link to='/login' className={navbarStyles.loginWrapper}>
                          <div className={navbarStyles.loginGradient} />
                          <div className='relative' >
                              <User className={navbarStyles.loginIcon} />
                          </div>
                      </Link>
                  </div>

                  {/* MOBILE MENU BUTTON  */}
                  <div className='md:hidden flex items-center' >
                      <button onClick={() => setIsOpen(!isOpen)} className={navbarStyles.menuBtn}>
                          <div className={navbarStyles.menuGradient} />        
                      </button>
                  </div>           
              </div>
          </div>
    </nav>
  )
}

export default Navbar
