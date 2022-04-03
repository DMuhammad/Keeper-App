import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isShow, setIsShow] = useState(false);
    
    function handleChange(event){
        const {name, value} = event.target;

        setNote((prevText) => {
            return {
                ...prevText,
                [name]: value
            }
        })
    }

    function handleClick(event){
        props.onAdd(note);

        setNote(() => {
            return {
                title:"",
                content:""
            }
        });

        event.preventDefault();
    }

    return <div>
        <form className="create-note">
            {isShow && <input name="title" placeholder="Title" onChange={handleChange} value={note.title} hidden={!isShow} /> }
            <textarea onClick={() => {
                setIsShow((prevValue) => {
                    return !prevValue
                })
            }} name="content" placeholder="Take a note..." rows={isShow ? 3 : 1} onChange={handleChange} value={note.content} />
            <Zoom in={isShow}>
                <Fab onClick={handleClick}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
    </div>
}

export default CreateArea;