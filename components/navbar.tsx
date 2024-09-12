'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, Search, User, ShoppingBasket, X } from 'lucide-react'
import Image from 'next/image'
import whitepaw from '@/public/icon/paw-outline-white.png'
import favicon from '@/app/favicon.ico'

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showFloatingMenu, setShowFloatingMenu] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
        setShowFloatingMenu(true)
      } else {
        setIsScrolled(false)
        setShowFloatingMenu(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = ['Home', 'Products', 'Collections', 'Blogs', 'Contact']

  return (
    <>
      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto bg-none h-20'
      }`}>
        <div className="container mx-auto px-4 h-full">
          {/* Large Screen Layout */}
          <div className="hidden md:grid grid-cols-[auto_1fr_auto] items-center h-full">
            <div className="flex items-center gap-2">
              <Image src={whitepaw}  alt="logo" width={50} height={50} />
              {/* <h1 className="font-bold text-2xl text-primary-foreground">Paws</h1> */}
            </div>
            <nav className="justify-self-start ml-8">
              <ul className="flex space-x-1">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Button variant="link">{item}</Button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="whiteghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="whiteghost" size="icon" aria-label="Profile">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="whiteghost" size="icon" aria-label="Shopping Basket">
                <ShoppingBasket className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Small Screen Layout */}
          <div className="md:hidden flex justify-between items-center h-full">
            <Button variant="whiteghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <div className="flex items-center">
              <Image src={whitepaw}  alt="logo" width={50} height={50} />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="whiteghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="whiteghost" size="icon" aria-label="Profile">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown for Main Header */}
        {isMenuOpen && !isScrolled && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md">
            <nav className="container mx-auto px-4 py-2">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>
      
      {/* Floating Menu */}
      <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        showFloatingMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="bg-background/80 backdrop-blur-md rounded-full shadow-lg px-4 py-2 flex items-center space-x-4">
          <Image src={isScrolled ? favicon : whitepaw}  alt="logo" width={40} height={40} />
          <nav className="hidden md:block">
            <ul className="flex space-x-2">
              {menuItems.map((item) => (
                <li key={item}>
                  <Button variant="ghost" size="sm">{item}</Button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Profile">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping Basket">
              <ShoppingBasket className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Menu Dropdown for Floating Menu */}
        {isMenuOpen && showFloatingMenu && (
          <div className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-background/95 backdrop-blur-md rounded-lg shadow-lg">
            <nav className="py-2">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  )
}