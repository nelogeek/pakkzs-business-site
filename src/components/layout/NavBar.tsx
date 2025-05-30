
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            {/* <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
              <span className="text-white font-semibold">O</span>
            </div> */}
            {/* ml-2 */}
            <span className=" text-lg font-medium">ООО «Романс»</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={({isActive}) => cn('nav-link', isActive && 'active')}>
              О компании
            </NavLink>
            <NavLink to="/products" className={({isActive}) => cn('nav-link', isActive && 'active')}>
              О продукции
            </NavLink>
            <NavLink to="/order" className={({isActive}) => cn('nav-link', isActive && 'active')}>
              Оформить заказ
            </NavLink>
            <NavLink to="/feedback" className={({isActive}) => cn('nav-link', isActive && 'active')}>
              Обратная связь
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => cn('nav-link', isActive && 'active')}>
              Контакты
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out overflow-hidden',
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col py-4 px-6 space-y-4">
          <NavLink 
            to="/" 
            className={({isActive}) => cn('nav-link', isActive && 'active')}
            onClick={() => setMobileMenuOpen(false)}
          >
            О компании
          </NavLink>
          <NavLink 
            to="/products" 
            className={({isActive}) => cn('nav-link', isActive && 'active')}
            onClick={() => setMobileMenuOpen(false)}
          >
            О продукции
          </NavLink>
          <NavLink 
            to="/order" 
            className={({isActive}) => cn('nav-link', isActive && 'active')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Оформить заказ
          </NavLink>
          <NavLink 
            to="/feedback" 
            className={({isActive}) => cn('nav-link', isActive && 'active')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Обратная связь
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => cn('nav-link', isActive && 'active')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
