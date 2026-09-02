import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Contact Us</h1>
          <p className="page-header__desc">We would love to hear from you — enquiries, custom orders, and wholesale welcome</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Whether you need help choosing the perfect silver gift, want to place a custom order, or have a wholesale enquiry — reach out to us. We reply within 24 hours.</p>

              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <strong>Workshop &amp; Store</strong>
                    <p>SilverArticle, Johari Bazaar<br />Jaipur, Rajasthan 302003, India</p>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <strong>Call / WhatsApp</strong>
                    <p>+91 98765 43210<br />Mon - Sat, 10 AM - 7 PM IST</p>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p>info@silverarticle.com<br />orders@silverarticle.com</p>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <div>
                    <strong>Online Store</strong>
                    <p>www.silverarticle.com<br />Etsy: etsy.com/shop/silverarticle</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">&#10003;</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We will get back to you within 24 hours.</p>
                  <button className="btn btn--primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="contact-form__row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required placeholder="Tell us about your enquiry, custom order requirements, or any questions..."></textarea>
                  </div>
                  <button type="submit" className="btn btn--primary btn--lg">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
