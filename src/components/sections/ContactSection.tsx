'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { contact, personalInfo } from '@/config/portfolio';

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

  // This is a static site with no backend, so the form hands off to the
  // visitor's mail client with everything pre-filled. The button label says so.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio enquiry from ${formData.name}`;
    const body = `${formData.message}\n\n---\n${formData.name}\n${formData.email}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fieldClass =
    'rounded-none border-0 border-b border-line bg-transparent px-0 py-4 text-paper placeholder:text-faint focus-visible:border-signal focus-visible:ring-0 transition-colors';

  return (
    <section
      id='contact'
      className='py-20 lg:py-28'
    >
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='grid gap-12 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16'
        >
          <div className='lg:col-span-5'>
            <p className='eyebrow mb-6'>05 / Contact</p>
            <h2 className='mb-5 text-3xl font-bold md:text-4xl'>{contact.heading}</h2>
            <p className='mb-10 max-w-md text-base leading-relaxed text-dim'>
              {contact.description}
            </p>

            <dl className='space-y-5'>
              <div className='border-t border-line pt-4'>
                <dt className='eyebrow-dim mb-2'>Email</dt>
                <dd>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className='readout text-sm text-paper transition-colors hover:text-signal'
                  >
                    {personalInfo.email}
                  </a>
                </dd>
              </div>
              <div className='border-t border-line pt-4'>
                <dt className='eyebrow-dim mb-2'>Elsewhere</dt>
                <dd className='flex gap-5'>
                  <a
                    href={personalInfo.social.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='readout text-sm text-paper transition-colors hover:text-signal'
                  >
                    LinkedIn
                  </a>
                  <a
                    href={personalInfo.social.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='readout text-sm text-paper transition-colors hover:text-signal'
                  >
                    GitHub
                  </a>
                </dd>
              </div>
              <div className='border-t border-line pt-4'>
                <dt className='eyebrow-dim mb-2'>Location</dt>
                <dd className='text-sm text-paper'>{personalInfo.location}</dd>
                <dd className='mt-1 text-sm text-faint'>{personalInfo.availability}</dd>
              </div>
            </dl>
          </div>

          <div className='lg:col-span-7'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-6'
            >
              <div>
                <label
                  htmlFor='contact-name'
                  className='eyebrow-dim'
                >
                  Your name
                </label>
                <Input
                  id='contact-name'
                  type='text'
                  name='name'
                  placeholder='Jane Doe'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor='contact-email'
                  className='eyebrow-dim'
                >
                  Your email
                </label>
                <Input
                  id='contact-email'
                  type='email'
                  name='email'
                  placeholder='jane@company.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor='contact-message'
                  className='eyebrow-dim'
                >
                  Message
                </label>
                <Textarea
                  id='contact-message'
                  name='message'
                  placeholder='What are you building?'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div className='flex flex-wrap items-center gap-4'>
                <Button
                  type='submit'
                  size='lg'
                  className='rounded-sm bg-signal font-medium text-[#17130c] hover:bg-[#f0b25c]'
                >
                  <Send className='mr-2 h-4 w-4' />
                  Open in mail app
                </Button>
                <p className='text-xs text-faint'>
                  Opens your mail client with this message pre-filled.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
