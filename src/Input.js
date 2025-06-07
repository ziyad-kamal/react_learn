import { useContext } from "react";
import { InputContext } from "./InputContext";

export default function Input() {
    const inputContext = useContext(InputContext);
    const label = inputContext.name.replace(/_/g, " ");

    return (
        <>
            <label>{label}</label>
            <input
                value={inputContext.inputValue}
                onChange={(e) => {
                    inputContext.handleChange(e.target.value, inputContext.name);
                }}
                type="text"
                name={inputContext.name}
            />
        </>
    );
}
