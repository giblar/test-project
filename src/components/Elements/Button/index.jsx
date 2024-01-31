const Button = (props) =>{
    const {children = ". . . ", classname = "slate"} = props;
      return(
        <>
        <button className={`${classname} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
       {children}
        </button>
        </>
      )
    }

    export default Button;