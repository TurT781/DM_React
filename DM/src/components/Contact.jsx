import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contactez <span>Moi !</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              name="fullName"
              placeholder="Nom / Prénom"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <span className="focus"></span>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              name="subject"
              placeholder="Objet Mail"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <span className="focus"></span>
          </div>
        </div>

        <div className="textarea-field">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Votre Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <span className="focus"></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
