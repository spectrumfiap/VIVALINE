'use client';

import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import('../searchBar'), { ssr: false });

const Header = () => {
    return(
        <header className="bg-[#454444] flex items-center pb-4 justify-between pr-8 border-b-1  " >

            <Link href="/">
            
            <Image src="/assets/VIVALINE.svg" alt="Logo" width={200} height={100} className="pb-0 pt-5 pl-6 pr-0 sm:w-[5] md:w-[100] lg:w-[200] "/>
            </Link>

            <SearchBar />

            


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