import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slice";

const Counter = (props) => {
	const { name = "" } = props;
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.count);

	const decrimentCount = () => {
		dispatch(decrement());
	};

	const incrementCount = () => {
		dispatch(increment());
	};

	return (
		<div>
			<h2>{name}</h2>
			<span data-testid="count">count: {count}</span>
			<button onClick={decrimentCount}>-</button>
			<button onClick={incrementCount}>+</button>
		</div>
	);
};

export default Counter;
