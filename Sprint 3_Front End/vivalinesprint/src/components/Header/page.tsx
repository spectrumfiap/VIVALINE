import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return(
        <header className="bg-[#454444] flex items-center pb-4 justify-between pr-8 border-b-1  " >

            <Link href="/">
            
            <Image src="/assets/VIVALINE.svg" alt="Logo" width={200} height={100} className="pb-0 pt-5 pl-6 pr-0 sm:w-[5] md:w-[100] lg:w-[200] "/>
            </Link>

            <input  className="border-2 rounded-2xl pl-3 mt-6 
            ml-2 border-gray-500 bg-[#D9D9D9] p-1.5 text-black [background-image:url('/assets/lupa-cinza.svg')] bg-no-repeat bg-right cursor-pointer w-full sm:w-80 md:w-46 md:p-1 lg:w-100 lg:p-1.5  " placeholder="O que você deseja?"type="text"/>

            


            <ul className="flex items-center pt-6 gap-16 lg:gap-10">
                <li className=" text-white text-base md:text-1xl lg:text-2xl" >
                    <Link href="/QuemSomos">Quem somos?
                    </Link>
                </li>
                    
                <li className="text-white text-base  md:text-1xl lg:text-2xl">
                    <Link href="/Duvidas">Dúvidas frequentes</Link>
                        
                </li> 

                <li>
                <a href="../../cadastro"><Image src="/assets/User-branco.svg" alt="login" width={40} height={20} className="flex items-center justify-end space-x-4 sm:w-[5] md:w-[30] lg:w-10"/></a>
                </li>
            </ul>
            



        </header>
    )
}
export default Header