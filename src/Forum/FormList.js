import { useContext } from "react";
import ForumContext from "./ForumContext";
import ForumTopic from "./ForumTopic";
const ForumList = () => {
    const { dispatch } = useContext(ForumContext);
    const reducerValue = useContext(ForumContext)
    const del5Mins = () => {
        dispatch({ type: "del5mins" });
    };
    return (
        <div className="forumList">
            <div className="head">
                <h1 className="listtitle">Forum List</h1>
            </div>
            <div>
                {reducerValue.state.length !== 0 ? (
                    reducerValue.state.map((val, index) => {
                        let postDate = new Date(val.date);
                        return (
                            <div className="card">
                                <ForumTopic topic={val.topic} />
                                <p>{val.user}</p>
                                <div>
                                    <div className="deleteTopics"><p>{new Date(val.date).toISOString()}</p></div>
                                    <div className="deleteTopics deletesingle">
                                        <button onClick={() => {
                                            if (window.confirm("Are You Sure You Want to Delete?") == true) {
                                                { dispatch({ type: 'deleteTopic', index: index }) }
                                            }
                                        }} className="button">Delete</button>
                                    </div>
                                </div>

                            </div>
                        );
                    })
                ) : (
                    <h1 className="center">No posts Available</h1>
                )}
            </div>
        </div>
    );
}
export default ForumList;