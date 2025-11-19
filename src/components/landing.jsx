import Header from './Header'
import Card from './Card'
import TodoContainer from './TodoContainer'
import { useLocation } from 'react-router-dom'

function Landing(){
  const data=useLocation()
    return(
    
    <div className="bg-black p-16 ">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/*Header*/}
       <Header name={data.state.user}/>
        {/*Card*/}
        <div className=" flex justify-between my-5 gap-7 flex-wrap">

          <Card backgroundColor={"#8272DA"} title={"23"} subtitle={"chennai"} />
          <Card backgroundColor={"#FD6663"} title={"December"} subtitle={"14:23:22"} />
          <Card backgroundColor={"#FCA201"} title={"Built using "} subtitle={"React"} />
        </div>
        {/*TodoContainer*/}
        <TodoContainer/>
      </div>
    </div>
    
    )
}
export default Landing