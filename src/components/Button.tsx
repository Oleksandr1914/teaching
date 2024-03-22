

const Button = () => {
    return (
        <div>
            <button className="text-[14px] text-[#FFFFFF] uppercase inline-block py-[13px] pl-[30px] pr-[26px] bg-[#80B7B3] rounded-full 
        hover:bg-[#3A5856] active:bg-[#818181]">
                <span className="after:content-[''] after:w-[21px] after:h-[10px] after:ml-[9px] after:inline-block after:bg-[url('../assets/shape.png')] after:bg-no-repeat after:bg-center">Full Story</span>
            </button>
        </div>
    )
}

export default Button