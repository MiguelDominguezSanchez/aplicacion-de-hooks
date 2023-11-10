import { useCounter } from '../hooks/useCounter'

export const CounterComponent = () => {
	const { counter, increment, decrement, reset } = useCounter()

	return (
		<>
			<h1>counter: {counter}</h1>
			<button className='btn btn-primary' onClick={() => increment(1)}>
				+1
			</button>
			<button className='btn btn-danger' onClick={() => reset()}>
				Reset
			</button>
			<button className='btn btn-primary' onClick={() => decrement(1, false)}>
				-1
			</button>
		</>
	)
}
