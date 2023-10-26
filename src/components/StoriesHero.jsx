import React, { useState } from "react";

import "../styles/StoriesHero.css";

function StoriesHero({ stories }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );
  };

  const activeStory = stories[currentIndex];
  const remainingStories = [
    ...stories.slice(currentIndex + 1),
    ...stories.slice(0, currentIndex),
  ].slice(0, stories.length - 1); // Limit to exclude current story.

  return (
    <div className="hero">
      <h1 hidden="true">Stories</h1>
      <img id="heroImg" src={activeStory.data.image} alt="Hero Image" />
      <div className="hero-content">
        <h2>
          {activeStory.data.title}
        </h2>
        <p>{activeStory.data.excerpt}</p>
        {/* <a href={`/stories/${activeStory.slug}`} className="hero-button">
          Read this story
        </a> */}
      </div>
      <ul className="cards-list">
        {remainingStories.map((story, index) => (
          <li
            key={story.data.title}
            className="card"
            onClick={() =>
              setCurrentIndex((currentIndex + index + 1) % stories.length)
            }
          >
            <img src={story.data.image} alt="Story Image" />
          </li>
        ))}
      </ul>
      <div className="btn-group">
        <button className="btn" onClick={previousImage}>
          Previous
        </button>
        <button className="btn" onClick={nextImage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StoriesHero;
