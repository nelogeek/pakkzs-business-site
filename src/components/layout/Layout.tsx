
import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex-1">{children}</div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
