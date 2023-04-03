import { ListElement } from "./listElement"

export const NotDoneList = ({data, onComplete}) => {
    return(
        <div className="not-done-list">
            <h1 style={{textAlign: 'center',}}>To Do</h1>
            {data.map((elem, index) => {
                return <ListElement key={index} info={elem.name} isDone = {false} index={index} onCompleteFunction={onComplete} /> 
            })}
        </div>
    )
}