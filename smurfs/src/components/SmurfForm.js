import React, {useState} from "react";

const SmurfForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        age: null,
        height: ""
    });

    const onChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e =>{
        e.preventDefault();
        console.log(formState)
    }

    return (
        <form onSubmit={onSubmit}>
            <p>Create a Smurf</p>
            <div className="inputs">
                <input onChange={onChange} value={formState.name} type="text" name="name" placeholder="name"/>
                <input onChange={onChange} value={formState.age} type="number" name="age" placeholder="age"/>
                <input onChange={onChange} value={formState.height} type="text" name="height" placeholder="height"/>
            </div>
            <button>Add Smurf</button>
        </form>
    )
}

export default SmurfForm;