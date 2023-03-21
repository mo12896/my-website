function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Contact me</h2>
      <p>Get in touch with me using this form.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;