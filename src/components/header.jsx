import {FaCarAlt , FaGripLines} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";
import '../App.css'
export default function Header (){
    const Links = [
        {name: "Home",},
        {name: "Rent A Car"},
        {name: "Packages"},
        {name: "Contact Us" , style:"text-sky-600 hover:text-blue-400"},
    ]
    const [isOpen,setIsOpen] = useState(false)

    return(
        <div className='shadow-md w-full fixed top-0 left-0 z-50  '>
            <div className='md:px-10 py-4 px-7 md:flex justify-evenly items-center
            bg-gray-900 '>
                <div className='flex text-2x1 cursor-pointer items-center gap-2'>
                    <FaCarAlt className='w-7 h-7 text-sky-600' />
                    <span className='font-bold text-sky-600'>Rent.me</span>
                </div>
                <div onClick={()=>{
                    setIsOpen(!isOpen)
                }} className='w-7 h-7 absolute right-8 top-6 md:hidden cursor-pointer'>
                    {
                        isOpen ? <AiOutlineClose className='text-white'/> : <FaGripLines className='text-white'/>
                    }
                </div>
                <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-1000 ease-out shadow md:shadow-none  ${isOpen ? 'top-12 z-999' : 'top-[-490px]'}`}>
                    {
                        Links.map(link => (
                            <li key={link.name} className='font-semibold my-7 md:my-0 md:ml-8 md:text-white hover:text-gray-300'>
                                <a href="#" className={link.style ?? ""} >{link.name}</a>
                            </li>
                        )  )
                    }
                </ul>
        </div>
        </div>
    )
}