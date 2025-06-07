import "./App.css";
import "./output.css";
import { Routes, Route, Link } from "react-router";
import Home from "./Home";
import Task from "./Task";
import NotFound from "./NotFound";
import AppLayout from "./AppLayout";

function App() {
    return (
        <div className="App">
            <Link to="/home">
                <button>home</button>
            </Link>

            <Routes>
                <Route element={<AppLayout />}>
                    <Route
                        path="/home"
                        element={<Home />}
                    />
                    <Route path="/task">
                        <Route
                            path=":id"
                            element={<Task />}
                        />
                    </Route>

                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
