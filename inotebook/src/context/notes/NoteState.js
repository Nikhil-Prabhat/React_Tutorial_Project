import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const initialState = {
        "name": "Nikhil",
        "class": "5B"
    }

    const [state, setState] = useState(initialState);
    const update = () => {
        setTimeout(() => {
            setState({
                "name" : "Prabhat",
                "class" : "10A"
            })
        }, 1000)
    }

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;