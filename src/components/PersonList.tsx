type PersonListProps = {
    names: {
        fName: string,
        IName: string,
    }[]
};

const PersonList = (props: PersonListProps) => { 
    return (
        <div>
            {props.names.map(name => (
                <h2>{name.fName} {name.IName}</h2>
            ))}
        </div>
    );
}

export default PersonList;
