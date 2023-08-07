const Footer = () => {
  return (
    <>
    <div className=" bg-blue-950 text-white m-0 w-full h-full ">
      <div className="container mx-auto p-4 px-8 flex justify-around items-center">
            <div>
                
                Ready to watch? Enter your email to create or restart your membership.
               <div className=" mt-4 flex gap-2 justify-start items-center">
                  <input type="email" placeholder="enter your email" required=""
                  className=" bg-blue-800 hover:bg-white hover:transition-all shadow-2xl w-full  h-4 text-xs p-4 outline-none rounded uppercase text-white hover:text-blue-900" />
                  <button className=" bg-blue-800 hover:bg-white hover:text-blue-950 transition-all px-3 py-1 rounded">
                         STARTED
                  </button>
               </div>
            </div>
            <div>
                  <ul className="flex items-center gap-5">
                        <li className=" hover:text-blue-400 transition-all">Account</li>
                        <li className=" hover:text-blue-400 transition-all">Settings</li>
                        <li className=" hover:text-blue-400 transition-all">TMDB</li>
                  </ul>
                  <ul className="">
                        <li></li>
                        <li></li>
                  </ul>
            </div>
           

      </div>

    </div>
    </>
  )
}

export default Footer;