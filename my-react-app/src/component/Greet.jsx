export default function Greet() {
let name = "Somnath";
const update = () => {
    name = "Akash";
}
  return (
    <div>
      <h1>Hello, (name)</h1>
      <button onClick={update}> Click </button>
    </div>
  )
}