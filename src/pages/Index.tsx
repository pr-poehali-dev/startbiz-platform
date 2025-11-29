import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const isVisible = (offset: number) => scrollY > offset - 500;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-lg'
      } border-b border-gray-200`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Rocket" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StartBiz
            </span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-primary transition-colors font-medium">
              Возможности
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-primary transition-colors font-medium">
              Тарифы
            </button>
            <button onClick={() => scrollToSection('university')} className="text-gray-600 hover:text-primary transition-colors font-medium">
              Университет
            </button>
            <button onClick={() => scrollToSection('cases')} className="text-gray-600 hover:text-primary transition-colors font-medium">
              Кейсы
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-primary transition-colors font-medium">
              FAQ
            </button>
            <Button onClick={() => scrollToSection('contact')} className="shadow-md hover:shadow-xl transition-shadow">
              Начать
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <button onClick={() => scrollToSection('features')} className="text-left py-2 text-gray-600 hover:text-primary transition-colors">
                Возможности
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left py-2 text-gray-600 hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('university')} className="text-left py-2 text-gray-600 hover:text-primary transition-colors">
                Университет
              </button>
              <button onClick={() => scrollToSection('cases')} className="text-left py-2 text-gray-600 hover:text-primary transition-colors">
                Кейсы
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left py-2 text-gray-600 hover:text-primary transition-colors">
                FAQ
              </button>
              <Button onClick={() => scrollToSection('contact')} className="w-full">Начать</Button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 animate-scale-in hover:scale-110 transition-transform cursor-default">
              🚀 Запустите бизнес за 24 часа
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Ваш бизнес в интернете —
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                просто и быстро
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Комплексная платформа для начинающих предпринимателей: создавайте сайты с помощью ИИ, 
              управляйте рекламой, товарами и обучайтесь у экспертов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 animate-scale-in hover:scale-110 transition-all shadow-lg hover:shadow-2xl" 
                onClick={() => scrollToSection('contact')}
              >
                Начать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 animate-scale-in hover:scale-105 transition-all" 
                onClick={() => scrollToSection('features')}
              >
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
            {[
              { icon: "Zap", title: "За 5 минут", desc: "Создайте профессиональный сайт с помощью ИИ", color: "primary" },
              { icon: "TrendingUp", title: "Рост на 300%", desc: "Эффективное продвижение от профессиональных маркетологов", color: "secondary" },
              { icon: "GraduationCap", title: "50+ курсов", desc: "Обучение и сертификация от экспертов индустрии", color: "accent" }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${item.color}/10 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon name={item.icon as any} size={24} className={`text-${item.color}`} />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className={`py-20 px-4 bg-white transition-all duration-1000 ${isVisible(400) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Всё для вашего бизнеса</h2>
            <p className="text-xl text-gray-600">Единая платформа со всеми необходимыми инструментами</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Globe", title: "Создание сайта с ИИ", description: "Опишите свой бизнес — получите готовый сайт за минуты", color: "primary" },
              { icon: "Megaphone", title: "Продвижение и реклама", description: "Профессиональные маркетологи настроят эффективную рекламу", color: "secondary" },
              { icon: "Package", title: "Управление товарами", description: "Интеграция с маркетплейсами и автоматизация продаж", color: "accent" },
              { icon: "BookOpen", title: "Университет продвижения", description: "Обучающие курсы с сертификацией от экспертов", color: "primary" },
              { icon: "BarChart3", title: "Аналитика и статистика", description: "Полный контроль за показателями вашего бизнеса", color: "secondary" },
              { icon: "CreditCard", title: "Финансовый учёт", description: "Интеграция с банками и автоматическая бухгалтерия", color: "accent" }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardHeader>
                  <div className={`w-14 h-14 bg-${feature.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={feature.icon as any} size={28} className={`text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className={`py-20 px-4 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ${isVisible(1200) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прозрачные тарифы</h2>
            <p className="text-xl text-gray-600">Выберите план, который подходит вашему бизнесу</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Старт", price: "0", period: "Бесплатно навсегда",
                features: ["1 сайт на поддомене", "Базовые шаблоны", "5 товаров", "Доступ к курсам", "Техподдержка"],
                popular: false
              },
              {
                name: "Бизнес", price: "2 990", period: "₽ в месяц",
                features: ["3 сайта + свой домен", "ИИ-генерация контента", "Безлимит товаров", "Персональный агент", "Реклама в 3 каналах", "Приоритетная поддержка", "Аналитика и отчёты"],
                popular: true
              },
              {
                name: "Корпорация", price: "9 990", period: "₽ в месяц",
                features: ["Безлимит сайтов", "API доступ", "Команда агентов 24/7", "Реклама во всех каналах", "White-label решения", "Интеграции с 1С", "Персональный менеджер", "SLA 99.9%"],
                popular: false
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular ? 'border-4 border-primary shadow-2xl scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white animate-pulse">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.price !== "0" && <span className="text-gray-600 ml-2">₽</span>}
                  </div>
                  <CardDescription className="text-base">{plan.period}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'shadow-lg hover:shadow-xl' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => scrollToSection('contact')}
                  >
                    {plan.price === "0" ? "Начать бесплатно" : "Выбрать план"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="university" className={`py-20 px-4 bg-white transition-all duration-1000 ${isVisible(2000) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Университет продвижения</h2>
            <p className="text-xl text-gray-600">Станьте экспертом в своей нише</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: "Target", title: "Контекстная реклама", lessons: 12, duration: "6 часов", level: "Начальный" },
              { icon: "Share2", title: "SMM и продвижение", lessons: 18, duration: "9 часов", level: "Средний" },
              { icon: "Search", title: "SEO-оптимизация", lessons: 15, duration: "8 часов", level: "Начальный" },
              { icon: "Mail", title: "Email-маркетинг", lessons: 10, duration: "5 часов", level: "Начальный" }
            ].map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={course.icon as any} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Icon name="BookOpen" size={16} />
                          {course.lessons} уроков
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {course.duration}
                        </span>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className={`py-20 px-4 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ${isVisible(2600) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Истории успеха</h2>
            <p className="text-xl text-gray-600">Результаты наших клиентов</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Анна Иванова", business: "Онлайн-магазин косметики", result: "+250% продаж за 3 месяца", quote: "StartBiz помог мне запустить магазин за выходные. Теперь я зарабатываю больше, чем на основной работе!" },
              { name: "Дмитрий Петров", business: "Консалтинговые услуги", result: "50+ клиентов в первый месяц", quote: "Университет продвижения дал все необходимые знания. Агенты настроили рекламу — заявки пошли сразу!" },
              { name: "Елена Сидорова", business: "Студия дизайна", result: "+180% трафика на сайт", quote: "Профессиональный сайт и грамотное SEO вывели меня в топ-3 Яндекса по региону. Спасибо команде!" },
              { name: "Игорь Смирнов", business: "Доставка продуктов", result: "Окупился за 2 недели", quote: "Интеграция с маркетплейсами и автоматизация сэкономили мне по 4 часа в день. Рекомендую!" }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.business}</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4 w-fit">
                    {testimonial.result}
                  </Badge>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={`py-20 px-4 bg-white transition-all duration-1000 ${isVisible(3200) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">Ответы на популярные вопросы</p>
          </div>

          <div className="space-y-6">
            {[
              { question: "Как быстро я смогу запустить сайт?", answer: "С помощью нашего ИИ-помощника вы можете создать профессиональный сайт за 5-10 минут. Просто опишите свой бизнес, выберите дизайн — и сайт готов к публикации!" },
              { question: "Нужны ли технические знания?", answer: "Абсолютно нет! StartBiz создан для предпринимателей без технических навыков. Весь интерфейс интуитивно понятен, а наши агенты всегда готовы помочь." },
              { question: "Как работает система агентов?", answer: "Вы получаете персональную команду экспертов: разработчик для сайта, маркетолог для рекламы, товаровед для работы с маркетплейсами. Общение через удобный чат прямо в платформе." },
              { question: "Можно ли перенести существующий сайт?", answer: "Да, наши агенты помогут перенести ваш существующий сайт на платформу StartBiz. Это займёт 1-2 дня в зависимости от сложности проекта." },
              { question: "Есть ли интеграция с маркетплейсами?", answer: "Да, мы интегрированы с Wildberries, Ozon, Яндекс.Маркет и другими популярными площадками. Управляйте всеми товарами из одного места." },
              { question: "Что включает университет продвижения?", answer: "50+ практических курсов по контекстной рекламе, SMM, SEO, email-маркетингу. После прохождения вы получаете сертификат и можете применить знания сразу на практике." },
              { question: "Как происходит оплата?", answer: "Принимаем карты, ЮKassa, электронные кошельки. Тариф «Старт» бесплатен навсегда. Платные тарифы можно оплачивать помесячно или со скидкой за год." },
              { question: "Могу ли я отменить подписку?", answer: "Да, вы можете отменить подписку в любой момент без объяснения причин. Доступ сохранится до конца оплаченного периода." }
            ].map((faq, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-start gap-3">
                    <Icon name="HelpCircle" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-700 pt-3 pl-9">
                    {faq.answer}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse">Готовы начать?</h2>
          <p className="text-xl mb-8 opacity-90">Присоединяйтесь к тысячам предпринимателей, которые уже развивают свой бизнес с StartBiz</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 hover:scale-110 transition-all shadow-xl"
            >
              Начать бесплатно
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 hover:scale-105 transition-all"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Rocket" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold text-white">StartBiz</span>
              </div>
              <p className="text-sm">Комплексная платформа для предпринимателей</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Продукт</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('features')} className="block hover:text-white transition-colors">Возможности</button>
                <button onClick={() => scrollToSection('pricing')} className="block hover:text-white transition-colors">Тарифы</button>
                <button onClick={() => scrollToSection('university')} className="block hover:text-white transition-colors">Университет</button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Компания</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-white transition-colors">О нас</a>
                <a href="#" className="block hover:text-white transition-colors">Блог</a>
                <button onClick={() => scrollToSection('cases')} className="block hover:text-white transition-colors">Кейсы</button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Поддержка</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('faq')} className="block hover:text-white transition-colors">FAQ</button>
                <a href="#" className="block hover:text-white transition-colors">Документация</a>
                <a href="#" className="block hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2024 StartBiz. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
