import Image from "next/image"
import Link from "next/link"

const QuemSomos = () => {
  return (
    <main className="h-full flex justify-center">
        <ul className="flex justify-center items-center gap-[20vw]  ">
          <li className="text-center flex flex-col gap-3.5 ">
            <Image src="./assets/Arthur.svg" width={200} height={200} alt="Arthur_image"/>
            <p className="font-medium text-2xl">Arthur Thomas</p>
            <p>RM: 561061</p>
            <p>TURMA: 1TDSPA</p>

            <Link className="flex items-center justify-center" href="https://github.com/athomasmariano" target="_blank">
            <Image className="flex items-center justify-center" src="./assets/Github.svg"  width={50} height={50} alt="Github"/>
            </Link>

            <Link className="flex items-center justify-center" href="https://www.linkedin.com/in/arthur-thomas-mariano-941a97234/" target="_blank">
            <Image src="./assets/Linkedin.svg"  width={50} height={50} alt="Linkedin"/>
            </Link>
          </li>

          <li className="text-center flex flex-col gap-3.5 ">
            <Image src="./assets/Luann.svg" width={200} height={200} alt="Luann_image"/>
            <p className="font-medium text-2xl">Luann Noqueli</p>
            <p>RM: 560313</p>
            <p>TURMA: 1TDSPA</p>

            <Link className="flex items-center justify-center" href="https://github.com/luannoq" target="_blank">
            <Image src="./assets/Github.svg"  width={50} height={50} alt="Github"/>
            </Link>

            <Link className="flex items-center justify-center" href="https://www.linkedin.com/in/luann-noqueli-60628a2b0/" target="_blank">
            <Image src="./assets/Linkedin.svg"  width={50} height={50} alt="Linkedin"/>
            </Link>
            
          </li>
           
          <li className="text-center flex flex-col gap-3.5 ">
            <Image src="./assets/Jhonatta.svg" width={200} height={200} alt="Jhonatta_image"/>
            <p className="font-medium text-2xl">Jhonatta Lima</p>
            <p>RM: 560277</p>
            <p>TURMA: 1TDSPA</p>

            <Link className="flex items-center justify-center" href="https://github.com/JhonattaLimaSandesdeOLiveira" target="_blank">
            <Image src="./assets/Github.svg"  width={50} height={50} alt="Github"/>
            </Link>

            <Link className="flex items-center justify-center" href="" target="_blank">
            <Image src="./assets/Linkedin.svg"  width={50} height={50} alt="Linkedin"/>
            </Link>
          </li>






        </ul>
    </main>
  )
}
export default QuemSomos