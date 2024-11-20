import Container from '../layer/Container'
import BreadCambe from '../layer/BreadCambe'

const ContactPage = () => {
    return (
        <div>
            <Container>
                <div>
                    <BreadCambe />
                    <h1 className='text-5xl font-bold text-[#141313]'>Reach out me</h1>
                    <p className='font-semibold italic text-sm text-[#525252]'>249 king Sir, 05th Floor, Ultra House Building,
                        Melboune, VIC 3000, London.</p>
                    <div className='flex flex-col gap-3 pt-24'>
                        <a href="tel:+8801729628402" className='font-semibold italic text-3xl text-[#525252]'>+88 01729628402 </a>
                        <a href="mailto:abdulkadir112k@gmail.com" className='font-semibold italic text-3xl text-[#525252]'>abdulkadir112k@gmail.com</a>
                    </div>
                    <div>
                        {/* <a href="https://www.linkedin.com/in/abdulkadir112k/" className="hover:scale-110 duration-300 text-blue-500">linkedin</a> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactPage