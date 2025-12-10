import React, { useState } from "react";
import products from "../data/products";
import "../index.css";

export default function Home() {
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [selectedFilter, setSelectedFilter] = useState("all");

    const countries = ["ALL", "Korea", "USA", "Japan"];
    const filters = ["ALL", "Toner", "Serum", "Essence", "SPF", "Face Cleanser", "Moisturizer", "Mask"];

    const visibleProducts = products.filter((p) => {
        const matchCountry = selectedCountry === "all" || p.country === selectedCountry;
        const matchFilter = selectedFilter === "all" || p.type === selectedFilter;
        return matchCountry && matchFilter;
    });

    return (
        <>


            {/* HEADER */}
            <header className="lace-header">
                <h1 className="site-title">Skincare Picks</h1>
                <p className="subtitle">Curated skincare from Korea, USA, and Japan</p>
            </header>



            {/* NAV */}
            <nav className="main-nav">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>



            {/* COUNTRY TABS */}
            <section className="country-tabs">
                {countries.map((c) => (
                    <button
                        key={c}
                        className={`tab ${selectedCountry === c ? "active" : ""}`}
                        onClick={() => setSelectedCountry(c)}
                    >
                        {c.charAt(0).toUpperCase() + c.slice(1)}
                    </button>
                ))}
            </section>



            {/* FILTER BUTTONS */}
            <section className="filters-section">
                <h2>Filter by Type of Product</h2>

                <div className="filter-buttons">
                    {filters.map((f) => (
                        <button
                            key={f}
                            className={`filter-btn ${selectedFilter === f ? "active" : ""}`}
                            onClick={() => setSelectedFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </section>



            {/* PRODUCT GRID */}
            <section className="product-grid">
                {visibleProducts.map((p) => (
                    <div className="product-card" key={p.id}>
                        <img src={p.image} alt={p.name} />
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                    </div>
                ))}
            </section>



            {/* FOOTER */}
            <footer className="lace-footer">
                <p className="footer-title">Contact Me</p>

                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea rows="4" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>

                <p className="footer-copy">© 2025 Skincare Picks</p>
            </footer>
        </>
    );
}
