import { Link } from "react-router-dom";

const AuthLayouts = (props) =>{
    const {children, title, type} = props;
return(
    <div className="flex justify-center items-center min-h-screen gap-x-4">
        <div className="w-full max-w-xs">
          <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
          <p className="font-medium text-slate-600">
            welcome, please enter your details
          </p>
      {children}
      <p className="text-center">
      {type === "login" ? "dont have account?" : "already have account" }



        {type === "login" && (
          <Link to="/register" className="underline text-blue-700 font-bold">register</Link>

        )}
        {type === "register" && (
          <Link to="/login" className="underline text-blue-700 font-bold">login</Link>

        )}
        </p>
        </div>
        
      </div>
);
}

export default AuthLayouts;