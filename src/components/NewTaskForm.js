import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("All");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onTaskFormSubmit({ text, category });
      setText("");
      setCategory("All");
    }
  };

  return (
    <form role="form" className="new-task-form" onSubmit={handleSubmit}>
      {" "}
      {/* Explicitly set role="form" */}
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
