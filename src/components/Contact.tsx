import { useState, useRef } from 'react';
import { Send, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_fnd8m2q',
        'template_a4262oc',
        formRef.current!,
        'NNhmfc0rA6OsbsRw8'
      );
      
      console.log('EmailJS Success:', result);

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: error?.text || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background shapes */}
      <div className="floating-shape w-96 h-96 bg-primary/10 -bottom-48 -left-48" />
      <div className="floating-shape w-64 h-64 bg-accent/10 top-20 right-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Let's{' '}
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Interested in collaborating on AI projects, internship opportunities, 
              or freelance work? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Social links */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display font-semibold text-lg mb-4">Follow Me</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <form ref={formRef} onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell me about your project, internship opportunity, or collaboration idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg text-primary-foreground py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
