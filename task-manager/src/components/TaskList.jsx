import React from "react";
import TaskItem from "./TaskItem";

//onToggle
function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
        return <p>No tasks found. Add one above!</p>;
    }

    return (
        <ul style={{ padding: 0, listStyle: "none" }}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default TaskList;
