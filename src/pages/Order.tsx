
import React from 'react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import OrderForm from '@/components/ui/OrderForm';
import { FileText, Clock, CheckSquare, PackageCheck } from 'lucide-react';

const Order = () => {
  const steps = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: 'Заполните форму',
      description: 'Укажите свои контактные данные и информацию о заказе.'
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: 'Получите подтверждение',
      description: 'Наш менеджер свяжется с вами для уточнения деталей заказа.'
    },
    {
      icon: <CheckSquare className="h-10 w-10 text-primary" />,
      title: 'Оплата',
      description: 'Оплатите заказ удобным для вас способом.'
    },
    {
      icon: <PackageCheck className="h-10 w-10 text-primary" />,
      title: 'Получение продукции',
      description: 'Получите вашу продукцию в оговоренные сроки.'
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <AnimatedSection className="mb-16">
        <h1 className="text-3xl md:text-4xl font-light mb-4">Оформить заказ</h1>
        <p className="text-muted-foreground mb-6">
          Заполните форму ниже, чтобы оформить заказ на нашу продукцию. Наш менеджер свяжется с вами в ближайшее время для уточнения деталей и подтверждения заказа.
        </p>
      </AnimatedSection>

      {/* Process Steps */}
      <AnimatedSection delay={100} className="mb-16">
        <h2 className="section-title">Как это работает</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="glass-panel rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-medium mb-2">
                <span className="inline-flex justify-center items-center w-6 h-6 rounded-full bg-primary text-white text-sm mr-2">
                  {index + 1}
                </span>
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Order Form */}
      <AnimatedSection delay={200} className="mb-16">
        <h2 className="section-title">Форма заказа</h2>
        <OrderForm />
      </AnimatedSection>

      {/* Additional Info */}
      <AnimatedSection delay={300}>
        <div className="glass-panel rounded-lg p-6 md:p-8">
          <h2 className="text-xl font-medium mb-4">Дополнительная информация</h2>
          <p className="mb-4">
            После заполнения формы наш менеджер свяжется с вами в течение одного рабочего дня для уточнения деталей заказа. 
          </p>
          <p className="mb-4">
            Если у вас возникли вопросы или вам требуется консультация по выбору продукции, вы можете связаться с нами по телефону или электронной почте, указанным в разделе "Контакты".
          </p>
          <p>
            Мы также готовы обсудить индивидуальные условия сотрудничества и специальные предложения для постоянных клиентов.
          </p>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Order;
