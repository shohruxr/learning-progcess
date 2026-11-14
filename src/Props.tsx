interface Props{
    name: string,
    age: number
}

function Props(props: Props){
    return (
        <div>
            <h1>Hello World!</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}
export default Props