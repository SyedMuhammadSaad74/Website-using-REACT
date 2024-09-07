function Button({label , borderColor , bgColor}){
    return(
        <button className={`border ${borderColor ? borderColor :"border-blue-400"} ${bgColor ? bgColor :"bg-white text-white-200" } rounded-md p-2 px-4 m-0 font-bold`}>{label}</button>
    );
}
export default Button;