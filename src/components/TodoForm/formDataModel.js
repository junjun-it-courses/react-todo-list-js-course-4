import * as Yup from 'yup';

export const formDefaultPlaceholders = {
    title: 'Example title',
    description: 'Example description'
}

export const formDefaultValues = {
    title: 't'.repeat(2),
    description: 'lorem '.repeat(3)
}

export const todoValidationSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Title Too Short!')
        .max(50, 'Title  Too Long!')
        .required('Title is Required'),
    description: Yup.string()
        .min(10, 'Description is Too Short!')
        .max(50, 'Description is Too Long!')
        .required('Description is Required'),
});