
import React from 'react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/ui/ContactForm';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-12 w-12 text-primary" />,
      title: 'Адрес',
      details: [
        '625000, г. Тюмень',
      ]
    },
    {
      icon: <Phone className="h-12 w-12 text-primary" />,
      title: 'Телефоны',
      details: [
        '+7 (919) 949-76-96'
      ]
    },
    {
      icon: <Mail className="h-12 w-12 text-primary" />,
      title: 'Email',
      details: [
        'jager20141@gmail.com'
      ]
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: 'Режим работы',
      details: [
        'Пн-Пт: 9:00 - 19:00',
        'Сб-Вс: Выходные дни'
      ]
    }
  ];

  const socialMedia = [
    {
      icon: <Facebook className="h-6 w-6" />,
      name: 'Facebook',
      url: '#'
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      name: 'Instagram',
      url: '#'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: 'LinkedIn',
      url: '#'
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <AnimatedSection className="mb-16">
        <h1 className="text-3xl md:text-4xl font-light mb-4">Контакты</h1>
        <p className="text-muted-foreground mb-6">
          Свяжитесь с нами любым удобным для вас способом. Мы всегда рады ответить на ваши вопросы и помочь решить любые задачи.
        </p>
      </AnimatedSection>

      {/* Contact Info Cards */}
      <AnimatedSection delay={100} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="glass-panel rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <div className="space-y-1">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Social Media */}
      {/* <AnimatedSection delay={200} className="mb-16">
        <h2 className="section-title">Мы в социальных сетях</h2>
        <div className="glass-panel rounded-lg p-6 md:p-8">
          <div className="flex flex-wrap gap-6 justify-center">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="flex flex-col items-center p-4 hover:text-primary transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 hover:bg-primary/20 transition-colors">
                  {social.icon}
                </div>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection> */}

      {/* Contact Form */}
      <AnimatedSection delay={300} className="mb-16">
        <h2 className="section-title">Напишите нам</h2>
        <ContactForm />
      </AnimatedSection>

      {/* Map */}
      {/* <AnimatedSection delay={400}>
        <h2 className="section-title">Как нас найти</h2>
        <div className="glass-panel rounded-lg p-6 md:p-8">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.347628409876!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDE1JzIwLjkiTiAzN8KwMzcnMDMuOSJF!5e0!3m2!1sen!2sru!4v1635153806059!5m2!1sen!2sru" 
              width="100%" 
              height="450"  
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              className="rounded-md"
              title="Карта расположения офиса"
            ></iframe>
          </div>
        </div>
      </AnimatedSection> */}
    </Layout>
  );
};

export default Contact;
