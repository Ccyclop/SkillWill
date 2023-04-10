import { PureComponent } from "react"
import  ListElement  from "./listElement"


class NotDoneList extends PureComponent {

    render() {
        const {data, onComplete} = this.props
        return(
            <div className="not-done-list">
                <h1 style={{textAlign: 'center',}}>To Do</h1>
                {data.map((elem, index) => {
                    return <ListElement key={index} info={elem.name} isDone = {false} index={index} onCompleteFunction={onComplete} /> 
                })}
            </div>
        )
    }
}


export default NotDoneList