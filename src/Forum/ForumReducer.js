const ForumReducer = (state, action) => {
    console.log(state);
    console.log(action);
    if (action.type == "add") {
        if (action.topic == "") {
            console.log("empty added");
            return state;
        }
        let newDate = new Date();
        let newTopic = {
            topic: action.topic,
            user: action.user,
            date: newDate
        }
        let newOb = [...state, newTopic]
        localStorage.setItem("forum", JSON.stringify(newOb));
        return newOb;
    }
    if (action.type == "delete5min") {
        console.log("delete 5 minss")

        let filteredData = state.filter((val,index) => {
            let postDate = new Date(val.date);
            let currentDate = new Date();
            console.log(currentDate)
            console.log(postDate)
            var diff =(postDate.getTime() - currentDate.getTime()) / 1000;
            diff /= 60;
            console.log(diff)
            console.log(Math.abs(Math.round(diff)))
            if(Math.abs(Math.round(diff)) <= 5){
                return false;
            }
            else{
                return true;
            }
        })         
        localStorage.setItem("forum", JSON.stringify(filteredData));
        return filteredData;
    }
    if(action.type == "deleteTopic"){
        return state.filter((val,index) => index!=action.index);
    }
}
export default ForumReducer;