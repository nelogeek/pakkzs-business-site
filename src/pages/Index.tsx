import React from 'react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/shared/Button';
import { ArrowRight, Briefcase, Users, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: 'Профессионализм',
      description: 'Мы предоставляем высококачественные решения, основанные на многолетнем опыте и глубоких знаниях отрасли.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Индивидуальный подход',
      description: 'Мы понимаем уникальные потребности каждого клиента и предлагаем персонализированные решения.'
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: 'Качество',
      description: 'Мы гарантируем высокое качество нашей продукции, соответствующее международным стандартам.'
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: 'Инновации',
      description: 'Мы постоянно совершенствуем наши продукты и услуги, внедряя инновационные технологии.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-primary/80 to-primary h-[400px] flex items-center">
          <div className="relative z-10 p-8 md:p-12 max-w-2xl">
            <AnimatedSection>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
                Автоматизированный комплекс контроля закалочной среды
              </h1>
              <p className="text-white/90 mb-8 text-lg">
                Сократите количество бракованной металлопродукции после термической обработки до рекордных 0,5%
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="flex items-center gap-2"
                  >
                    О нашей продукции
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                  >
                    Связаться с нами
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
          <div className="hidden md:block w-1/2 h-full relative">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Business Solutions"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/50"></div> {/* Темно-синий слой */}
          </div>
        </div>
      </section>

      {/* History Section */}
      <AnimatedSection delay={100} className="mb-16">
        <h2 className="section-title">История компании</h2>
        <div className="glass-panel rounded-lg p-6 md:p-8">
          <p className="mb-4">
            Проект зародился, когда группа студентов инженерного факультета, интересующихся металлургией и автоматизацией производственных процессов, объединилась в научное сообщество. Руководителем группы стал опытный инженер с многолетним стажем работы в металлургической промышленности, который заметил, что существующие методы контроля закалочных сред недостаточно точны, требуют значительных временных и энергетических затрат. Получен грант на реализацию продукта от Фонда содействия инновациям, предоставленного в рамках программы «Студенческий стартап» федерального проекта «Платформа университетского технологического предпринимательства».
          </p>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection delay={200} className="mb-16">
        <h2 className="section-title">Направления деятельности</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={300}>
        <div className="glass-panel rounded-lg p-6 md:p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <div className="text-center md:max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Начните работать с нами сегодня</h2>
            <p className="text-muted-foreground mb-8">
              Свяжитесь с нами, чтобы узнать больше о нашей продукции и услугах. Мы готовы ответить на все ваши вопросы и помочь выбрать решение, которое наилучшим образом соответствует вашим потребностям.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <Button>Наша продукция</Button>
              </Link>
              <Link to="/order">
                <Button variant="outline">Оформить заказ</Button>
              </Link>
              <Link to="/feedback">
                <Button variant="secondary">Обратная связь</Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Index;
