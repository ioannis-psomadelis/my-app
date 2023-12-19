// Import React and useState from the 'react' library
import React, { useState } from "react";

// Define the props interface for the component
interface TestProps {
	initialCount: number;
}

// Define the functional component
const Test: React.FC<TestProps> = ({ initialCount }) => {
	// Declare state using the useState hook
	const [count, setCount] = useState<number>(initialCount);

	// Function to handle incrementing the count
	const handleIncrement = () => {
		setCount(count + 1);
	};

	// Function to handle decrementing the count
	const handleDecrement = () => {
		setCount(count - 1);
	};

	// Return the JSX for the component
	return (
		<div>
			<h2>Counter: {count}</h2>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
		</div>
	);
};

// Export the component
export default Test;
