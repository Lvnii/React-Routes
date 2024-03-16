import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Person = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [personData, setPersonData] = useState({})
    const [loading, setLoading] = useState(false)

    const getPersonData = async (id) => {
        setLoading(true)
        const res = await fetch(`https://dummyjson.com/users/${id}`)
        if (!res.ok) {
            navigate("/*", { replace: true })
        }
        const data = await res.json()
        setPersonData(data)
        setLoading(false)
    }

    useEffect(() => {
        if (params || params.personId) {
            getPersonData(params.id)
        }
    }, [params])
    return (
        <div>
            {loading ? <p>Loading...</p> : (
                <div>
                    <p>id: {personData.id}</p>
                    <p>name: {personData.firstName}</p>
                    <p>surname: {personData.lastName}</p>
                    <p>age: {personData.age}</p>
                    <p>gender: {personData.gender}</p>
                    <p>email: {personData.email}</p>
                    <p>birth date: {personData.birthDate}</p>
                </div>
            )}
        </div>
    )
}

export default Person;