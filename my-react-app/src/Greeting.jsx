export default function Greeting(props) {
    return(
        <div>
            <h1>Hello from React JS </h1>
            <h1>Greeting Component </h1>
            <h3>Hello, {props.fname}</h3>
            <h3>Hello, {props.myid}</h3>
        </div>
    )
};