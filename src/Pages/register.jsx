import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";


const RegisterPage = () =>{
return (
    <AuthLayouts title="register" type="register">
        <FormRegister></FormRegister>
        
    </AuthLayouts>
);
}

export default RegisterPage;