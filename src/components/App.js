import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import { CATEGORIES, TASKS as initialTasks } from "../data"; // Assuming CATEGORIES is here

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.text !== taskToDelete.text));
  };

  return (
    <div className="container">
      <h1>Task List</h1>
      <CategoryFilter
        categories={CATEGORIES} // Make sure CATEGORIES is passed here
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      <TaskList tasks={tasksToDisplay} onDelete={handleDeleteTask} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
    </div>
  );
}

export default App;
