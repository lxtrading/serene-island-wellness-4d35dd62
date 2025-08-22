
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Instagram, CreditCard } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredTime: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking request sent!",
      description: "Thank you for your interest. I'll contact you within 24 hours to confirm your session.",
    });
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      preferredTime: ""
    });
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-purple-800 mb-6 animate-fade-in">
            Begin Your Journey
          </h1>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            I'm here to support you on your path to healing and transformation. Let's connect and create a session that honors your unique needs.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-purple-800">Book Your Session</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-purple-700">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-purple-700">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-purple-700">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="border-purple-200 focus:border-purple-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service" className="text-purple-700">Preferred Service</Label>
                    <Select onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger className="border-purple-200 focus:border-purple-500">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-purple-200">
                        <SelectItem value="traditional-reiki">Traditional Reiki Session</SelectItem>
                        <SelectItem value="one-on-one-yoga">One on One Yoga</SelectItem>
                        <SelectItem value="distance-reiki">Distance Reiki Session</SelectItem>
                        <SelectItem value="angel-card-reading">Angel Card Reading</SelectItem>
                        <SelectItem value="consultation">Initial Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredTime" className="text-purple-700">Preferred Time</Label>
                    <Select onValueChange={(value) => handleChange("preferredTime", value)}>
                      <SelectTrigger className="border-purple-200 focus:border-purple-500">
                        <SelectValue placeholder="Select time preference" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-purple-200">
                        <SelectItem value="morning">Morning (9am-12pm)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12pm-5pm)</SelectItem>
                        <SelectItem value="evening">Evening (5pm-8pm)</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-purple-700">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Share anything you'd like me to know about your healing intentions, current challenges, or specific areas you'd like to focus on..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    className="border-purple-200 focus:border-purple-500"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-purple-700 hover:bg-purple-800 text-cream-50">
                  Send Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-purple-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-purple-800 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-1">Phone / WhatsApp</h4>
                      <p className="text-purple-600">0660911979</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-1">Email</h4>
                      <p className="text-purple-600">reikibylauren987@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-1">Instagram</h4>
                      <a 
                        href="https://instagram.com/reikibylauren" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 transition-colors"
                      >
                        @reikibylauren
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-1">Location</h4>
                      <p className="text-purple-600">Mobile</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-1">Hours</h4>
                      <p className="text-purple-600">By appointment only</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-1">Payment Options</h4>
                      <div className="text-purple-600 space-y-1">
                        <p>• Ozow</p>
                        <p>• Capitec</p>
                        <p>• Cash</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif text-purple-800 mb-4">Before Your First Session</h3>
                <ul className="space-y-3 text-purple-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Wear comfortable, loose-fitting clothing
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Avoid caffeine 2 hours before your session
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Avoid alcohol 24 hours before your session
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Stay hydrated and eat lightly
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Arrive 10 minutes early to settle in
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Come with an open heart and mind
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Secure booking with 50% deposit
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
