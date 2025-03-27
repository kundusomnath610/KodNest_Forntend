
export default function counter() {
    let count = 0;
    const update = () => {
        count = count + 1;
        alert(count);
    }
  return (
    <>
        <div>
            <h1>Count</h1>
            <button onClick={update}></button>

        </div>
    
    </>
  )
}

