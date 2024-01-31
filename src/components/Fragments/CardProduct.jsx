const CardProduct = (props) =>{
    const {children} = props;
    return(
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
          
        </div>
    );

}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
const Body = () =>{
    return(
        <div className="px-5 pb-5">
                <a href="">
                    <h5 className="text-xl font-semibold tracking-tight text-white">Sepatu</h5>
                <p className="text-m text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse enim maiores nobis tempore assumenda facere debitis cumque nulla provident.</p>
                </a>
            </div>
    );
}
const Footer = () =>{
    return(
        <div className="flex items-center justify-between px-5 pb-5">
                <span className="text-2xl font-bold text-white">
                    Rp 1.000.000 
                </span>
                <Button classname="bg-blue-700">add to cart</Button>
            </div>
    );
}

const Header = () =>{
    return(
        <a href="#">
        <img src="img/sepatu.jpg" alt="produk"  className="rounded-t-lg p-8"/>
    </a>
    )
}
export default CardProduct;