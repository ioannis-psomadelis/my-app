// Define the props interface for the component
interface TestProps1 {
	joke: string;
	categories: string;
}

const Joke: React.FC<TestProps1> = ({ joke, categories }) => {
	return (
		<div>
			<h2>Joke: {joke}</h2>
			<p>Categories: {categories}</p>
		</div>
	);
};

export default Joke;
