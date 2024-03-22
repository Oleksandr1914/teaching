const Text = () => {
    return (
        <ul className="p-4 pt-8 only:pt-3">
            <li className="before:content-[''] before:inline-block before:mr-[10px] before:w-[25px] before:h-[16px] before:rounded-full 
            before:bg-[url('../assets/icon.svg')] before:bg-no-repeat before:bg-center
            text-[20px] text-[#273D46] line-through
            hover:no-underline hover:cursor-pointer hover:font-medium">Put on this page information about your product</li>
            <li className="pt-3 before:content-[''] before:inline-block before:mr-[10px] before:w-[25px] before:h-[16px] before:rounded-full 
            before:bg-[url('../assets/icon.svg')] before:bg-no-repeat before:bg-center
            text-[20px] text-[#273D46] font-semibold
            hover:cursor-pointer hover:font-medium hover:text-red-600">A detailed description of your product</li>
            <li className="pt-3 before:content-[''] before:inline-block before:mr-[10px] before:w-[25px] before:h-[16px] before:rounded-full 
            before:bg-[url('../assets/icon.svg')] before:bg-no-repeat before:bg-center
            text-[20px] text-[#273D46] italic
            hover:cursor-pointer hover:font-medium hover:not-italic">Tell us about the advantages and merits</li>
            <li className=" pt-3 before:content-[''] before:inline-block before:mr-[10px] before:w-[25px] before:h-[16px] before:rounded-full 
            before:bg-[url('../assets/icon.svg')] before:bg-no-repeat before:bg-center
            text-[20px] text-[#273D46] uppercase
            hover:cursor-pointer hover:font-medium hover:normal-case">Associate the page with the payment system</li>
        </ul>
    )
}

export default Text;