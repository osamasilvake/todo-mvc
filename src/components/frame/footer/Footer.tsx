import { list } from "./Footer.list"


const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center mt-5 mb-7 gap-5">
        <p className="font-[300] text-[1rem]">Brought to you by</p>
    {list.map((item) => {
 return <div key={item.id} className="flex justify-center items-center gap-2">
            <img width={40} height={40} className="rounded" src={item.image} alt={item.text} />
        <p className="font-[500] text-[#9f3c3c] text-[1.2rem]">{item.text}</p>
        </div>
    })}
    </footer>
  )
}

export default Footer
