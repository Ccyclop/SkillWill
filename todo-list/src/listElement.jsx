

export const ListElement = (props) => {
    return (
        <div className="element">
            <span>{props.info}</span>
            <div className="buttons">
                {(() => {
                    if (props.isDone) {
                        return (
                            <button className="btn-remove" onClick={() => props.onRemoveFunction(props.index)}>Remove</button>
                        )
                    } else {
                        if (props.info !== undefined){
                            return (
                                <button className="btn-done" onClick={() => props.onCompleteFunction(props.index)}>Complete</button>
                            )
                        }
                    }
                })()}
            </div>
        </div>
    )
}