import "./App.css";
import Todo from "./components/Todo";

function App() {
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
          />
          Description{" "}
          <input
            className="border-2 border-cyan-800 outline-none rounded-md"
            type="text"
          />
          <div>
            Mark Done{" "}
            <input className="p-2 m-2 gap-3" type="checkbox" name="" id="" />
          </div>
          <button className="border-2 border-black bg-white text-black hover:bg-black hover:text-white p-2 rounded-md">
            Submit
          </button>
        </div>
      </section>
      <Todo
        id={1}
        title={"todo title"}
        description={"todo description"}
        complete={true}
      />
    </>
  );
}

export default App;
