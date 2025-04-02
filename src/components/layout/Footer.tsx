import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white font-semibold">O</span>
              </div>
              <span className="ml-2 text-lg font-medium">Organization</span>
            </Link>
            <p className="text-muted-foreground">
              Современные профессиональные решения для вашего бизнеса.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  О продукции
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-muted-foreground hover:text-primary transition-colors">
                  Оформить заказ
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-muted-foreground hover:text-primary transition-colors">
                  Обратная связь
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span className="text-muted-foreground">+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <span className="text-muted-foreground">info@organization.com</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Проект реализован при поддержке гранта Фонда содействия инновациям, предоставленного в рамках программы 
              «Студенческий стартап» федерального проекта «Платформа университетского технологического предпринимательства».
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-6 items-center">
            <img 
              src="https://i.ibb.co/6YbhLq0/fond-logo.png" 
              alt="Логотип Фонда содействия инновациям" 
              className="h-12 object-contain"
            />
            <img 
              src="https://i.ibb.co/9yCzXRk/putp-logo.png" 
              alt="Логотип федерального проекта" 
              className="h-12 object-contain"
            />
          </div>
        </div>

        <div className="mt-4 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Organization. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Разработано <a href="#" className="text-primary hover:underline">Lovable</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
