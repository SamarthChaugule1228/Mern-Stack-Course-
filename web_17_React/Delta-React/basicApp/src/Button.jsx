function printHello(EVENT)
{
    console.log("Hello!!!");
    console.log(EVENT);
}

export default function Button() {
    return (
        <div>
            <button onClick={printHello}>Click Me</button>
        </div>
    );
}
