import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Function to calculate emoji based on minutes
  const getReadingTime = (minutes) => {
    if (minutes < 30) {
      // For every 5 minutes (rounded up), add a coffee cup emoji
      const coffeeCups = Math.ceil(minutes / 5);
      return `${"☕️".repeat(coffeeCups)} ${minutes} min read`;
    } else {
      // For every 10 minutes (rounded up), add a bento box emoji
      const bentoBoxes = Math.ceil(minutes / 10);
      return `${"🍱".repeat(bentoBoxes)} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} · {getReadingTime(minutes)}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
