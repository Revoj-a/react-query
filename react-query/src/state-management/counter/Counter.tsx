import useCounterStore from "./store";

const Counter = () => {
  const { counter, increment, reset } = useCounterStore();
  return (
    <div>
      Counter ({counter})
      <button onClick={() => increment()} className="btn btn-primary mx-1">
        INCREMENT
      </button>
      <button onClick={() => reset()} className="btn btn-primary mx-1">
        RESET
      </button>
    </div>
  );
};

export default Counter;
