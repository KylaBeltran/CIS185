import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid #ffd3ec"
            }}
        >
            <div style={{ display: "flex", alignItems: "center" }}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    style={{
                        marginRight: "10px",
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                        borderRadius: "6px",
                        border: task.completed
                            ? "2px solid #ff70c9"
                            : "2px solid #ffb7e0",
                        accentColor: "#ff70c9",
                    }}
                />

                <span
                    style={{
                        textDecoration: task.completed ? "line-through" : "none",
                        color: task.completed ? "#888" : "#000"
                    }}
                >
                    {task.text}
                </span>
            </div>

            <button pink
                onClick={() => onDelete(task.id)}
                style={{
                    background: "#ffb7e0",
                    color: "black",
                    border: "1px solid #ff89cf",    /*pink*/
                    padding: "5px 10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                }}
            >
                Delete
            </button>
        </li>
    );
}

export default TaskItem;
