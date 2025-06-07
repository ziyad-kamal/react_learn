import { useParams } from "react-router";

export default function Task() {
    const {id} = useParams();

    const tasks=[
        { id: 1, title: "task4" },
        { id: 2, title: "task5" },
        { id: 3, title: "task6" },
        { id: 4, title: "task7" },
    ]
    
    const task = tasks.find((selectedTask)=>{
        return selectedTask.id === Number(id) ;
    })

    return (
        <>
            <h1>{task.title}</h1>
        </>
    );
}
