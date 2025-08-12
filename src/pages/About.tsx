
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BookOpen, Heart, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif text-purple-800 mb-6 animate-fade-in">
                About Lauren
              </h1>
              <p className="text-xl text-purple-600 leading-relaxed mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                A journey of healing that began with personal transformation and blossomed into a calling to serve others
              </p>
              <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800 text-cream-50">
                  <Link to="/contact">Book a Session</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div 
                className="w-full h-96 bg-cover bg-center rounded-lg shadow-xl"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80)`
                }}
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-200 rounded-full animate-float opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-purple-800 text-center mb-12">My Healing Journey</h2>
          
          <div className="prose prose-lg max-w-none text-purple-700">
            <p className="text-lg leading-relaxed mb-6">
              My path to Reiki began during a period of deep personal transformation. After experiencing my own healing crisis, I discovered the profound power of energy work to restore not just physical wellbeing, but emotional and spiritual balance as well.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              What started as my own healing journey quickly revealed itself to be a calling. I felt drawn to study under master healers, spending years learning traditional Usui Reiki, advanced energy techniques, and developing my intuitive gifts.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Today, I bring over a decade of experience to each session, creating a sacred space where women can reconnect with their inner wisdom, release what no longer serves them, and step into their fullest potential.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-purple-800 text-center mb-12">Training & Certifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="font-serif text-lg text-purple-800 mb-2">Reiki 111</h3>
                <p className="text-purple-600 text-sm">Certified Practitioner</p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="font-serif text-lg text-purple-800 mb-2">Yoga Group Exercise</h3>
                <p className="text-purple-600 text-sm">Certified Instructor</p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="font-serif text-lg text-purple-800 mb-2">Psychology</h3>
                <p className="text-purple-600 text-sm">Academic Training</p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="font-serif text-lg text-purple-800 mb-2">BSC Degree</h3>
                <p className="text-purple-600 text-sm">Bachelor of Science</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-purple-800 mb-8">My Philosophy</h2>
          <blockquote className="text-2xl font-serif italic text-purple-700 mb-8 leading-relaxed">
            "Healing is not a quick fix, it is about travelling on an intimate journey with yourself and your creator. I believe every human being carries within them an infinite capacity for healing, wisdom & transformation. My role is simply to hold space and help you reconnect with your own inner healer."
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-cream-50 mb-6">
            Ready to Experience Healing?
          </h2>
          <p className="text-xl text-cream-100 mb-8 max-w-2xl mx-auto">
            Let's create a personalized healing experience that honors your unique journey
          </p>
          <Button asChild size="lg" className="bg-cream-100 text-purple-800 hover:bg-cream-200 px-8 py-4 text-lg">
            <Link to="/contact">Schedule Your Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
