import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  // Todo Data

  const [todoData, setTodoData] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mark, setMark] = useState(false);

  const data = {
    title,
    description,
    complete: mark,
  };

  const handleSubmit = async () => {
    const pushData = await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setTitle("");
    setDescription("");
    setMark(false);
    // console.log(pushData);
  };

  // fetch todo
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/todos");
      const data = await res.json(); // Parse the JSON response
      // console.log(data); // Log the parsed data, not the response object
      setTodoData(data.todos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(todoData);
//   const { todos } = todoData;
// console.log(todos)
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Build Todo Application using MERN stack
      </h1>
      {/* create todo */}
      <section className="flex justify-center items-center gap7">
        <div className=" flex flex-col border-2 w-1/4 justify-center items-center border-black p-4 m-2">
          Title{" "}
          <input
            className="border-2 border-cyan-800 outline-none rounded-md"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          Description{" "}
          <input
            className="border-2 border-cyan-800 outline-none rounded-md"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div>
            Mark Done{" "}
            <input
              className="p-2 m-2 gap-3"
              type="checkbox"
              name="mark"
              id=""
              value={mark}
              onChange={(e) => setMark(e.target.checked)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="border-2 border-black bg-white text-black hover:bg-black hover:text-white p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </section>
      <div className="flex justify-center items-center">
        {/* {todos.map((data, index) => {
          return (
            <>
              <Todo
                id={data._id}
                title={data.title}
                description={data.description}
                complete={data.complete}
              />
            </>
          );
        })} */}
        <div className="flex flex-row">
          <div>

        
        {todoData.map((data)=>{
          return(
            <>
            {data.title}
            <br />
            {data.description}
            <br />
            {data.complete}
            <br />
            <button className="border-7 bg-black gap-6 text-white" >Delete</button>
            
            <button className="border-7 bg-white text-black border-black rounded-md" >Update</button>
           
            <hr />
            {/* <Todo id={data._id} title={data.title} description={data.description} complete={data.complete} /> */}
            
           
              
            </>
          )
        })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
