import { useState } from "react";

import Header from "./components/Header";
import Nav from "./components/Nav";
import CountryTabs from "./components/CountryTabs";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

import products from "./data/products";

function App() {
    const [country, setCountry] = useState("all");
    const [type, setType] = useState("all");

    const filteredProducts = products.filter((p) => {
        const matchCountry = country === "all" || p.country === country;
        const matchType = type === "all" || p.type === type;
        return matchCountry && matchType;
    });

    return (
        <>
            <Header />
            <Nav />

            <CountryTabs selectedCountry={country} onSelect={setCountry} />
            <Filters selectedType={type} onSelect={setType} />

            <ProductGrid products={filteredProducts} />

            <Footer />
        </>
    );
}

export default App;
