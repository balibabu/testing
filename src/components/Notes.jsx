import React, { useState } from 'react'

export default function Notes() {
    const [notes, setNotes] = useState(['note-1', 'note-2','note-3']);

    return (
        <div>
            {notes.map((note, i) => <div key={i}>{note}</div>)}
        </div>
    )
}
