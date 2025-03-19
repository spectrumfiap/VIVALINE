import Image from 'next/image'

const Footer = () => {
    return(
        <footer className="bg-[#454444] text-white flex h-[3.25rem] items-center gap-4 pl-4  border-t border-black ">
            <h3 className="text-white">2024 Grupo Spectrum</h3>

            <a href="https://www.instagram.com/spectrumfiap/" target="_blank">
                <Image src="assets/Insta-branco.svg" alt="insta-branco" width={35} height={20} />
            </a>


        </footer>
    )
} 
export default Footer