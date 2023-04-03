import { ListElement } from "./listElement";

export const DoneList = ({data, onRemove}) => {
    return(
        <div className="done-list">
            <h1 style={{textAlign: 'center',}}>Done</h1>
            {data.map((elem, index) => {
                return <ListElement key={index} info={elem.name} isDone = {true} index={index} onRemoveFunction={onRemove} /> 
            })}
        </div>
    )
}