import Link from 'next/link'

const Li = ({ list, className , icon , href}) => {
    return (
        <div>
            <ul className='w-[320px] pl-16 flex flex-col'>
                <li className=' w-full px-3 py-2 bg-slate-500 hover:bg-slate-600 rounded-l-full transition-all duration-500 group '>
                    <Link href={href} className={`relative flex justify-between pr-5 font-common text-xl font-semibold pl-4 uppercase text-stone-100 after:absolute after:content-[""]  before:absolute before:content-[""] before:w-2 before:h-2 before:rounded-full before:bg-transparent before:left-0  before:top-1/2 before:-translate-y-1/2 group-hover:before:bg-[#ff6262] before:transition-all before:duration-1000 group-hover:text-blue-400 ${className}`}>{list} <span className='text-2xl opacity-0 group-hover:opacity-100 duration-300'>{icon}</span> </Link>
                </li>
            </ul>
        </div>
    )
}

export default Li