import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Contact() {
    return (
        <>
            <Header />
            <Nav />

            <section className="contact-section">
                <h2>Get in Touch</h2>

                <form className="contact-form">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" />

                    <label>Your Email</label>
                    <input type="email" placeholder="Enter your email" />

                    <label>Skin Concern (optional)</label>
                    <select>
                        <option>Select</option>
                        <option>Dry Skin</option>
                        <option>Oily Skin</option>
                        <option>Combination</option>
                        <option>Acne Prone</option>
                        <option>Hyperpigmentation</option>
                        <option>Large Pores</option>
                        <option>Anti-Aging</option>
                    </select>

                    <label>Message</label>
                    <textarea rows="5" placeholder="How can we help?" />

                    <button className="submit-btn">Send Message</button>
                </form>
            </section>
        </>
    );
}
