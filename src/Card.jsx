import './card.css'
function Card({img, title}){
    
    return(
        <div className="card">
            <img src={img}/>
            <p>{title}</p>
        </div>
    );
}
export default Card;