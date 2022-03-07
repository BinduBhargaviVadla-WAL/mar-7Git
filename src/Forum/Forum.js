import { useReducer } from "react";
import ForumList from "./FormList";
import ForumContext from "./ForumContext";
import ForumForm from "./ForumForm";
import ForumReducer from "./ForumReducer";

const Forum = () => {
    const initialValue = [];
    const [state,dispatch] =useReducer(ForumReducer,initialValue);
    const reducerValue = {state,dispatch}
    return (
        <ForumContext.Provider value={reducerValue}>
            <ForumForm/> 
            <ForumList/>   
        </ForumContext.Provider>
    )
}
export default Forum;