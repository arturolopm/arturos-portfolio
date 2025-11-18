'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send } from 'lucide-react';

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with an email service or API here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block p-4 bg-gradient-accent rounded-full mb-6"
            >
              <Mail className="w-8 h-8 text-purple-400" />
            </motion.div>
            
            <h4 className="text-xl uppercase text-gradient font-medium mb-4 tracking-wide">
              Get in touch
            </h4>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's work <span className="text-gradient">together!</span>
            </h2>
            
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to 
              bring your ideas to life.
            </p>
          </div>

          <Card className="glass-effect border-2 border-white/10">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-white/20 rounded-none px-0 py-4 text-white placeholder:text-white/50 focus-visible:border-purple-500 transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-white/20 rounded-none px-0 py-4 text-white placeholder:text-white/50 focus-visible:border-purple-500 transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-transparent border-b border-white/20 rounded-none px-0 py-4 text-white placeholder:text-white/50 focus-visible:border-purple-500 transition-colors resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="text-white/60 mb-4">Or reach out directly:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/arturolopm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient hover:scale-105 transition-transform"
              >
                GitHub
              </a>
              <span className="text-white/30">•</span>
              <a
                href="https://www.linkedin.com/in/arturo-lopez-martinez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient hover:scale-105 transition-transform"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

