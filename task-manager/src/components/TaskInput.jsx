import React, { useState } from "react";

function TaskInput({ onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;

        onAdd(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>

            <input
                type="text"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    padding: "10px",
                    width: "70%",
                    marginRight: "10px",
                    borderRadius: "20px",
                    border: "2px solid #ffb7e0",
                    outline: "none",
                }}
            />


            <button
                type="submit"
                style={{
                    padding: "8px 15px",
                    background: "#ffb7e0",
                    border: "1px solid #ff89cf",
                    borderRadius: "20px",
                    cursor: "pointer",
                }}
            >
                Add
            </button>
        </form>
    );
}

export default TaskInput;
