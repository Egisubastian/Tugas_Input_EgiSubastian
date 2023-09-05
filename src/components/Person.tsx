type PersonProps = {
    name: {
        fName: string,
        IName: string,
    }
}

const Person = (props: PersonProps) => {
    return (
        <div>{props.name.fName} {props.name.IName}</div>
    )
}

export default Person