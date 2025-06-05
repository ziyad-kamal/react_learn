import Button from "./Button";

export default function Sidebar() {
    const classes = "color bg"
    return ( 
        <div>
            <Button classes={classes}/>
            <Button/>
        </div>
    );
}
