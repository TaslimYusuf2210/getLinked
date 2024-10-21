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
    <div className="font-montserrat py-6 px-14 md:text-left lg:grid lg:grid-cols-2 lg:place-items-center lg:px-20 lg:py-28 ">
      <img className="hidden lg:block absolute z-0 bottom-0 right-0" src={leftFlare} alt="flare" />
      <img className=" hidden lg:block absolute z-0 top-0 left-0" src={rightFlare} alt="flare" />
      <div className="hidden w-full lg:grid place-items-start mr-40">
      <img className="w-full z-10 " src={designer} alt="designer" />
      </div>
      <div className=" lg:bg-white/10 lg:backdrop-blur-lg lg:shadow-2xl lg:rounded-lg lg:w-full">
      <div className="lg:mx-6 lg:my-8">
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
            <div className="w-full grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
              <div className="w-full text-[13px] lg:text-[15px]">
                <label htmlFor="">Team's Name</label>
                <input
                  className="input-border text-[14px] px-6"
                  placeholder="Enter the name of your group"
                  type="text"
                  {...register("teamsName")}
                />
                <p className="text-xs text-red-500">{errors.teamsName?.message}</p>
              </div>
              <div className="w-full text-[13px] lg:text-[15px]">
                <label htmlFor="">Phone</label>
                <input
                  className="input-border text-[14px] px-6"
                  placeholder="Enter your phone number"
                  type="number"
                  {...register("phoneNumber")}
                />
                <p className="text-xs text-red-500">{errors.phoneNumber?.message}</p>
              </div>
              <div className="w-full text-[13px] lg:text-[15px]">
                <label htmlFor="">Email Address</label>
                <input
                  className="input-border text-[14px] px-6"
                  placeholder="Enter your email address"
                  type="text"
                  {...register("emailAddress")}
                />
                <p className="text-xs text-red-500">{errors.emailAddress?.message}</p> 
              </div>
              <div className="w-full text-[13px] lg:text-[15px]">
                <label htmlFor="">Project Topic</label>
                <input
                  className="input-border text-[14px] px-6"
                  placeholder="What is your project topic"
                  type="text"
                  {...register("projectTopic")}
                />
                <p className="text-xs text-red-500">{errors.projectTopic?.message}</p> 
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-2 mt-4">
              <div className=" text-[13px] lg:text-[15px] grid grid-col-1 w-full">
                <label htmlFor="">Category</label>
                <select
                  className=" input-border  text-white"
                  name=""
                  id=""
                  {...register("category")}
                >
                  <option value="" selected disabled>
                    Select your category
                  </option>
                  <option value="">
                    category
                  </option>
                </select>
                <p className="text-xs text-red-500">{errors.category?.message}</p> 

              </div>
              <div className="w-full text-[13px] lg:text-[15px] grid grid-col-1">
                <label htmlFor="">Group Size</label>
                <select
                  className="input-border"
                  name=""
                  id=""
                  {...register("groupSize")}

                >
                  <optgroup className="text-sm">
                    <option value="" selected disabled>
                      Select
                    </option>
                    <option value="" >
                      Test
                    </option>
                  </optgroup>
                </select>
                <p className="text-xs text-red-500">{errors.groupSize?.message}</p> 

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
