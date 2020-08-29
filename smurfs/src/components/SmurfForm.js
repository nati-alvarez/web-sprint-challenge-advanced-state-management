import React, {useState} from "react";
import {connect} from "react-redux";
import {createSmurf} from "../actions";

const SmurfForm = props => {
    const [formState, setFormState] = useState({
        name: "",
        age: "",
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
        props.createSmurf(formState);
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
            {props.creatingSmurf && <p>Creating smurf...</p>}
        </form>
    )
}

const mapStateToProps = state => {
    return {
        creatingSmurf: state.creatingSmurf,
        createSmurfSuccess: state.createSmurfSuccess
    }
}

export default connect(mapStateToProps, {createSmurf})(SmurfForm);