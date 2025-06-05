export default function Button({ classes }) {
    return (
        <div>
            {classes == null ? null : 
                <div>
                    <h4 className={classes + " test"}>button</h4>
                    <h4 className={classes + " test"}>button</h4>
                </div>
            }
        </div>
    );
}
