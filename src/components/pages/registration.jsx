import movement from "../../assets/movement.svg"
import designer from "../../assets/designer.svg"

function Registration() {
  return ( 
    <div className="font-montserrat py-6 px-16">
      <div className="text-left"> 
        <h6 className="text-customPurple font-clashDisplay font-bold">Register</h6>
      </div>
      <div className="grid place-items-center pt-8">
        <img src={designer} alt="designer" />
        <img src={movement} alt="movement" />
      </div>
      <div className="w-full">
        <h2 className="text-xl w-full tracking-[0.015em]">CREATE YOUR ACCOUNT</h2>
        <form action="">
          <div className="w-full grid grid-cols-1 gap-4 mt-4">
            <div className="w-full text-[13px]">
              <label htmlFor="">Team's Name</label>
              <input className="input-border text-[13px] px-6" placeholder="Enter the name of your group"  type="text" />
            </div>
            <div className="w-full text-[13px]">
              <label htmlFor="">Phone</label>
              <input className="input-border text-[13px] px-6" placeholder="Enter your phone number"  type="text" />
            </div>
            <div className="w-full text-[13px]">
              <label htmlFor="">Team's Name</label>
              <input className="input-border text-[13px] px-6" placeholder="Enter your email address"  type="text" />
            </div>
            <div className="w-full text-[13px]">
              <label htmlFor="">Team's Name</label>
              <input className="input-border text-[13px] px-6" placeholder="What is your prohect topic"  type="text" />
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-2 mt-4">
            <div className="w-full text-[13px] grid grid-col-1">
              <label htmlFor="">Category</label>
              <select className="bg-customPurple-darker input-border" name="" id="">
                <option value="" disabled>Select your category</option>
              </select>
            </div>
            <div className="w-full text-[13px] grid grid-col-1">
              <label htmlFor="">Group Size</label>
              <select className="bg-customPurple-darker input-border" name="" id="">
                <option className="text-white" value="" disabled>Select</option>
              </select>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-customPurple-light text-[9px]">
              <i>Please review your registration details before submitting</i>
            </p>
            <div className="flex gap-2 mt-3">
              <input className="w-3 h-3" type="checkbox" />
              <p className="text-[10px] w-full tracking-[0.025em]">
              I agreed with the event terms and conditions
              and privacy policy
              </p>
            </div>
          </div>
          <div className="text-center w-full mt-4">
            <button className="button py-[18px] w-44">Submit</button>
          </div>
        </form>
      </div>
    </div>
   );
}

export default Registration;