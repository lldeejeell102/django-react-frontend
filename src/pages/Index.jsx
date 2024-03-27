// import our Pet component
import Pet from "../components/Pet"
import { Form, useLoaderData} from "react-router-dom"


function Index(props) {
    const allPets = useLoaderData()
    return (
        <>
            <h1>Add A Turtle</h1>
            <Form action='/create' method='post'>
                <label htmlFor="name">
                    <input type='text' name='name' id="name"/>
                </label>
                <label htmlFor="age">
                    <input type='number' name='age' id="age"/>
                </label>
                <button>
                    Add New Turtle
                </button>
            </Form>
            <hr/>
            {allPets.map((pet, i) => <Pet pet={pet} key={i}/>)}
        </>
    )
}

export default Index