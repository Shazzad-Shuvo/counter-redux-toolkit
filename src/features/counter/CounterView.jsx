import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, reset } from "./counterSlice";


const CounterView = () => {

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div className="space-x-4 space-y-4">
            <h2 className="text-3xl font-semibold text-pink-600">Count: {count}</h2>
            <button 
            onClick={() =>{dispatch(increment())}}
            className="p-2 border border-red-400 rounded-full">Increment</button>
            <button 
            onClick={() =>{dispatch(decrement())}}
            className="p-2 border border-red-400 rounded-full">Decrement</button>
            <button 
            onClick={() =>{dispatch(reset())}}
            className="p-2 border border-red-400 rounded-full">Reset</button>
            <button 
            onClick={() =>{dispatch(incrementByValue(7))}}
            className="p-2 border border-red-400 rounded-full">Increment by Number</button>
        </div>
    );
};

export default CounterView;