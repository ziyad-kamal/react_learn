export default function nameReducer(currentState, { type, payload }) {
    if (type === "name") {
        if (currentState === "ziyad") {
            return "ali" + payload.name;
        } else {
            return "ziyad";
        }
    }
}
