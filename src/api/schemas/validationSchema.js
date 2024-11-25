import * as yup from 'yup';

export const schema = yup.object({
    user_id: yup.string().required(),
    nombre: yup.string().required()
})