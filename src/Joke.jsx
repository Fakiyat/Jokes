function Joke(props) {
  return (
    <>
      {props.setup && <p className="setup">Setup: {props.setup}</p>}
      <p className="punchline">{props.punchline}</p>
      <hr />
    </>
  );
}
export default Joke;

/* Conditional renderings like in the upper example i have make 2 components setup and punchline with the helps 
 of props i render 2 of them but if there is only one element like a setup only that time a condition element 
 is used like if the sentence dont have a "setup"or "punchline" render it without it so we used this function 
 {props.setup && <p>then the normal html elemt and {props.setup}</p>}
 or
 <p style= {{display:props.setup ? "block" : "none"}}>{props.setup} </p>*/
