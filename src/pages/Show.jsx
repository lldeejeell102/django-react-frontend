import { Link, useLoaderData, Form } from "react-router-dom"

function Show(props) {
    
    const aPet = useLoaderData()
    const id = aPet?.url.split('/')[4]
    // ?. optional chaining
    return (
        <div>
            <h1>{aPet.name}</h1>
            <h2>{aPet.age}</h2>
            
            <div>
                {/* Update Form */}
                <Form action={`/update/${id}`} method='POST'>
                    <label htmlFor='name'>
                        Rename your Turtle
                        <input type='text' id='name' name='name' defaultValue={aPet.name}/>
                    </label>
                    
                    <label htmlFor='age'>
                        Reage your Turtle
                        <input type='number' id='age' name='age' defaultValue={aPet.age}/>
                    </label>
                    <button style={{"backgroundColor": "blue"}}>
                        Update Our Turtle
                    </button>
                </Form>
                
                {/* Delete Form */}
                <Form action={`/delete/${id}`} method='post'>
                    <button style={{"backgroundColor": "red"}}>
                        Release Turtle
                    </button>
                </Form>
            </div>
            
            
            <Link to='/'>
                <button>
                    Go Back
                </button>
            </Link>
        </div>
    )
}

export default Show