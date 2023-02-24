import React from 'react';
import {Form} from "react-bootstrap";

const Input = (props) => {
    const {label, children, isTextarea, errors, touched, name, ...inputProps}  = props;

    return (
        <Form.Group className="form-label w-100">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                {...inputProps}
                name={name}
                as={isTextarea ? 'textarea' : 'input'}
            />

            {(errors && errors[name]) && (touched && touched[name])  ? (
                <div className='p-1 mb-2 mt-2 text-bg-danger rounded-3'>{ errors[name]}</div>
            ) : null}

        </Form.Group>
    );
};

Input.defaultProps = {
    label: 'Default Label',
}


export default Input;