import { Link } from 'react-router-dom'

export default function Pet({ pet }) {
    const id = pet.url.split('/')[4]
    console.log(id)
    
    return (
        <div>
            <Link to={`/pets/${id}`}>
                <h1>{pet.name}</h1>
            </Link>
        </div>
    )
}