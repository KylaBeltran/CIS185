import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        if (saved) {
            return JSON.parse(saved).map(t => ({
                ...t,
                createdAt: new Date(t.createdAt)
            }));
        }
        return [];
    });

    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
            createdAt: new Date()
        };
        setTasks([newTask, ...tasks]);
    };

    //toggle
    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    return (
        <div style={{ width: "500px", margin: "40px auto", fontFamily: "Arial" }}>
            <h1
                style={{
                    textAlign: "center",
                    color: "#ff70c9",
                    marginBottom: "25px",
                }}
            >
                Task Manager
            </h1>

            <TaskInput onAdd={addTask} />
            <FilterButtons filter={filter} setFilter={setFilter} />

            <TaskList
                tasks={filteredTasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
            />

            <p style={{ marginTop: "15px" }}>
                {tasks.filter(t => !t.completed).length} active / {tasks.length} total
            </p>
        </div>
    );
}

export default App;
