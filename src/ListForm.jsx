import { ListItem, TextField, InputAdornment, IconButton } from "@mui/material";
import Create from "@mui/icons-material/Create";
import { useState } from "react";

export default function ListForm({ addItem }) {
    const [text, setText] = useState("");

    const changeText = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Add Todo" placeholder="todo..." variant="outlined" value={text} onChange={changeText}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end" >
                                <IconButton
                                    aria-label="create todo"
                                    edge="end"
                                    type="submit"
                                >
                                    <Create />
                                </IconButton>
                            </InputAdornment>

                    }} />
            </form>
        </ListItem >
    )
}


