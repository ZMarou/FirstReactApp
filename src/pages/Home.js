import {useState} from "react";
import Todos from "./Todos";

const Home = () => {
    const [count, setCount] = useState(2);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
        setTodos((t) => [...t, "todo " + count]);
    };
    return (
        <>
            <h1>Home</h1>
            <Todos todos={todos}/>
            <hr/>
            <div>
                <h2>Count: {count}</h2>
                <h2>Tab length: {todos.length}</h2>
                <button onClick={increment}>+</button>
            </div>
        </>);

};

export default Home;
