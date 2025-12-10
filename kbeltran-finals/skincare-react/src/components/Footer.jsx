export default function Footer() {
    return (
        <footer className="lace-footer">
            <p className="footer-title">Contact Me</p>

            <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea rows="4" placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
            </form>

            <p className="footer-copy">© 2025 From My Routine To Yours</p>
        </footer>
    );
}
