import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  const renderEmojis = () => {
    if (minutesToRead < 30) {
      const coffeeCups = Math.ceil(minutesToRead / 5);
      return "☕️".repeat(coffeeCups);
    } else {
      const bentoBoxes = Math.ceil(minutesToRead / 10);
      return "🍱".repeat(bentoBoxes);
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {renderEmojis()} {minutesToRead} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
