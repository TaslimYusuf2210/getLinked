import movement from "../../assets/movement.svg";
import designer from "../../assets/designer.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import leftFlare from "../../assets/contactFlare2.svg"
import rightFlare from "../../assets/contactFlare1.svg"

const schema = yup.object().shape({
  teamsName: yup.string().required("Name is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  emailAddress: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  projectTopic: yup.string().required("Topic is required"),
  category: yup.string().required("Select a category"),
  groupSize: yup.string().required("Choose your group size"),
  agree: yup.string().required("This field is required"),
});

function Registration() {

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = ( data) => {
    console.log(data)
    console.log("form submitted"); // Handle form data
  };

  return (
    <div className="font-montserrat py-10 px-8 md:px-14 lg:grid lg:grid-cols-2 lg:place-items-center lg:px-20 lg:py-28 min-h-screen relative">
      <img className="hidden lg:block absolute z-0 bottom-0 right-0 mix-blend-screen" src={leftFlare} alt="flare" />
      <img className=" hidden lg:block absolute z-0 top-0 left-0 mix-blend-screen" src={rightFlare} alt="flare" />
      <div className="hidden w-full lg:grid place-items-start pr-10 xl:pr-20">
      <img className="w-full relative z-10 transition-transform duration-700 hover:scale-105" src={designer} alt="designer" />
      </div>
      <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-[0_0_30px_rgba(212,52,254,0.1)] p-6 md:p-10 lg:p-12 transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,52,254,0.2)] hover:-translate-y-1 relative z-10">
      <div className="w-full">
        <div className="text-left">
          <h6 className="text-customPurple font-clashDisplay font-bold md:font-semibold md:text-[32px] lg:text-4xl">
            Register
          </h6>
        </div>
        <div className="grid place-items-center lg:place-items-start py-3 ">
          <img className="md:w-4/5 lg:hidden z-10" src={designer} alt="designer" />
          <img className="w-2/4 lg:w-3/5 xl:3/4" src={movement} alt="movement" />
        </div>
        <div className="w-full z-10">
          <h2 className="text-xl w-full tracking-[0.015em] lg:text-2xl">
            CREATE YOUR ACCOUNT
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="w-full grid grid-cols-1 gap-5 mt-6 md:grid-cols-2">
              <div className="w-full text-[13px] lg:text-[15px] group">
                <label className="mb-2 block font-medium">Team's Name</label>
                <input
                  className="input-border text-[14px] px-6 bg-transparent hover:bg-white/5 transition-colors duration-300"
                  placeholder="Enter the name of your group"
                  type="text"
                  {...register("teamsName")}
                />
                <p className="text-xs text-red-500 mt-1">{errors.teamsName?.message}</p>
              </div>
              <div className="w-full text-[13px] lg:text-[15px] group">
                <label className="mb-2 block font-medium">Phone</label>
                <input
                  className="input-border text-[14px] px-6 bg-transparent hover:bg-white/5 transition-colors duration-300"
                  placeholder="Enter your phone number"
                  type="number"
                  {...register("phoneNumber")}
                />
                <p className="text-xs text-red-500 mt-1">{errors.phoneNumber?.message}</p>
              </div>
              <div className="w-full text-[13px] lg:text-[15px] group">
                <label className="mb-2 block font-medium">Email Address</label>
                <input
                  className="input-border text-[14px] px-6 bg-transparent hover:bg-white/5 transition-colors duration-300"
                  placeholder="Enter your email address"
                  type="text"
                  {...register("emailAddress")}
                />
                <p className="text-xs text-red-500 mt-1">{errors.emailAddress?.message}</p> 
              </div>
              <div className="w-full text-[13px] lg:text-[15px] group">
                <label className="mb-2 block font-medium">Project Topic</label>
                <input
                  className="input-border text-[14px] px-6 bg-transparent hover:bg-white/5 transition-colors duration-300"
                  placeholder="What is your project topic"
                  type="text"
                  {...register("projectTopic")}
                />
                <p className="text-xs text-red-500 mt-1">{errors.projectTopic?.message}</p> 
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-4 mt-5">
              <div className="text-[13px] lg:text-[15px] w-full group">
                <label className="mb-2 block font-medium">Category</label>
                <select
                  className="input-border px-4 bg-transparent hover:bg-white/5 transition-colors duration-300 cursor-pointer"
                  name=""
                  id=""
                  {...register("category")}
                >
                  <option value="" selected disabled className="bg-customPurple-darker">
                    Select your category
                  </option>
                  <option value="category1" className="bg-customPurple-darker">
                    category 1
                  </option>
                </select>
                <p className="text-xs text-red-500 mt-1">{errors.category?.message}</p> 

              </div>
              <div className="w-full text-[13px] lg:text-[15px] group">
                <label className="mb-2 block font-medium">Group Size</label>
                <select
                  className="input-border px-4 bg-transparent hover:bg-white/5 transition-colors duration-300 cursor-pointer"
                  name=""
                  id=""
                  {...register("groupSize")}

                >
                  <optgroup className="text-sm bg-customPurple-darker">
                    <option value="" selected disabled>
                      Select
                    </option>
                    <option value="test" >
                      Test
                    </option>
                  </optgroup>
                </select>
                <p className="text-xs text-red-500 mt-1">{errors.groupSize?.message}</p> 

              </div>
            </div>
            <div className="mt-3">
              <p className="text-customPurple-light text-[9px] lg:text-[11px]">
                <i>Please review your registration details before submitting</i>
              </p>
              <div className="flex-col gap-2 mt-3">
                <div className="flex gap-2">
                  <input 
                  className="w-3 h-3" 
                  type="checkbox"
                  {...register("agree")}
                  />
                  <p className="text-[10px] lg:text-xs w-full tracking-[0.025em]">
                    I agreed with the event terms and conditions and privacy policy
                  </p>
                </div>
                <p className="text-xs text-red-500 mt-4">{errors.agree?.message}</p> 
              </div>
            </div>
            <div className="text-center w-full mt-4">
              <button className="button hidden lg:block font-bold w-full py-[18px]">Register Now</button>
              <button className="button py-[18px] w-44 lg:hidden">Submit</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Registration;
