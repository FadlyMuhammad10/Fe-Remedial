
export default function Menu({active, setActive, setCategory}){
    const links = [
        { id: null, name: "General", value: "general"},
        { id: null, name: "Business", value: "business"},
        { id: null, name: "Entertainment", value: "entertainment"},
    ]
    function onClick(id, value){
        setActive(id)
        setCategory(value)
    }
    return(
        <nav className="menu">
            <ul>
                {links.map(link => (
                    <li
                        key={link.id}
                        className={active === link.id ? "active" : "inactive"}
                        onClick={() => onClick(link.id, link.value)}
                    >
                        {link.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default function Menu({active, setActive, setCategory}){
    const links = [
        { id: null, name: "General", value: "general"},
        { id: null, name: "Business", value: "business"},
        { id: null, name: "Entertainment", value: "entertainment"},
    ]
    function onClick(id, value){
        setActive(id)
        setCategory(value)
    }
    return(
        <nav className="menu">
            <ul>
                {links.map(link => (
                    <li
                        key={link.id}
                        className={active === link.id ? "active" : "inactive"}
                        onClick={() => onClick(link.id, link.value)}
                    >
                        {link.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}