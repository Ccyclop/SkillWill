import { BookStarsList } from "./bookStarsList"

export const BookInfoSection = (props) => {
    return (props.data.map((dataElement, index) => {
        return (
            <div key={index} className="card-hover">
                <div className="card-hover__content">
                    <h3 className="card-hover__title">
                        {dataElement.title}<span> - {dataElement.author}</span>
                    </h3>
                    <p className="card-hover__text">{dataElement.describtion}</p>
                    <p className="card-hover__link">
                        <span onClick={() => props.onClick(dataElement.title, dataElement.stars)}>Click Me</span>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </p>
                </div>
                <BookStarsList data={dataElement.stars} />
                <img src={dataElement.img} alt=""></img>
            </div>
        )
    }))
    
}