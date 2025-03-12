
import React from 'react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/shared/Button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Продукт А',
      description: 'Инновационное решение для автоматизации бизнес-процессов.',
      image: 'https://images.unsplash.com/photo-1581092921461-fd3e4b7be3c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      features: [
        'Легкая интеграция с существующими системами',
        'Интуитивно понятный интерфейс',
        'Высокая производительность',
        'Масштабируемость'
      ],
      benefits: 'Сокращение времени на выполнение рутинных задач до 50%, повышение эффективности работы сотрудников, снижение количества ошибок.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      name: 'Продукт Б',
      description: 'Комплексное решение для анализа данных и бизнес-аналитики.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80',
      features: [
        'Продвинутые алгоритмы анализа данных',
        'Визуализация результатов в реальном времени',
        'Настраиваемые отчеты',
        'Поддержка больших объемов данных'
      ],
      benefits: 'Глубокое понимание бизнес-процессов, выявление скрытых закономерностей, принятие обоснованных управленческих решений.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      name: 'Продукт В',
      description: 'Безопасное решение для хранения и обмена данными.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      features: [
        'Шифрование данных на всех этапах',
        'Гибкие настройки прав доступа',
        'Автоматическое резервное копирование',
        'Защита от несанкционированного доступа'
      ],
      benefits: 'Обеспечение конфиденциальности информации, соответствие требованиям законодательства о защите данных, минимизация рисков утечки информации.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-primary/80 to-primary h-[300px] flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768494-4dee9056e3c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10 p-8 md:p-12 max-w-3xl">
            <AnimatedSection>
              <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
                Наша продукция
              </h1>
              <p className="text-white/90 mb-6">
                Мы разрабатываем инновационные решения, которые помогают бизнесу оптимизировать процессы, повышать эффективность и достигать новых высот.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="space-y-20 mb-16">
        {products.map((product, index) => (
          <AnimatedSection key={product.id} delay={index * 100} className="glass-panel rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 lg:h-full object-cover" 
                />
              </div>
              <div className="lg:w-1/2 p-6 md:p-8">
                <h2 className="text-2xl font-medium mb-3">{product.name}</h2>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <h3 className="text-lg font-medium mb-3">Основные характеристики:</h3>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-medium mb-3">Преимущества:</h3>
                <p className="text-muted-foreground mb-6">{product.benefits}</p>
                
                <Link to="/order">
                  <Button className="w-full sm:w-auto">
                    Оформить заказ
                  </Button>
                </Link>
              </div>
            </div>
            <div className="p-6 md:p-8 border-t">
              <h3 className="text-lg font-medium mb-4">Видео о продукте</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={product.videoUrl} 
                  title={`Видео о продукте ${product.name}`}
                  className="w-full h-[300px] rounded-md"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* CTA Section */}
      <AnimatedSection delay={300}>
        <div className="glass-panel rounded-lg p-6 md:p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <div className="text-center md:max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Готовы заказать?</h2>
            <p className="text-muted-foreground mb-8">
              Мы предлагаем индивидуальный подход к каждому клиенту и готовы обсудить ваши особые требования к нашей продукции.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/order">
                <Button>Оформить заказ</Button>
              </Link>
              <Link to="/feedback">
                <Button variant="outline">Задать вопрос</Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Products;
