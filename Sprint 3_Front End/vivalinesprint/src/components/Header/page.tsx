'use client';

import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import('../searchBar'), { ssr: false });

const Header = () => {
    return(
        <header className="bg-[#454444] flex items-center pb-4 justify-between sm:pr-8 md:pr-8 lg:pr-8 border-b-1  " >

            <Link href="/">
            
            <Image src="/assets/VIVALINE.svg" alt="Logo" width={150} height={100} className="pb-0 pt-5 pl-6 pr-0 w-[5.5rem] sm:w-[5]  md:w-[120] lg:w-[200] "/>
            </Link>

            <SearchBar />

            


            <ul className="flex items-center pt-6 gap-3.5 sm:gap-4 lg:gap-8">
                <li className=" text-white text-[0.6rem] md:text-[1rem] lg:text-2xl" >
                    <Link href="/QuemSomos">Quem somos?
                    </Link>
                </li>
                    
                <li className="text-white text-[0.6rem] md:text-[1rem] lg:text-2xl">
                    <Link href="/Duvidas">Dúvidas frequentes</Link>
                        
                </li> 

                <li>
                <a href="../../cadastro"><Image src="/assets/User-branco.svg" alt="login" width={40} height={20} className="flex items-center justify-end space-x-4 w-4 sm:w-[5] md:w-[25] lg:w-10"/></a>
                </li>
            </ul>
            



        </header>
    )
}
export default Header