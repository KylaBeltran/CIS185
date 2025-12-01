import React from "react";

//filters
function FilterButtons({ filter, setFilter }) {
    return (
        <div style={{ marginBottom: "20px" }}>

            <button
                onClick={() => setFilter("all")} //all
                style={{
                    padding: "6px 12px",
                    marginRight: "8px",
                    borderRadius: "20px",
                    background: filter === "all" ? "#ffcce9" : "#ffffff",
                    border: "1px solid #ff89cf",
                    cursor: "pointer",
                }}
            >
                All
            </button>

            <button
                onClick={() => setFilter("active")} //active
                style={{
                    padding: "6px 12px",
                    marginRight: "8px",
                    borderRadius: "20px",
                    background: filter === "active" ? "#ffcce9" : "#ffffff",
                    border: "1px solid #ff89cf",
                    cursor: "pointer",
                }}
            >
                Active
            </button>

            <button
                onClick={() => setFilter("completed")} //completed
                style={{
                    padding: "6px 12px",
                    borderRadius: "20px",
                    background: filter === "completed" ? "#ffcce9" : "#ffffff",
                    border: "1px solid #ff89cf",
                    cursor: "pointer",
                }}
            >
                Completed
            </button>

        </div>
    );
}

export default FilterButtons;
