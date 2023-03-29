

export const BookStarsList = (props) => {
    return (
        <div className="card-hover__extra">
            <ul>
                {props.data.map((o, index) => {
                    return (
                        <li key={index}>{o}</li>
                    )
                })}
            </ul>
        </div>
    )
}