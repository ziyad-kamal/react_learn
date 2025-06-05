export default function Input({ inputValue, handleChange, name }) {
    const label = name.replace(/_/g, " ");

    return (
        <>
            <label>{label}</label>
            <input
                value={inputValue}
                onChange={(e) => {
                    handleChange(e.target.value, name);
                }}
                type="text"
                name={name}
            />
        </>
    );
}
