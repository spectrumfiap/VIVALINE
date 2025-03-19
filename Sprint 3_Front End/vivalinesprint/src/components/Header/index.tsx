import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return(
        <header className="bg-[#454444] flex items-center pb-4 justify-between pr-8 border-b-1 " >

            <Image src="/assets/VIVALINE.svg" alt="Logo" width={200} height={100} className="pb-0 pt-5 pl-6 pr-0"/>
            <input  className="border-2 rounded-2xl pl-3 mt-6 w-100
            ml-2 border-gray-500 bg-[#D9D9D9] p-1.5 text-black [background-image:url('/assets/lupa-cinza.svg')] bg-no-repeat bg-right cursor-pointer" placeholder="O que você deseja?"type="text"/>

            


            <ul className="flex items-center pt-6 gap-16">
                <li className="text-2xl text-white" >
                    <Link href="/QuemSomos">Quem somos?
                    </Link>
                </li>
                    
                <li className="text-2xl text-white">
                    <Link href="/Duvidas">Dúvidas frequentes</Link>
                        
                </li> 

                <li>
                <a href="../../cadastro"><Image src="/assets/User-branco.svg" alt="login" width={40} height={20} className="flex items-center justify-end space-x-4 pb-"/></a>
                </li>
            </ul>
            



        </header>
    )
}
export default Header