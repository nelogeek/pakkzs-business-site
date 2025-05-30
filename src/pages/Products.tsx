
import React from 'react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/shared/Button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Arrow } from '@radix-ui/react-tooltip';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Автоматизированный программный комплекс контроля закалочной среды',
      description: 'Автоматизированный программный комплекс контроля закалочной среды – передовое техническое решение, снижающее риск возникновения дефектов в металлических изделиях после термической обработки. Программно-аппаратный комплекс обеспечивает автоматизированный мониторинг качества закалочной среды ПК-М и оповещает оператора о необходимости восстановления её свойств.',
      image: 'https://avatars.mds.yandex.net/i?id=1c898cb222ee3447d55f56ad4dde76dfb0558a69-4643362-images-thumbs&n=13',
      features: [
        'Измерение температуры закалочной среды ПК-М',
        'Измерение показателя преломления закалочной среды ПК-М',
        'Оповещение об отклонении показателей преломления и температуры от требуемой нормы',
        'Рекомендации для устранения нарушений состояния закалочной среды ПК-М',
        'Не требует вывода закалочной ванны из тех. процесса во время измерений'
      ],
      specifications: [
        'Автоматическое измерение',
        'Автоматическое оповещение об отклонении',
        'Автоматические рекомендации',
        'Точность измерения температуры ±0,01℃',
        'Точность измерения показателя преломления ±0,0001',
        'Скорость измерения показателей преломления и температуры 1 минута'
      ],
      services: [
        'Модернизация закалочной ванны заказчика датчиками температуры, рефрактометром и программно-логистическим контроллером',
        'Установка программного обеспечения для функционирования комплекса контроля закалочной среды',
        'Обслуживание комплекса',
        'Обслуживание программного обеспечения комплекса'
      ],
      product: 'Программное обеспечение комплекса контроля закалочной среды',
      benefits: 'Сокращение времени на выполнение рутинных задач до 50%, повышение эффективности работы сотрудников, снижение количества ошибок.',
      videoUrl: ''
    },

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

                <h3 className="text-lg font-medium mb-3">Возможности комплекса:</h3>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-medium mb-3">Характеристики комплекса:</h3>
                <ul className="space-y-2 mb-6">
                  {product.specifications.map((specification, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-5 w-5 text-primary mr-2 mt-0.5 ml-1.5" >•</span>
                      <span>{specification}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-medium mb-3">Предоставляемые услуги:</h3>
                <ul className="space-y-2 mb-6">
                  {product.services.map((service, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-5 w-5 text-primary mr-2 mt-0.5" >—</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-medium mb-3">Продукт:</h3>
                <p className="text-muted-foreground mb-6">{product.product}</p>

                <Link to="/order">
                  <Button className="w-full sm:w-auto">
                    Оформить заказ
                  </Button>
                </Link>
              </div>
            </div>

            {product.videoUrl && (
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
            )}
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
