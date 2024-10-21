import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import leftFlare from "../../assets/contactFlare2.svg"
import rightFlare from "../../assets/contactFlare1.svg"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  teamsName: yup.string().required("Please enter the team's name"),
  topic: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  message: yup.string().required("This field is required"),
});

const secondSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  mail: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  message: yup.string().required("This field is required"),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const {
    register: secondRegister,
    handleSubmit: secondHandleSubmit,
    formState: { errors:secondErrors },
  } = useForm({
    resolver: yupResolver(secondSchema),
  });



  const onSubmit = (data) => {
    console.log(data);
    console.log("form submitted"); // Handle form data
  };

  const onSecondSubmit = () => {
    console.log(data);
    console.log("second form submitted")
  }

  return (
    <div className="font-montserrat ">
      <div className="grid gap-10 place-items-center text-left px-16 md:hidden">
        <div className="w-full ">
          <p className="text-xl leading-6 text-customPurple font-clashDisplay mt-10">
            Questions or need <br />
            assistance? <br />
            Let us know about it
          </p>
          <p className="text-xs mt-8">
            Email us below to any question related <br />
            to our event
          </p>
        </div>
        <div className="w-full text-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 w-full"
            action=""
          >
            <div className="text-left">
              <input
                className="input-border px-6 text-base placeholder-white"
                placeholder="Team's Name"
                type="text"
                {...register("teamsName")}
              />
              <p className="text-xs text-red-500">{errors.teamsName?.message}</p>
            </div>

            <div className="text-left">
              <input
                className="input-border px-6 placeholder-white"
                placeholder="Topic"
                type="text"
                {...register("topic")}
              />
              <p className="text-xs text-red-500">{errors.topic?.message}</p>
            </div>

            <div className="text-left">
              <input
                className="input-border px-6 placeholder-white"
                placeholder="Email"
                type="email"
                {...register("email")}
              />
              <p className="text-xs text-red-500">{errors.email?.message}</p>
            </div>

            <div className="text-left">
              <textarea
                className="input-border h-40 px-6 pt-4 align-text-top placeholder-white"
                placeholder="Message"
                type="text"
                {...register("message")}
              />
              <p className="text-xs text-red-500">{errors.message?.message}</p>
            </div>

            <div className="w-full">
              <button className="button w-44 py-[18px]">Submit</button>
            </div>
          </form>
        </div>
        <div className="text-center flex flex-col gap-4 ">
          <p className="text-customPurple text-xs">Share on</p>
          <div className="flex gap-2 text-sm">
            <FaInstagram />
            <FaXTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="">

      </div>
        <img className="absolute opacity-70 bottom-0 right-0 hidden md:block" src={leftFlare} alt="flare" />
      <div className="hidden md:grid md:grid-cols-2 md:h-screen md:px-10 py-32 lg:px-20">
        <div className="grid grid-cols-1">
          <img className="absolute opacity-70 left-0 top-0" src={rightFlare} alt="flare" />
          <div className="text-sm grid grid-cols-1 gap-4 h-3/6 mt-10">
            <h3 className="text-customPurple font-clashDisplay text-[28px] font-semibold lg:text-4xl xl:text-5xl">Get in touch</h3>
            <p className="lg:text-base xl:text-lg">Contact <br /> Information</p>
            <p className="lg:text-base xl:text-lg">27,Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
            <p className="lg:text-base xl:text-lg">Call Us : 07067981819</p>
            <p className="lg:text-base xl:text-lg">We are open from Monday-Friday <br /> 08:00am - 05:00pm</p>
            <div className="text-left flex flex-col gap-2">
              <p className="text-customPurple lg:text-base xl:text-lg">Share on</p>
              <div className="flex gap-2 text-sm lg:text-base xl:text-xl">
                <FaInstagram />
                <FaXTwitter />
                <FaFacebookF />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <form action="" onSubmit={secondHandleSubmit(onSecondSubmit)}>
            <div className="grid grid-cols-1 gap-6 p-4 bg-white/10 backdrop-blur-lg shadow-2xl rounded-lg">
              <header className="text-customPurple font-clashDisplay font-semibold text-xl lg:text-2xl xl:text-3xl">
                Questions or need assistance? <br /> Let us know about it!
              </header>
              <div>
                <input 
                className="input-border px-8 bg-transparent" 
                type="text" 
                placeholder="First Name" 
                {...secondRegister("firstName")}
                />
                <p className="text-xs text-red-500">{secondErrors.firstName?.message}</p>
              </div>

              <div>
                <input 
                className="input-border px-8 bg-transparent" 
                type="email" 
                placeholder="Mail" 
                {...secondRegister("mail")}
                />
                <p className="text-xs text-red-500">{secondErrors.mail?.message}</p>
              </div>

              <div>
                <textarea 
                className="input-border px-8 py-4 h-36 bg-transparent" 
                placeholder="Message"
                {...secondRegister("message")}
                ></textarea>
                <p className="text-xs relative bottom-2 text-red-500">{secondErrors.message?.message}</p>
              </div>
              <div className="text-center">
                <button className="button w-[172px] h-[53px] lg:font-semibold lg:w-48 xl:w-52 xl:text-xl">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
