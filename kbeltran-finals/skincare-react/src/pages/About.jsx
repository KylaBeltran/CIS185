import Header from "../components/Header";
import Nav from "../components/Nav";

export default function About() {
    return (
        <>
            <Header />
            <Nav />

            <section className="about-section">
                <h2>My Story</h2>
                <p>
                    Skincare Picks is all about finding what really works with your skin, without getting lost in trends or feeling pressured to try everything.
                    These are my curated recommendations for you.
                </p>

                <p>
                    I've curated favorites from Korea, Japan, and the United States.
                </p>

                <h2>What We Offer</h2>
                <ul className="about-list">
                    <li>Hand-picked skincare recommendations</li>
                    <li>Filters based on real skin concerns</li>
                    <li>Transparent product descriptions</li>
                </ul>
            </section>
        </>
    );
}
