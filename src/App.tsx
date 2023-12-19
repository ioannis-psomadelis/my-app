import "./App.css";
import Test from "./components/test";
import Joke from "./components/joke";
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
			<h1>Vite + React</h1>
			<div>
				<Test initialCount={0} />
			</div>
			<div className="joke">
				{jokes.map((joke) => (
					<Joke key={joke.id} joke={joke.joke} categories={joke.categories} />
				))}
			</div>
		</>
	);
}

export default App;
