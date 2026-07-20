
const PizzaList = (props) => {
  return createElement("div", {}, [
    createElement("h4", {}, props.name),
    createElement("p", {}, props.description),
  ]);
};


const Pizza = (props) => {

  const counter = counter++; 
  return(
        <div className ="pizza" onclick={() => {
          console.log();
          
        }}>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

export default Pizza;