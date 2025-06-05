import "./App.css";
import "./test.css";
import { useState } from "react";
import Input from "./Input";

function App() {
    const [name, setName] = useState("ziyad");
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        desc: "",
        isStudent: false,
        status: "",
    });

    const changeName = () => {
        if (name === "ziyad") {
            setName("ali");
        } else {
            setName("ziyad");
        }
    };

    const [tasks, setTasks] = useState([
        { id: 1, title: "task4" },
        { id: 2, title: "task5" },
        { id: 3, title: "task6" },
        { id: 4, title: "task7" },
    ]);

    function handleDelete(id) {
        let newTasks = tasks.filter((task) => {
            return task.id !== id;
        });

        setTasks(newTasks);
    }

    function handleEdit(id) {
        let newTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, title: task.title + "ww" };
            }

            return task;
        });

        setTasks(newTasks);
    }

    const tasksList = tasks.map((task) => {
        return (
            <li key={task.id}>
                {task.title}

                <button
                    onClick={() => {
                        handleDelete(task.id);
                    }}
                >
                    delete
                </button>

                <button
                    onClick={() => {
                        handleEdit(task.id);
                    }}
                >
                    edit
                </button>
            </li>
        );
    });

    let [counter, setCounter] = useState(tasks.length + 1);
    function submit(e) {
        e.preventDefault();

        setTasks([...tasks, { title: inputs.name, id: counter }]);
        setCounter(counter + 1);
        setCounter((c) => {
            return c + 1;
        });
    }

    const handleChange = (value, name) => {
        setInputs({ ...inputs, [name]: value });
    };

    return (
        <div className="App">
            <h4>{name}</h4>

            <button onClick={changeName}>click</button>

            <ul> {tasksList} </ul>

            <form onSubmit={submit}>
                <Input
                    inputValue={inputs.name}
                    handleChange={handleChange}
                    name='name'
                />
                <Input
                    inputValue={inputs.email}
                    handleChange={handleChange}
                    name={"email"}
                />
                <textarea
                    value={inputs.desc}
                    onChange={(e) => {
                        setInputs({ ...inputs, desc: e.target.value });
                    }}
                    cols="30"
                    rows="10"
                />
                <input
                    type="checkbox"
                    onChange={(e) => {
                        setInputs({ ...inputs, isStudent: e.target.checked });
                    }}
                    checked={inputs.isStudent}
                />
                <input
                    type="radio"
                    onChange={(e) => {
                        setInputs({ ...inputs, status: e.target.value });
                    }}
                    checked={inputs.status === "student"}
                    value={"student"}
                />
                student
                <br />
                <input
                    value={"teacher"}
                    type="radio"
                    onChange={(e) => {
                        setInputs({ ...inputs, status: e.target.value });
                    }}
                    checked={inputs.status === "teacher"}
                />
                teacher
                <button>submit</button>
            </form>
        </div>
    );
}

export default App;
