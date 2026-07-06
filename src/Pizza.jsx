   const PizzaList = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h4", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const Pizza = (props) => {
    return(
        <div className ="pizza">
            <h1>{props.name}</h1>
        </div>
    )
}

export default Pizza;