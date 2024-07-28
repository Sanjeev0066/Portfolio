const Contact = () => {
  return (
    <div>
      <header>
        <h1>Contact Me</h1>
      </header>
      <main>
        <section>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;
