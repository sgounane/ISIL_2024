

function Output(props) {
    console.log(props.onclick(2,4))
  return (
        <label>{props.text} </label>
  );
}

export default Output;
