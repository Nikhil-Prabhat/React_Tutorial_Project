import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/notes/NoteContext'
import noteContext from '../context/notes/NoteContext'

export default function About() {
    const userContext = useContext(noteContext);
    useEffect(() => {
        userContext.update()
    }, []);

    return (
        <div>
            This is About {userContext.state.name} who studies in {userContext.state.class}
        </div>
    )
}
