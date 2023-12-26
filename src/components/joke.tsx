import React from "react";

// Define the props interface for the component
interface Joke {
  joke: string;
  categories: string;
}

const Joke: React.FC<Joke> = ({ joke, categories }) => {
  return (
    <div>
      <h2>Joke: {joke}</h2>
      <p>Categories: {categories}</p>
    </div>
  );
};

export default Joke;
