
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Button from '@/components/shared/Button';
import { CheckCircle2 } from 'lucide-react';

const FeedbackForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const subjects = [
  { value: 'general', label: 'Общие вопросы' },
  { value: 'support', label: 'Техническая поддержка' },
  { value: 'partnership', label: 'Сотрудничество' },
  { value: 'other', label: 'Другое' }
];

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const selectedSubject = subjects.find(subject => subject.value === formData.subject)?.label || 'Не указано';

  try {
    const response = await fetch('https://pakkzs.nelogeek.pro/api/Email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: 'Новое сообщение с формы обратной связи',
        topic: 'Форма обратной связи',
        body: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
            <h2 style="color: #2c3e50;">Новое сообщение с сайта</h2>
            <table style="width: 100%; font-size: 16px; color: #333;">
              <tr>
                <td style="padding: 8px 0;"><strong>Имя:</strong></td>
                <td style="padding: 8px 0;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Тема:</strong></td>
                <td style="padding: 8px 0;">${selectedSubject}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; vertical-align: top;"><strong>Сообщение:</strong></td>
                <td style="padding: 8px 0;">${formData.message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
          </div>
        `
      })
    });

    if (!response.ok) throw new Error(`Ошибка: ${response.status}`);

    setSuccess(true);
    toast({
      title: "Форма отправлена",
      description: "Ваше сообщение успешно отправлено. Мы ответим вам в ближайшее время.",
    });

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSuccess(false);
    }, 3000);
  } catch (error: any) {
    toast({
      title: "Ошибка",
      description: "Не удалось отправить сообщение. Попробуйте позже.",
      variant: "destructive",
    });
    console.error('Ошибка при отправке письма:', error);
  } finally {
    setIsSubmitting(false);
  }
};

  if (success) {
    return (
      <div className="glass-panel rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-primary" />
        </div>
        <h3 className="text-2xl font-medium mb-2">Сообщение отправлено!</h3>
        <p className="text-muted-foreground mb-6">
          Спасибо за ваше сообщение. Мы ответим вам в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-lg p-6 md:p-8">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium">
            Тема <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="">Выберите тему</option>
            <option value="general">Общие вопросы</option>
            <option value="support">Техническая поддержка</option>
            <option value="partnership">Сотрудничество</option>
            <option value="other">Другое</option>
          </select>
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
            rows={5}
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
  );
};

export default FeedbackForm;
