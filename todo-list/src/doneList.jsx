import { PureComponent } from "react";
import  ListElement  from "./listElement";

class DoneList extends PureComponent{

    render() {
        const {data, onRemove} = this.props
        return(
            <div className="done-list">
                <h1 style={{textAlign: 'center',}}>Done</h1>
                {data.map((elem, index) => {
                    return <ListElement key={index} info={elem.name} isDone = {true} index={index} onRemoveFunction={onRemove} /> 
                })}
            </div>
        )
    }

}

export default DoneList