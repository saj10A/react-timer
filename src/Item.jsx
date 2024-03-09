import { useContext } from "react";
import { TestContext } from "./TestContext";
import "./style.css";

const Item = (props) => {

    const context = useContext(TestContext);

    const handleDeleteItem = (e) => {
      let targetItem = e.target.innerHTML;
      let newTimeArr = context.timeArr.filter(item => item !== targetItem);
      context.setTimeArr(newTimeArr); 
    }

    return (
        <div className="time_item" onClick={handleDeleteItem}>
            {props.children}
        </div>
    )
}

export default Item;