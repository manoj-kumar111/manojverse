import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle, Phone } from "lucide-react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const socialLinks = [
  { icon: Github, href: "https://github.com/manoj-kumar111", label: "GitHub", username: "@manoj-kumar111" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/manoj-kumar-bb89572b2/", label: "LinkedIn", username: "Manoj Kumar" },
  { icon: Mail, href: "mailto:manojkumarraajbhar@gmail.com", label: "Email", username: "manojkumarraajbhar@gmail.com" },
  { icon: Phone, href: "tel:+918360477501", label: "Phone", username: "+91 8360477501" },
];

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      setFormState({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <SectionHeading
          title="Let's Connect"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you!"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <div className={`transition-all duration-600 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <GlassCard className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
              
              <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="user_name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitted || isSending}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{isSending ? "Sending..." : "Send Message"}</span>
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </div>

          {/* Social links & info */}
          <div className={`space-y-6 transition-all duration-600 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Info card */}
            <GlassCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold">Based in</h3>
                  <p className="text-muted-foreground">Chandigarh, India</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Open to full-time opportunities and internships. Let's build something amazing together!
              </p>
            </GlassCard>

            {/* Social links */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`glass-card p-4 flex items-center gap-4 group hover:border-primary/50 transition-all duration-300 hover:translate-x-1 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <SocialIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </p>
                      <p className="text-muted-foreground text-sm font-mono">
                        {social.username}
                      </p>
                    </div>
                    <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors rotate-45" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
