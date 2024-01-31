import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () =>{
return (
    <form action="">
            <InputForm 
            label="email" 
            type="email" 
            placeholder="example@gmail.com" 
            name="email"
            />
            <InputForm 
            label="fullname" 
            type="text" 
            placeholder="insert your name here. . . ." 
            name="fullname"
            />
            <InputForm 
            label="password" 
            type="password" 
            placeholder="* * * * * *" 
            name="password"
            />
            <InputForm 
            label="confirm password" 
            type="password" 
            placeholder="* * * * * *" 
            name="confirmPassword"
            />


            
            <Button classname="bg-blue-600">register</Button>
          </form>
);
}

export default FormRegister;