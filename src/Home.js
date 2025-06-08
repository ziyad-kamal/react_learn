import "./test.css";
import { useEffect, useMemo, useReducer, useState } from "react";
import { InputContext } from "./InputContext";
import Custom from "./Custom";
import { Link } from "react-router";
import nameReducer from "./nameReducer";

function Home() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        desc: "",
        isStudent: false,
        status: "",
    });

    const [userName, dispatch] = useReducer(nameReducer, "ziyad");

    const changeName = () => {
        dispatch({
            type: "name",
            payload: {
                name: "ww",
            },
        });
    };

    const [tasks, setTasks] = useState([
        { id: 1, title: "task4" },
        { id: 2, title: "task5" },
        { id: 3, title: "task6" },
        { id: 4, title: "task7" },
    ]);

    const tasksList = useMemo(() => {
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

        return tasks.map((task) => {
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

                    <Link to={`/task/${task.id}`}>
                        <button>show</button>
                    </Link>
                </li>
            );
        });
    }, [tasks]);

    let [counter, setCounter] = useState(tasks.length + 1);

    useEffect(() => {
        let storedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (storedTasks !== null) {
            setTasks(storedTasks);
            setCounter(storedTasks.length + 1);
        }
    }, []);

    const handleChange = (value, name) => {
        setInputs({ ...inputs, [name]: value });
    };

    function submit(e) {
        e.preventDefault();

        setTasks([...tasks, { title: inputs.name, id: counter }]);
        setCounter(counter + 1);

        setTasks((newTasks) => {
            localStorage.setItem("tasks", JSON.stringify(newTasks));
            return newTasks;
        });
    }

    return (
        <div>
            <h4>{userName}</h4>

            <button onClick={changeName}>click</button>

            <ul> {tasksList} </ul>

            <form onSubmit={submit}>
                <InputContext.Provider
                    value={{
                        inputValue: inputs.name,
                        handleChange: handleChange,
                        name: "name",
                    }}
                >
                    <Custom />
                </InputContext.Provider>
                <InputContext.Provider
                    value={{
                        inputValue: inputs.email,
                        handleChange: handleChange,
                        name: "email",
                    }}
                >
                    <Custom />
                </InputContext.Provider>
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

export default Home;
