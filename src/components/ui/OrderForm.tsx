
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Button from '@/components/shared/Button';
import { CheckCircle2 } from 'lucide-react';

const OrderForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Массив с темами
    const orderDetailsHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #2c3e50;">Новая заявка с сайта</h2>
        <table style="width: 100%; font-size: 16px; color: #333;">
          <tr>
            <td style="padding: 8px 0;"><strong>Фамилия:</strong></td>
            <td style="padding: 8px 0;">${formData.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Имя:</strong></td>
            <td style="padding: 8px 0;">${formData.firstName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Отчество:</strong></td>
            <td style="padding: 8px 0;">${formData.middleName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Email:</strong></td>
            <td style="padding: 8px 0;">${formData.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Телефон:</strong></td>
            <td style="padding: 8px 0;">${formData.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Примечание:</strong></td>
            <td style="padding: 8px 0;">${formData.notes.replace(/\n/g, '<br/>')}</td>
          </tr>
        </table>
      </div>
    `;

    try {
      const response = await fetch('http://localhost:5544/api/Email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subject: 'Новая заявка с сайта',
          topic: 'Заявка на заказ',
          body: orderDetailsHTML
        })
      });

      if (!response.ok) throw new Error(`Ошибка: ${response.status}`);

      setSuccess(true);
      toast({
        title: "Заявка отправлена",
        description: "Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.",
      });

      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          middleName: '',
          email: '',
          phone: '',
          notes: ''
        });
        setSuccess(false);
      }, 3000);
    } catch (error: any) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
      console.error('Ошибка при отправке заявки:', error);
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
        <h3 className="text-2xl font-medium mb-2">Заявка отправлена!</h3>
        <p className="text-muted-foreground mb-6">
          Спасибо за ваш заказ. Наш менеджер свяжется с вами в ближайшее время для подтверждения деталей.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium">
            Фамилия <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm font-medium">
            Имя <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="middleName" className="block text-sm font-medium">
            Отчество
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
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
          <label htmlFor="phone" className="block text-sm font-medium">
            Телефон <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>
      
      <div className="mt-6 space-y-2">
        <label htmlFor="notes" className="block text-sm font-medium">
          Примечание (до 500 символов)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          maxLength={500}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <div className="text-right text-xs text-muted-foreground">
          {formData.notes.length}/500 символов
        </div>
      </div>
      
      <div className="mt-8">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
        </Button>
      </div>
    </form>
  );
};

export default OrderForm;
