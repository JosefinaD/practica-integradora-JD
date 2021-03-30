function Card(props) {
    return (
        <div className="Card">
            <img src={props.DatosAmostrar.image} />
            <h2>{props.DatosAmostrar.name}</h2>
            <p>{props.DatosAmostrar.status} - {props.DatosAmostrar.species}</p>
            <p>Origin: {props.DatosAmostrar.origin.name}</p>
        </div>
    );
}
export default Card;
