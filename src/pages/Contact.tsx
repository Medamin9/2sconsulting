import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // Simulation d'envoi
    toast.success('Message envoyé avec succès ! Nous vous répondrons sous 24h.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Tunisie ', 'App B08 résidence les cascades 1 Les Berges du Lac 1053 tunis'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@2sconsulting.tn', 'Réponse sous 24h'],
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: [' +216 71 655 448'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contactez-nous
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre projet
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <Card className="border-border shadow-medium">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Envoyez-nous un message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Votre nom"
                          required
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="votre@email.com"
                          required
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Téléphone
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+216 12 345 678"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Décrivez votre projet ou posez-nous vos questions..."
                          required
                          className="w-full min-h-[150px]"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full shadow-medium">
                        Envoyer le message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '150ms' }}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Informations de contact
                  </h2>
                  <p className="text-muted-foreground">
                    N'hésitez pas à nous contacter par l'un des moyens ci-dessous. 
                    Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon size={24} className="text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, i) => (
                              <p key={i} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Actions */}
                <Card className="border-primary border-2 shadow-medium bg-gradient-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Besoin d'une réponse rapide ?
                    </h3>
                    <div className="space-y-3">
                      <Button asChild className="w-full" variant="outline">
                        <a href="tel:+21612345678">
                          <Phone className="mr-2" size={18} />
                          Appelez-nous maintenant
                        </a>
                      </Button>
                      <Button asChild className="w-full" variant="outline">
                        <a href="mailto:contact@2sconsulting.tn">
                          <Mail className="mr-2" size={18} />
                          Envoyez-nous un email
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Consultation gratuite
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Bénéficiez d'une consultation gratuite de 30 minutes avec l'un de nos experts pour discuter de votre projet
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
