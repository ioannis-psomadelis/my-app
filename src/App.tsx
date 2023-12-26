//Components
import Test from "./components/test";
import Joke from "./components/joke";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

//Styles
import "./App.css";

function App() {
  const jokes = [
    {
      id: 1,
      joke: "This is a joke",
      categories: "test",
    },
    {
      id: 2,
      joke: "This is another joke",
      categories: "test",
    },
    {
      id: 3,
      joke: "This is a third joke",
      categories: "test",
    },
  ];

  return (
    <>
      <Header />
      <main className="wrapper">
        <h1>Vite + React</h1>
        <div>
          <Test initialCount={0} />
        </div>
        <div className="joke">
          {jokes
            //test filter
            .filter((joke) => joke.id === 1)
            //test mapping
            .map((joke) => (
              <Joke
                key={joke.id}
                joke={joke.joke}
                categories={joke.categories}
              />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
