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
export const updateAction = async ({request, params}) => {
    // get the form data
    const formData = await request.formData()
    
    // get the pet id
    const id = params.id
    
    // construct the request body
    const updatedPet = {
        name: formData.get('name'),
        age: formData.get('age'),
    }

    // send the request body to the backend
    await fetch(`${URL}${id}/`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPet)
    })

    // redirect to the show page
    return redirect(`/pets/${id}`)
}

// Delete Action -- Rehome a pet
export const deleteAction = async ({params}) => {
    // get the pet id
    const id = params.id
    
    // send the request to the backend
    await fetch(`${URL}${id}/`,{
        method: 'DELETE'
    })
    
    // redirect to the index page
    return redirect('/')
}