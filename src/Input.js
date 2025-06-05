export default function Input({inputValue,setValue,name,inputs}) {
    function handleInput(e) {
        setValue({...inputs, [name]: e.target.value });
    }
    
    return (
        <div>
            <input value={inputValue} onChange={handleInput} type="text" />
        </div>
    );
}
