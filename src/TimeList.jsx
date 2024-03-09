import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "./TestContext";

const TimeList = () => {

    const context = useContext(TestContext);

    return (
        <div>
            {context.timeArr.map((c, index)=>
                <Item key={index}>{c}</Item>
            )}
        </div>
    )
}

export default TimeList;