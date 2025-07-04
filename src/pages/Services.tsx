
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Sparkles, Heart, Sun } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Traditional Reiki Session",
      duration: "60 minutes",
      price: "R350",
      description: "Experience the gentle power of traditional Usui Reiki. This session focuses on energy flow, chakra balancing, and deep relaxation.",
      benefits: ["Stress reduction", "Energy balance", "Deep relaxation", "Emotional release"],
      popular: true
    },
    {
      icon: Heart,
      title: "One on One Yoga",
      duration: "60 minutes",
      price: "R200",
      description: "Personalized yoga session tailored to your individual needs, focusing on alignment, breath work, and mindful movement.",
      benefits: ["Improved flexibility", "Stress relief", "Mind-body connection", "Personal guidance"],
      popular: false
    },
    {
      icon: Sun,
      title: "Distance Reiki Session",
      duration: "45 minutes",
      price: "R250",
      description: "Receive powerful healing energy from the comfort of your own space. Perfect for those unable to visit in person.",
      benefits: ["Location flexibility", "Energy transmission", "Comfort of home", "Global accessibility"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-sage-800 mb-6 animate-fade-in">
            Healing Services
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Each session is thoughtfully designed to support your unique healing journey, combining traditional techniques with intuitive guidance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`group hover:shadow-xl transition-all duration-300 border-sage-200 relative ${service.popular ? 'ring-2 ring-gold-400' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold-500 hover:bg-gold-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage-200 transition-colors">
                    <service.icon className="w-8 h-8 text-sage-700" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-sage-800">{service.title}</CardTitle>
                  <div className="flex items-center justify-center space-x-4 text-sage-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-2xl font-serif text-sage-800">{service.price}</div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sage-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-medium text-sage-800 mb-3">Benefits Include:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sage-600">
                          <div className="w-2 h-2 bg-sage-400 rounded-full mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    asChild 
                    className={`w-full ${service.popular ? 'bg-gold-600 hover:bg-gold-700' : 'bg-sage-700 hover:bg-sage-800'} text-cream-50`}
                  >
                    <Link to="/contact">Book This Session</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-sage-800 text-center mb-12">Session Enhancements</h2>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <Card className="border-sage-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-serif text-sage-800 mb-4">Angel Card Reading</h3>
                <p className="text-sage-600 mb-4">
                  Receive divine guidance with a personalized angel card reading to complement your healing session and provide spiritual insights.
                </p>
                <div className="text-lg font-medium text-sage-800">R100</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-sage-800 text-center mb-12">What to Expect</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sage-700 font-medium">1</span>
              </div>
              <div>
                <h3 className="text-xl font-serif text-sage-800 mb-2">Initial Consultation</h3>
                <p className="text-sage-600 leading-relaxed">
                  We'll begin with a gentle conversation about your intentions, current challenges, and what you hope to achieve from our session together.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sage-700 font-medium">2</span>
              </div>
              <div>
                <h3 className="text-xl font-serif text-sage-800 mb-2">Healing Session</h3>
                <p className="text-sage-600 leading-relaxed">
                  You'll rest comfortably while I work with your energy field, using gentle touch or hands-off techniques as you prefer. Most clients experience deep relaxation and peace.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sage-700 font-medium">3</span>
              </div>
              <div>
                <h3 className="text-xl font-serif text-sage-800 mb-2">Integration & Guidance</h3>
                <p className="text-sage-600 leading-relaxed">
                  After your session, we'll discuss any insights or sensations that arose, and I'll share personalized recommendations for supporting your healing journey at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-cream-50 mb-6">
            Ready to Begin Your Healing?
          </h2>
          <p className="text-xl text-cream-100 mb-8 max-w-2xl mx-auto">
            Choose the session that resonates with you, or let's discuss which approach would serve you best
          </p>
          <Button asChild size="lg" className="bg-cream-100 text-sage-800 hover:bg-cream-200 px-8 py-4 text-lg">
            <Link to="/contact">Book Your Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
