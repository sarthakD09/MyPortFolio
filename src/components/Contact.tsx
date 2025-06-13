
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  if (confirm("Ready to send? We'll open your email client to complete the message.")) {
    const body = `${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`;
    window.location.href = `mailto:sarthakdatir22@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(body)}`;
    setFormData({ name: "", email: "", message: "" });
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative ">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-glow" onClick={handleSubmit}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className={`space-y-8 ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Quick Contact</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>📧 sarthakdatir22@gmail.com</p>
                  <p>📍 Amravati, Maharashtra</p>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Let's Connect</h3>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 border-primary/50 text-primary hover:bg-primary/10" onClick={()=> window.open("https://www.linkedin.com/in/sarthak-datir-126407265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")}>
                      LinkedIn
                    </Button>
                    <Button variant="outline" className="flex-1 border-primary/50 text-primary hover:bg-primary/10" onClick={()=> window.open("https://github.com/sarthakD09")}>
                      GitHub
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Availability</h3>
                <p className="text-muted-foreground">
                  Currently available for freelance projects and full-time opportunities. 
                  Response time: 24-48 hours.
                </p>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2025 Portfolio by Sarthak
          </p>
        </div>
      </div>
    </section>
  );
};
