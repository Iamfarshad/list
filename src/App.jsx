import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  // const [editIndex, setEditIndex] = useState(null); 
  // const [editValue, setEditValue] = useState(''); 

  // Adding the new task
  const setNewTodo = () => {
    if (value === "") {
      alert("Enter a valid task");
    } else {
      const allTodos = [...todo, value];
      setTodo(allTodos);
      setValue("");
    }
  };

  // Delete the added,task task
  const setDeleteTask = (indexToDelete) => {
    const updatedTodos = todo.filter((_, index) => index !== indexToDelete);
    setTodo(updatedTodos);
  };

  // // now start editing task
  // const startEditTask = (index) => {
  //   setEditIndex(index); // Set the index of the task to be edited
  //   setEditValue(todo[index]); // Set the current value of the task in the edit input
  // };

  // // Apply changes to the edited task
  // const applyEditTask = () => {
  //   if (editValue === "") {
  //     alert("Enter a valid task");
  //     return;
  //   }

  //   const updatedTodos = todo.map((item, index) =>
  //     index === editIndex ? editValue : item // Update the specific task
  //   );
  //   setTodo(updatedTodos);
  //   setEditIndex(null); // Reset the edit index
  //   setEditValue(''); // Clear the edit value
  // };

  return (
    <section className="w-full h-screen flex flex-col items-center bg-neutral-300">
  <h1 className="text-black w-full bg-rose-600/70 mb-5 text-4xl desk:text-3xl phone:text-2xl flex justify-center font-bold font-serif">
    TO-DO LIST
  </h1>

  <div className="bg-black rounded-lg w-3/6 desk:w-4/6 phone:w-5/6 h-20 flex justify-center items-center gap-2">
    <div className="w-5/6 h-full flex justify-between items-center p-2">
      <input
        className="w-full h-12 rounded-lg bg-gray-400 placeholder:text-black/50 p-2 phone:h-10"
        placeholder="Enter Task"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>

    <div className="w-1/6 h-full flex justify-center items-center p-2">
      <button
        className="w-full h-12 phone:h-10 phone:w-12 bg-cyan-500 rounded-full shadow-md shadow-cyan-600"
        type="button"
        onClick={setNewTodo}
      >
        Add 
      </button>
    </div>
  </div>

  <div  className="w-3/6 desk:w-4/6 phone:w-5/6 text-white h-auto bg-white font-bold text-2xl desk:text-xl phone:text-lg p-2 flex  rounded-lg mt-6" >
 
    <div className="w-full">
      
      {todo.map((ele, i) => (
        <div
          key={i}
          className="bg-rose-400 p-2 mt-2 rounded-lg w-full flex justify-between text-white"
        >
          {/* {editIndex === i ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="rounded-lg p-2 w-full text-black"
              />
              <button
                className="rounded-lg bg-green-400 ml-2 px-4 phone:px-2"
                onClick={applyEditTask}
              >
                Save
              </button>
            </>
          ) : (
            <> */}
              <span>{ele}</span>
              <div className="gap-2 flex">
                <button
                  className="rounded-lg bg-black px-4 phone:px-2"
                  onClick={() => setDeleteTask(i)}
                >
                  Delete
                </button>
                <button
                  className="rounded-lg bg-cyan-900 px-4 phone:px-2"
                  // onClick={() => startEditTask(i)}
                >
                  Edit
                </button>
              </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

export default App;
