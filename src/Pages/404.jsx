import {useRouteError} from "react-router-dom";


const ErrorPage = () =>{

    const error = useRouteError();
    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
            <h1 className="text-5xl text-red-600 text font-bold">Oops!</h1>
            <p>halaman tidak ditemukan</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;
