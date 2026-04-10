function submit(event)
{
    event.preventDefault();
    console.log("From is Submitted");
}
export default function Form()
{
    return(
        <form onSubmit={submit}>
            <input type="text" placeholder="Enter the Text"/>
            <button>Submit</button>
        </form>
    );
}