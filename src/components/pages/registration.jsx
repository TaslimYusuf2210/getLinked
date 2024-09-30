import movement from "../../assets/movement.svg";
import designer from "../../assets/designer.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    <div className="font-montserrat py-6 px-16">
      <div className="text-left">
        <h6 className="text-customPurple font-clashDisplay font-bold">
          Register
        </h6>
      </div>
      <div className="grid place-items-center pt-8">
        <img src={designer} alt="designer" />
        <img src={movement} alt="movement" />
      </div>
      <div className="w-full">
        <h2 className="text-xl w-full tracking-[0.015em]">
          CREATE YOUR ACCOUNT
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="w-full grid grid-cols-1 gap-4 mt-4">
            <div className="w-full text-[13px]">
              <label htmlFor="">Team's Name</label>
              <input
                className="input-border text-[14px] px-6"
                placeholder="Enter the name of your group"
                type="text"
                {...register("teamsName")}
              />
              <p className="text-xs text-red-500">{errors.teamsName?.message}</p>
            </div>
            <div className="w-full text-[13px]">
              <label htmlFor="">Phone</label>
              <input
                className="input-border text-[14px] px-6"
                placeholder="Enter your phone number"
                type="number"
                {...register("phoneNumber")}
              />
              <p className="text-xs text-red-500">{errors.phoneNumber?.message}</p>
            </div>
            <div className="w-full text-[13px]">
              <label htmlFor="">Email Address</label>
              <input
                className="input-border text-[14px] px-6"
                placeholder="Enter your email address"
                type="text"
                {...register("emailAddress")}
              />
              <p className="text-xs text-red-500">{errors.emailAddress?.message}</p> 
            </div>
            <div className="w-full text-[13px]">
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
            <div className=" text-[13px] grid grid-col-1 w-full">
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
            <div className="w-full text-[13px] grid grid-col-1">
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
            <p className="text-customPurple-light text-[9px]">
              <i>Please review your registration details before submitting</i>
            </p>
            <div className="flex-col gap-2 mt-3">
              <div className="flex gap-2">
                <input 
                className="w-3 h-3" 
                type="checkbox"
                {...register("agree")}
                />
                <p className="text-[10px] w-full tracking-[0.025em]">
                  I agreed with the event terms and conditions and privacy policy
                </p>
              </div>
              <p className="text-xs text-red-500 mt-4">{errors.agree?.message}</p> 
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
