const Aside = () => {
    return(

        <aside className="font-Kanit w-[35%] flex flex-col h-full"> {/*Esta será a aba de Noticias, cada div terá uma className */ }
            <h2 className="bg-[#ffffff] text-black font-kanit text-[2rem] text-center p-10 border-b border-r border-black">NOTÍCIAS <span>HOJE

            </span></h2>

        <ul className="h-full">
            <li className="border-1 border-t-0 border-l-0 pl-4 p-12">
                <h2 className="text-[1.5rem] font-semibold ">Paralização na linha esmeralda.</h2>
                <span>10/10/2024 15:12</span>
                <br></br>
                <span className="text-2xl">Ver mais</span>
            </li>

            <li className="border-1 border-t-0 border-l-0 pl-4 p-12">
                <h2 className="text-[1.5rem] font-semibold">Como estão as obras da nova Estação Ambuitá da linha 8-Diamante.</h2>
                <span>10/10/2024 15:12</span>
                <br></br>
                <span className="text-2xl">Ver mais</span>
            </li>

            <li className="border-1 border-t-0 border-b-0 border-l-0 p-12 flex justify-center">
                <h2 className="text-[2.5rem] font-semibold">Solicitar Auxílio</h2>

            </li>

        </ul>
        

        </aside>
    )
}
export default Aside