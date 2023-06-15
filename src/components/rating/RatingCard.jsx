import './rating.css'
import Rdata from './Rdata'

const RatingCard = ({ props }) => {
    return (
        <>
            {props.map(data => {
                return (
                    <div className="testimonial-col" key={data.id}>
                        
                        <div>
                            <p>{data.attributes.comment}</p>
                            <img src={`public/assets/images/Rating Images/${data.attributes.img}.png`} />
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            {data.attributes.isFavorite ? <i className="fa fa-star"></i> : <i className="fa fa-star-o"></i>}
                            <h3>{data.attributes.name}</h3>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default RatingCard