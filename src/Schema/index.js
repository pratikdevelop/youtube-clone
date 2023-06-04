import * as Yup from 'yup';
export const RegisteratonSchema = Yup.object({
    first_name: Yup.string().min(3).max(20).required('please Enter the first name'),
    last_name: Yup.string().min(3).max(20).required('please Enter the last name'),
    email: Yup.string().min(3).max(20).required('please Enter the email').email(),
    mobile: Yup.number().min(10).required('please Enter the mobile no'),
    password:Yup.string().min(3).max(10).required('please enter the password'),
    confirmPassword:Yup.string().min(3).max(10).required('please enter the confirm password').oneOf([Yup.ref('password'), null], "password and cofirm password not match")
})

export const LoginSchema = Yup.object({
    email: Yup.string().min(3).max(20).required('please Enter the email').email(),
    password:Yup.string().min(3).max(10).required('please enter the password'),
})