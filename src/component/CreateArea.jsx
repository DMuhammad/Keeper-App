import React, {useState} from "react";

function CreateArea(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    function handleChange(event){
        const {name, value} = event.target;

        setNote((prevText) => {
            return {
                ...prevText,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();

        setNote(() => {
            return {
                title:"",
                content:""
            }
        });
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
            <textarea name="content" placeholder="Take a note..." rows={3} onChange={handleChange} value={note.content} />
            <button onClick={() => {
                props.onAdd(note)
            }}>Add</button>
        </form>
    </div>
}

export default CreateArea;