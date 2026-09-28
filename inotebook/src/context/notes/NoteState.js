import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    // This was to understand context
    /* const initialState = {
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
    ) */

    const initialNotes = [
        {
            "id": "1",
            "title": "My title",
            "user": "user_1",
            "description": "please wake up early for user1"
        },
        {
            "id": "2",
            "title": "My title",
            "user": "user_2",
            "description": "please wake up early for user 2"
        }]
    const [notes, setNotes] = useState(initialNotes);

    // The value in the provider is exposed to everyone.
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
