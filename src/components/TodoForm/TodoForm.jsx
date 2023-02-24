import { useFormik } from 'formik';
import Input from "../Form/Input";
import {formDefaultValues, formDefaultPlaceholders, todoValidationSchema} from "./formDataModel";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const TodoForm = ({saveData}) => {
    const formHandler = useFormik({
        initialValues: {...formDefaultValues},
        validationSchema: todoValidationSchema,
        onSubmit: formData => {
            saveData(formData)
        },
    });

    return (
        <Form onSubmit={formHandler.handleSubmit}>
            <Col className="mb-3">
                <Input
                    label={'Title'}
                    value={formHandler.values.title}
                    onChange={formHandler.handleChange}
                    placeholder={formDefaultPlaceholders?.title}
                    type="text"
                    name="title"
                    errors={formHandler.errors}
                    touched={formHandler.touched}
                />
            </Col>

            <Col className="mb-3">
                <Input
                    label='Task body'
                    value={formHandler.values.description}
                    onChange={formHandler.handleChange}
                    placeholder={formDefaultPlaceholders?.description}
                    name="description"
                    cols="30"
                    rows="10"
                    isTextarea={true}
                    errors={formHandler.errors}
                    touched={formHandler.touched}
                />
            </Col>

            <Button type="submit" variant="primary">Create Task!</Button>
        </Form>
    );
};




export default TodoForm;