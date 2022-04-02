import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import {v4 as uuidv4} from "uuid";

function App(){
    const [listNote, setListNote] = useState([]);

    function addNoteItem(note){
        setListNote((prevNote) => {
            return [...prevNote, note];
        })
    }

    function deleteNoteItem(id){
        setListNote((prevNote) => {
            return prevNote.filter((note, index) => {
                return index !== id
            })
        })
    }

    return (
        <div>
            <Header></Header>
            <CreateArea onAdd={addNoteItem} />
            {listNote.map((item, index) => {
                return <Note key={uuidv4()} id={index} title={item.title} content={item.content} onDel={deleteNoteItem} />
            })}
            <Footer></Footer>
        </div>
    )
}

export default App;