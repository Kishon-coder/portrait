import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Mail, MapPin, Send } from 'lucide-react';
import { artistConfig, buildWhatsAppLink } from '../data/config.js';

const initialForm = { name: '', phone: '', email: '', portraitType: 'Pencil Portrait', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.phone.trim()) next.phone = 'Please enter a phone number.';
    else if (!/^[0-9+\s-]{7,15}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone number.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = 'Enter a valid email address.';
    if (!form.message.trim()) next.message = 'Tell me a little about the portrait you want.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // Placeholder submit handler — wire this up to your backend or an
  // email service (e.g. Formspree, EmailJS, or your own API route)
  // when you're ready to receive enquiries automatically.
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!validate()) return;

  const message = `
New Portrait Enquiry

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Portrait Type: ${form.portraitType}

Message:
${form.message}
  `.trim();

  const whatsappUrl = buildWhatsAppLink(message);

  window.open(whatsappUrl, '_blank');

  setForm(initialForm);
};

  const field = (name, label, type = 'text') => (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-body text-xs text-bone/50">
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className={`w-full rounded-lg border bg-transparent px-4 py-3 font-body text-sm text-bone placeholder:text-bone/30 focus:outline-none ${
          errors[name] ? 'border-red-400/60' : 'border-bone/15 focus:border-bronze'
        }`}
      />
      {errors[name] && <p className="mt-1 font-body text-xs text-red-400">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="bg-charcoal py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl text-bone sm:text-5xl">Let's Talk Portraits</h2>
          <p className="mt-4 max-w-sm font-body text-bone/60">
            Reach out however is easiest — I usually reply within a day.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={artistConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 font-body text-sm text-bone/80 transition-colors hover:text-bronze"
            >
              <Instagram size={18} /> @{artistConfig.instagramUrl.split('/').pop()}
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 font-body text-sm text-bone/80 transition-colors hover:text-bronze"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href={`mailto:${artistConfig.email}`}
              className="flex items-center gap-3 font-body text-sm text-bone/80 transition-colors hover:text-bronze"
            >
              <Mail size={18} /> {artistConfig.email}
            </a>
            <p className="flex items-center gap-3 font-body text-sm text-bone/80">
              <MapPin size={18} /> {artistConfig.location}
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 rounded-2xl border border-bone/10 bg-graphite p-8 shadow-soft"
        >
          {field('name', 'Your Name')}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {field('phone', 'Phone Number', 'tel')}
            {field('email', 'Email Address', 'email')}
          </div>

          <div>
            <label htmlFor="portraitType" className="mb-1.5 block font-body text-xs text-bone/50">
              Portrait Type
            </label>
            <select
              id="portraitType"
              value={form.portraitType}
              onChange={(e) => setForm({ ...form, portraitType: e.target.value })}
              className="w-full rounded-lg border border-bone/15 bg-charcoal px-4 py-3 font-body text-sm text-bone focus:border-bronze focus:outline-none"
            >
              <option>Pencil Portrait</option>
              <option>Charcoal Portrait</option>
              <option>Couple Portrait</option>
              <option>Family Portrait</option>
              
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block font-body text-xs text-bone/50">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`w-full resize-none rounded-lg border bg-transparent px-4 py-3 font-body text-sm text-bone placeholder:text-bone/30 focus:outline-none ${
                errors.message ? 'border-red-400/60' : 'border-bone/15 focus:border-bronze'
              }`}
              placeholder="Tell me about the photo and who it's for..."
            />
            {errors.message && <p className="mt-1 font-body text-xs text-red-400">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-bone py-3.5 font-body text-sm text-ink transition-transform hover:-translate-y-0.5"
          >
            Send Enquiry <Send size={15} />
          </button>

          {status === 'success' && (
            <p className="text-center font-body text-sm text-bronze">
              Thanks — your enquiry has been noted. I'll get back to you soon.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
