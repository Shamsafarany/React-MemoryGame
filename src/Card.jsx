import './card.css'
function Card({img, title, onClick}){
    
    return(
        <div className="card" onClick={onClick}>
            <img src={img}/>
            <p>{title}</p>
        </div>
    );
}
export default Card;