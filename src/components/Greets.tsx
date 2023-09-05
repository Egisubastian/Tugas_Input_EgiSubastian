type NameProps = {
    name: string,
    messageCount? : number,
    isLoggedIn: boolean,
}

const Greets = (props: NameProps) => {
    return (
        <div>
            {
                props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` : 'welcome'
            }    
        </div>
    )
}

export default Greets
