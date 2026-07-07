
const PizzaList = (props) => {
  return createElement("div", {}, [
    createElement("h4", {}, props.name),
    createElement("p", {}, props.description),
  ]);
};


const Pizza = (props) => {
    return(
        <div className ="pizza">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

export default Pizza;