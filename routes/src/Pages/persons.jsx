import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Persons = () => {
    const [personsData, setPersonsData] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        const res = await fetch("https://dummyjson.com/users")
        const data = await res.json()
        setPersonsData(data.users)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            {loading ? <p>Loading...</p> : (
                <div>
                    <ul>
                        {personsData.map((item) => {
                            return (
                                <li key={item.id}>
                                    <p>Name: {item.firstName} {item.lastName}, {item.age}</p>
                                    <NavLink to={`/person/${item.id}`}>See more</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Persons;