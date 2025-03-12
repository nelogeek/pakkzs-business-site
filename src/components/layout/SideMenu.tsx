
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Package, FileText, Mail, Phone } from 'lucide-react';

interface SideMenuProps {
  className?: string;
}

const SideMenu: React.FC<SideMenuProps> = ({ className }) => {
  const menuItems = [
    { path: '/', label: 'О компании', icon: <Home size={18} /> },
    { path: '/products', label: 'О продукции', icon: <Package size={18} /> },
    { path: '/order', label: 'Оформить заказ', icon: <FileText size={18} /> },
    { path: '/feedback', label: 'Обратная связь', icon: <Mail size={18} /> },
    { path: '/contact', label: 'Контакты', icon: <Phone size={18} /> },
  ];

  return (
    <aside className={cn('w-64 hidden lg:block', className)}>
      <div className="glass-panel rounded-lg overflow-hidden">
        <div className="p-4 bg-primary text-white">
          <h3 className="text-lg font-medium">Навигация</h3>
        </div>
        <nav className="py-3">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 px-4 py-2.5 transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'hover:bg-gray-100'
                    )
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideMenu;
