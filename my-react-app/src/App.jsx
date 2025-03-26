import Greeting from "./greeting";
function App() {
  let name = "AK"
  let id = 101
  return(
    <>
    <h1> Hello world React JS </h1>
    <Greeting fname = {name} myid = {id}/>
    </>
  )
}
export default App;
