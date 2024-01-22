
const Button = ({name}) => {
    // console.log(name)
    return(
        <div>
            <button className="bg-gray-200 px-3 py-1 m-2 rounded-lg hover:bg-black hover:text-white">{name}</button>
        </div>
    )
}

export default Button;