import { PureComponent } from "react"


class ListElement extends PureComponent{ 
    
    render(){
        const {info, onRemoveFunction, onCompleteFunction, index, isDone} = this.props;
        return (
            <div className="element">
                <span>{info}</span>
                <div className="buttons">
                    {(() => {
                        if (isDone) {
                            return (
                                <button className="btn-remove" onClick={() => onRemoveFunction(index)}>Remove</button>
                            )
                        } else {
                            if (info !== undefined){
                                return (
                                    <button className="btn-done" onClick={() => onCompleteFunction(index)}>Complete</button>
                                )
                            }
                        }
                    })()}
                </div>
            </div>
        )
    }
}

export default ListElement