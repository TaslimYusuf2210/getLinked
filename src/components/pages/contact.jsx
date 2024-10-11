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

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log("form submitted"); // Handle form data
  };

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
        <img className="absolute opacity-70 left-[175px] top-[20.5%] hidden md:block" src={leftFlare} alt="flare" />
      <div className="hidden md:grid md:grid-cols-2 md:h-screen md:px-10 py-32 ">
        <div className="grid grid-cols-1">
          <img className="absolute opacity-70 right-[25%] bottom-[10%]" src={rightFlare} alt="flare" />
          <div className="text-sm grid grid-cols-1 gap-4 h-3/6 mt-10">
            <h3 className="text-customPurple font-clashDisplay text-[28px] font-semibold">Get in touch</h3>
            <p>Contact <br /> Information</p>
            <p>27,Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
            <p>Call Us : 07067981819</p>
            <p>We are open from Monday-Friday <br /> 08:00am - 05:00pm</p>
            <div className="text-left flex flex-col gap-2">
              <p className="text-customPurple">Share on</p>
              <div className="flex gap-2 text-sm">
                <FaInstagram />
                <FaXTwitter />
                <FaFacebookF />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <form action="">
            <div className="grid grid-cols-1 gap-6 p-4 bg-white/10 backdrop-blur-lg shadow-2xl rounded-lg">
              <header className="text-customPurple font-clashDisplay font-semibold text-xl">
                Questions or need assistance? <br /> Let us know about it!
              </header>
              <input className="input-border px-8 bg-transparent" type="text" placeholder="First Name" />
              <input className="input-border px-8 bg-transparent" type="email" placeholder="Mail" />
              <textarea className="input-border px-8 py-4 h-36 bg-transparent" placeholder="Message"></textarea>
              <div className="text-center">
                <button className="button w-[172px] h-[53px]">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
