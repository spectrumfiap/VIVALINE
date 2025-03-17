import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return(
        <header className="bg-[#C7CDCF] flex gap-40 items-center pb-4 border-b-1" >
            <Image src="/assets/VIVALINE.svg" alt="Logo" width={200} height={100} className="pb-0 pt-5 pl-6 pr-0"/>
            <input  className="border-2 rounded-2xl pl-3 mt-6 w-60
            ml-2  border-gray-500 bg-[#D9D9D9] p-1.5   text-black" placeholder="O que você deseja?" type="text"/>

            <button className="px-5 py-1  mt-6 text-lg font-bold border-none bg-gray-400 text-white 
                   rounded-md cursor-pointer transition-all duration-300 ease-in-out 
                   shadow-md hover:shadow-lg">Pesquisar</button>


                <ul className="flex gap-32 items-center pt-6 ">
                    <li className="text-2xl">
                        <Link href="" target="_blank">Quem somos?
                        </Link>
                    </li>
                    
                    <li className="text-2xl">
                        <Link href="" target="_blank">Dúvidas frequentes</Link>
                        
                    </li> 

                    <li>
                    <Image src="/assets/Login.svg" alt="login" width={40} height={20} className="flex items-center justify-end space-x-4 pb-"/>
                    </li>
                </ul>
            



        </header>
    )
}
export default Header