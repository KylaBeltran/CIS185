const types = [
    "all",
    "toner",
    "serum",
    "essence",
    "SPF",
    "Face Cleanser",
    "moisturizer",
    "mask",
];

export default function Filters({ selectedType, onSelect }) {
    return (
        <section className="filters-section">
            <h2>Filter by Type of Product</h2>

            <div className="filter-buttons">
                {types.map((t) => (
                    <button
                        key={t}
                        className={`filter-btn ${selectedType === t ? "active" : ""}`}
                        onClick={() => onSelect(t)}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </section>
    );
}
