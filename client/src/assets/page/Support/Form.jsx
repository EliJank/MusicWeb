import {useState} from 'react';


const Form = () => {
    const [form, setForm] = useState({
        email: "",
        message: ""
    })
const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.message) {
        alert("Fill all fields");
        return
    }
} 
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
            name="email"
            placeholder="Email"
            value={form.email} />

        </form>
        </>
    )
}
export default Form;