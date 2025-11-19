import { useState } from "react";

function AddTodoForm(props) {

  const activityArr = props.activityArr
  const setActivityArr = props.setActivityArr

  const [newactivity,setnewactivity] = useState("")
    const  handlechange =(event)=>{
      setnewactivity(event.target.value)

    }
    const addactivity=()=>{
      setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
      setnewactivity("")
    }

  return (
    <div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium "> Manage Activities </h1>
        <div>
          <input
            type="text"
            className="border border-black bg-transparent p-1"
            placeholder="Next Activity ? " value={newactivity} onChange={handlechange}
          ></input>
          <button className="bg-black text-white p-1 border border-black"  onClick={addactivity}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodoForm;
