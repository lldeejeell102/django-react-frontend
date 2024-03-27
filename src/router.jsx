import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<App/>}>
            <Route path='' element={<Index/>}/>
            <Route path='pets/:id' element={<Show/>}/>
            <Route/>
            <Route/>
            <Route/>
        </Route>
    </>
))

export default router