

const ContactForm = () => {
    return (
        <section className="w-full  h-full flex flex-col  items-center justify-center py-3 px-2 lg:px-0  gap-7 ">

            <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[22px]  py-7" style={{ fontSize: "clamp(20px, 2vw, 35px)" }}>Contact Us</h1>
            <p className="text-[15px] capitalize text-center">We're here to help! If you have any questions or need assistance, feel free to get in touch with us.</p>

            <form>
                <div className="flex flex-col py-3 gap-3">
                    <label>Name</label>
                    <input type="text"  className="w-[300px] outline-none  border-b-[var(--cardColor)] border-solid border-b-2"/>
                </div>
                <div className="flex flex-col py-3 gap-3">
                    <label>Phone</label>
                    <input type="text" className="w-[300px] outline-none   border-b-[var(--cardColor)] border-solid border-b-2" />
                </div>
                <div className="flex flex-col py-3 gap-3">
                    <label>Email</label>
                    <input type="email"  className="w-[300px] outline-none   border-b-[var(--cardColor)] border-solid border-b-2"/>
                </div>
                <div className="flex flex-col py-3 gap-3">
                    <label>Message</label>
                    <textarea className="w-[300px] outline-none   border-b-[var(--cardColor)] border-solid border-b-2 resize-none"></textarea>
                </div>
            </form>

            <button type="submit" className="bg-[var(--primary)] px-7 py-2 cursor-pointer">Submit Message</button>

        </section>
    )
}

export default ContactForm;
