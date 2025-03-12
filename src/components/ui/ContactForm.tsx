
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Button from '@/components/shared/Button';
import { CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      toast({
        title: "Сообщение отправлено",
        description: "Ваше сообщение успешно отправлено. Мы ответим вам в ближайшее время.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setSuccess(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: 'Адрес',
      value: 'г. Москва, ул. Примерная, д. 123'
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: 'Телефон',
      value: '+7 (XXX) XXX-XX-XX'
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: 'Email',
      value: 'info@organization.com'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h3 className="text-xl font-medium">Свяжитесь с нами</h3>
        <p className="text-muted-foreground">
          Заполните форму, и мы свяжемся с вами в ближайшее время. Вы также можете связаться с нами напрямую по указанным контактам.
        </p>
        
        <div className="space-y-4 mt-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3">{item.icon}</div>
              <div>
                <h4 className="text-sm font-medium">{item.label}</h4>
                <p className="text-muted-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <h4 className="text-sm font-medium mb-3">Мы в социальных сетях</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div>
        {success ? (
          <div className="glass-panel rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
            <h3 className="text-2xl font-medium mb-2">Сообщение отправлено!</h3>
            <p className="text-muted-foreground mb-6">
              Спасибо за ваше сообщение. Мы ответим вам в ближайшее время.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-panel rounded-lg p-6 md:p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Ваше имя <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Сообщение <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
            
            <div className="mt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
