import Joke from "./Joke";
import JokeData from "./JokeData";

function App() {
  const jokesElement = JokeData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });

  return <>{jokesElement}</>;
}
export default App;
