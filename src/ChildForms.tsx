import React, {useEffect, useState} from 'react';
import './App.css';

interface IForm {
    firstName: string,
    lastName: string
}

interface ChildFormsProps {
    deleteClicked: boolean | null
}

function ChildForms({deleteClicked}: ChildFormsProps) {

    const [state, setState] = useState<IForm>({
        firstName: '',
        lastName: ''
    });

    const formHandleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    useEffect(()=>{
        if (deleteClicked){
            setState({
                firstName:'',
                lastName:''
            })
        }
    },[deleteClicked]);

    return (
        <div className="form">
            <input
                placeholder={"firstName"}
                value={state.firstName}
                name="firstName"
                onChange={(e) => formHandleChanged(e)}
                type="text"/>
            <input
                placeholder={"lastName"}
                value={state.lastName}
                name="lastName"
                onChange={(e) => formHandleChanged(e)}
                type="text"/>
        </div>
    )
}
export default ChildForms;