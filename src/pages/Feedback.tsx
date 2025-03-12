
import React from 'react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import FeedbackForm from '@/components/ui/FeedbackForm';
import { MessageSquare, ThumbsUp, HelpCircle, AlertTriangle } from 'lucide-react';

const Feedback = () => {
  const categories = [
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: 'Общие вопросы',
      description: 'Вопросы о компании, продуктах и услугах'
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary" />,
      title: 'Отзывы и предложения',
      description: 'Поделитесь вашим опытом и идеями по улучшению'
    },
    {
      icon: <HelpCircle className="h-10 w-10 text-primary" />,
      title: 'Техническая поддержка',
      description: 'Вопросы по использованию продуктов'
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-primary" />,
      title: 'Сообщения о проблемах',
      description: 'Информация о возникших проблемах или ошибках'
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <AnimatedSection className="mb-16">
        <h1 className="text-3xl md:text-4xl font-light mb-4">Обратная связь</h1>
        <p className="text-muted-foreground mb-6">
          Мы ценим ваше мнение и всегда открыты для обратной связи. Заполните форму ниже, чтобы отправить нам сообщение, задать вопрос или поделиться своими впечатлениями.
        </p>
      </AnimatedSection>

      {/* Categories */}
      <AnimatedSection delay={100} className="mb-16">
        <h2 className="section-title">Выберите тему обращения</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="glass-panel rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="mr-4">{category.icon}</div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Feedback Form */}
      <AnimatedSection delay={200} className="mb-16">
        <h2 className="section-title">Форма обратной связи</h2>
        <FeedbackForm />
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection delay={300}>
        <h2 className="section-title">Часто задаваемые вопросы</h2>
        <div className="glass-panel rounded-lg p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Как быстро я получу ответ на мое обращение?</h3>
              <p className="text-muted-foreground">
                Мы стараемся отвечать на все обращения в течение 24 часов в рабочие дни. Для сложных вопросов, требующих дополнительной информации, срок ответа может быть увеличен.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Могу ли я получить консультацию по телефону?</h3>
              <p className="text-muted-foreground">
                Да, вы можете позвонить нам по номеру, указанному в разделе "Контакты", в рабочее время. Наши специалисты будут рады ответить на ваши вопросы.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Как я могу отслеживать статус моего обращения?</h3>
              <p className="text-muted-foreground">
                После отправки обращения вы получите подтверждение на указанный email. В дальнейшем мы будем информировать вас о статусе вашего обращения через электронную почту.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Где я могу ознакомиться с отзывами других клиентов?</h3>
              <p className="text-muted-foreground">
                Отзывы наших клиентов опубликованы на нашем сайте в разделе "Отзывы", а также на наших страницах в социальных сетях.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Feedback;
