import "./Cards.scss"
import { data }from "../../helpers/data"

const Cards = () => {
  return (
    <div className="card-container">
        {data.map((card, index)=>{
            const { title, desc, image} = card
            return (
                <div className="cards" key={index}>
                    <div className="title">{title}</div>
                    <div className="img-div">
                        <img src={image} alt="" />
                    </div>
                    <div className="card-over">
                        <p>{desc}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Cards