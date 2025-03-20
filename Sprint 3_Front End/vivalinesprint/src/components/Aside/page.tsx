const Aside = () => {
    return(

        <aside className="font-Kanit flex flex-col h-full border-r-1 sm:w-full sm:flex sm:flex-col md:w-full lg:w-[35%] "> {/*Esta será a aba de Noticias, cada div terá uma className */ }
            <h2 className="bg-[#ffffff] text-black font-kanit text-[2rem] text-center p-10 border-b  border-black">NOTÍCIAS <span>HOJE

            </span></h2>

        <ul className="h-full">
            <li className="pl-4 p-12 border-b-1 sm:pl-1 sm:p-2 md:pl-2 md:p-6 lg:pl-4 lg:p-12">
                <h2 className=" sm:text-sm md:text-md lg:text-[1.5rem] font-semibold ">Paralização na linha esmeralda.</h2>
                <span>10/10/2024 15:12</span>
                <br></br>
                <span className="text-2xl">Ver mais</span>
            </li>

            <li className="pl-4 p-12 border-b-1">
                <h2 className="font-semibold sm:text-sm md:text-md lg:text-[1.5rem] ">Como estão as obras da nova Estação Ambuitá da linha 8-Diamante.</h2>
                <span>10/10/2024 15:12</span>
                <br></br>
                <span className="text-2xl">Ver mais</span>
            </li>

        </ul>

        <div className="h-full flex items-center justify-center">

            <h2 className="font-semibold sm:text-sm md:text-2xl lg:text-[2.5rem] ">Solicitar Auxílio</h2>
        </div>

        </aside>
    )
}
export default Aside