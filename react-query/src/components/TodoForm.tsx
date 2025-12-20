import React, { useRef } from "react";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form action="" className="row-mb-3">
      <div className="col">
        <input
          ref={ref}
          type="text"
          className="form-control"
          placeholder="Enter a todo"
        />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
