export default function CountryTabs({ selectedCountry, onSelect }) {
    const countries = ["all", "korea", "usa", "japan"];

    return (
        <section className="country-tabs">
            {countries.map((c) => (
                <button
                    key={c}
                    className={`tab ${selectedCountry === c ? "active" : ""}`}
                    onClick={() => onSelect(c)}
                >
                    {c.toUpperCase()}
                </button>
            ))}
        </section>
    );
}
