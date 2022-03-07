import { useRef, useContext } from "react";
import ForumContext from "./ForumContext";
const ForumForm = () => {
    const referenceValue = null;
    const inputRef = useRef(referenceValue);
    const selectRef = useRef(referenceValue);
    const { dispatch } = useContext(ForumContext)
    return (
        <div>
            <h1 className="textCenter">Forum</h1>
            <div className="forumform">
                <textarea name="topic" placeholder="Forum Topic" ref={inputRef}></textarea><br />
                <select ref={selectRef} name="users">
                    <option value="User1">User1</option>
                    <option value="User2">User2</option>
                    <option value="User3">User3</option>
                </select>
                <button onClick={() => {
                    dispatch({ type: "add", topic: inputRef.current.value, user: selectRef.current.value })
                }}>Add Topic</button>
            </div>
            <div>
            <div className="deleteTopics"><b>Delete the post before 5 min </b></div>
            <div className="deleteTopics">
            <button onClick={() => {
                if (window.confirm('Delete the item?')) {
                    dispatch({ type: "delete5min" })
                } else { alert("not done") }
            }}>Delete</button>
            </div>
            </div>
        </div>
    )
}
export default ForumForm;