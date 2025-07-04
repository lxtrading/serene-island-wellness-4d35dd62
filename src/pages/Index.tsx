
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Leaf } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 animate-fade-in">
            Reiki by Lau
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Experience profound healing and inner peace through authentic Reiki energy work
          </p>
          <div className="space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-cream-100 text-sage-800 hover:bg-cream-200 px-8 py-4 text-lg">
              Begin Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-cream-100 text-cream-100 hover:bg-cream-100 hover:text-sage-800 px-8 py-4 text-lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
              Healing Modalities
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Each session is carefully crafted to support your unique healing journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-sage-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage-200 transition-colors">
                  <Sparkles className="w-8 h-8 text-sage-700" />
                </div>
                <h3 className="text-2xl font-serif text-sage-800 mb-4">Traditional Reiki</h3>
                <p className="text-sage-600 leading-relaxed">
                  Classical Usui Reiki techniques to restore energy balance and promote deep relaxation
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow duration-300 border-sage-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage-200 transition-colors">
                  <Heart className="w-8 h-8 text-sage-700" />
                </div>
                <h3 className="text-2xl font-serif text-sage-800 mb-4">Chakra Healing</h3>
                <p className="text-sage-600 leading-relaxed">
                  Align and cleanse your energy centers for optimal physical and emotional wellbeing
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow duration-300 border-sage-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage-200 transition-colors">
                  <Leaf className="w-8 h-8 text-sage-700" />
                </div>
                <h3 className="text-2xl font-serif text-sage-800 mb-4">Crystal Healing</h3>
                <p className="text-sage-600 leading-relaxed">
                  Amplify healing energy with carefully selected crystals and sacred stones
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-sage-700 hover:bg-sage-800 text-cream-50">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
                Meet Lau
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                With over a decade of experience in energy healing, Lau brings a gentle yet powerful approach to Reiki practice. Her intuitive gifts and deep compassion create a safe space for profound transformation.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-8">
                Certified in multiple Reiki lineages and trained in complementary healing modalities, Lau's sessions offer a unique blend of traditional techniques and intuitive guidance.
              </p>
              <Button asChild variant="outline" size="lg" className="border-sage-700 text-sage-700 hover:bg-sage-700 hover:text-cream-50">
                <Link to="/about">Learn More About Lau</Link>
              </Button>
            </div>
            <div className="relative">
              <div 
                className="w-full h-96 bg-cover bg-center rounded-lg shadow-xl"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80)`
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-200 rounded-full animate-float opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-cream-50 mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-cream-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards balance, peace, and renewed vitality
          </p>
          <Button asChild size="lg" className="bg-cream-100 text-sage-800 hover:bg-cream-200 px-8 py-4 text-lg">
            <Link to="/contact">Book Your Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
