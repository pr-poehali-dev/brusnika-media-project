import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: "Запуск личного бренда",
      description: "Стартовая платформа для создания уникального образа и позиционирования",
      icon: "Crown",
      features: ["Стратегическая карта", "Индивидуальные сессии", "Рекомендации экспертов"]
    },
    {
      title: "Медиа-продвижение",
      description: "Публикации в BRUSNIKA magazine, СМИ, подкасты, ТВ и радио",
      icon: "Radio",
      features: ["Собственный видеопродакшн", "Организация съёмок", "Медиа-сопровождение"]
    },
    {
      title: "Интернет-маркетинг",
      description: "Digital-стратегия под ключ: SMM, таргетинг, email-маркетинг",
      icon: "Smartphone",
      features: ["Контент-планы", "Рост аудитории", "Обучение и сопровождение"]
    },
    {
      title: "Визуальная упаковка",
      description: "Фирменный стиль, логотипы, фотосессии, презентации",
      icon: "Palette",
      features: ["Брендбук", "Профессиональная фотосъёмка", "Дизайн соцсетей"]
    },
    {
      title: "Публичные выступления",
      description: "Тренинги, мастер-классы, развитие навыков презентации",
      icon: "Mic",
      features: ["Онлайн и офлайн форматы", "Индивидуальные занятия", "Групповые тренинги"]
    },
    {
      title: "Психология бренда",
      description: "Работа с уверенностью, харизмой, аутентичностью",
      icon: "Brain",
      features: ["Сессии с психологом", "Проработка границ", "Развитие харизмы"]
    }
  ];

  const partners = [
    { name: "Сколково", description: "Инновационный центр" },
    { name: "РБК", description: "Медиа-холдинг" },
    { name: "Европа+ ТВ", description: "Телеканал" }
  ];

  const stats = [
    { value: "500+", label: "Успешных проектов" },
    { value: "10+", label: "Лет на рынке" },
    { value: "50+", label: "Экспертов в команде" },
    { value: "95%", label: "Довольных клиентов" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Crown" size={32} className="text-gray-900" />
              <h1 className="text-2xl font-bold text-gray-900">BRUSNIKA</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">О нас</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Услуги</a>
              <a href="#cases" className="text-gray-600 hover:text-gray-900 transition-colors">Кейсы</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-gray-900 hover:bg-gray-800">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url('/img/e14edb06-3fae-46c7-ac4e-5caf8ab60d0f.jpg')` }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gray-900 text-white">Премиальное развитие личного бренда</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Медиа-холдинг
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                BRUSNIKA
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Комплексный подход к развитию личного бренда через медиа, психологию и визуальную упаковку. 
              Превращаем экспертов в медийных лидеров.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-3">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть презентацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для развития вашего личного бренда от стратегии до реализации
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-900 transition-colors">
                      <Icon name={service.icon as any} size={24} className="text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <Icon name="ArrowRight" size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={16} className="mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-900 hover:text-white transition-colors">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши партнеры</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Работаем с ведущими медиа-площадками и экспертными сообществами
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-gray-300">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы развивать личный бренд?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Получите персональную консультацию от наших экспертов и узнайте, как медиа могут работать на ваш успех
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Crown" size={24} />
                <h3 className="text-xl font-bold">BRUSNIKA</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Медиа-холдинг по развитию личного бренда
              </p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Linkedin" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Личный бренд</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Медиа-продвижение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Интернет-маркетинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Визуальная упаковка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@brusnika.ru
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BRUSNIKA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;