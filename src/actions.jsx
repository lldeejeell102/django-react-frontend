import { redirect } from 'react-router-dom'

const URL = import.meta.env.VITE_BASE_URL

// Create Action
export const createAction = async ({request}) => {
    console.log("here")
    // get the form data
    const formData = await request.formData()

    // construct request body
    const newPet = {
        name: formData.get('name'),
        age: formData.get('age'),
    }
    
    // send request to our backend
    await fetch(`${URL}`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPet)
    })

    // redirect to index
    return redirect('/')
}


// Update Action

// Delete Action