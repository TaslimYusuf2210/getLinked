import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Glow from "../../components/Glow";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from "../../hooks/use-toast";

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
  const { toast } = useToast();
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
    toast({
      title: "Message Sent!",
      description: "Your message has been sent successfully.",
    });
  };

  const onSecondSubmit = (data) => {
    console.log(data);
    console.log("second form submitted")
    toast({
      title: "Message Sent!",
      description: "Your message has been sent successfully.",
    });
  }

  return (
    <div id="contact" className="font-montserrat relative min-h-screen pb-10 overflow-hidden">
      {/* <div className="w-full flex justify-center items-center"> */}
        <div className="grid gap-10 place-items-center text-left sm:px-16 px-6 md:hidden">
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
          <div className="w-full text-center mt-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-6 w-full bg-white/5 backdrop-blur-md border border-white/10 px-3 py-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,52,254,0.15)] hover:-translate-y-1"
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
      {/* </div> */}
      
      <Glow size="lg" className="bottom-[-10%] right-[-10%] opacity-70" />

      <div className="hidden md:grid md:grid-cols-2 md:min-h-[calc(100vh-120px)] items-center md:px-10 py-16 lg:px-16 z-10 relative">
        <div className="grid grid-cols-1">
          <Glow size="lg" className="-left-[10%] -top-[10%] opacity-70" />
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
            <div className="grid grid-cols-1 gap-6 p-8 lg:p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(212,52,254,0.1)] rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,52,254,0.2)] hover:-translate-y-2">
              <header className="text-customPurple font-clashDisplay font-semibold text-xl lg:text-2xl xl:text-3xl mb-4">
                Questions or need assistance? <br /> Let us know about it!
              </header>
              <div className="group">
                <input 
                className="input-border px-8 bg-transparent hover:bg-white/5 transition-colors duration-300" 
                type="text" 
                placeholder="First Name" 
                {...secondRegister("firstName")}
                />
                <p className="text-xs text-red-500 mt-1">{secondErrors.firstName?.message}</p>
              </div>

              <div className="group">
                <input 
                className="input-border px-8 bg-transparent hover:bg-white/5 transition-colors duration-300" 
                type="email" 
                placeholder="Mail" 
                {...secondRegister("mail")}
                />
                <p className="text-xs text-red-500 mt-1">{secondErrors.mail?.message}</p>
              </div>

              <div className="group">
                <textarea 
                className="input-border px-8 py-4 h-36 bg-transparent hover:bg-white/5 transition-colors duration-300 resize-none" 
                placeholder="Message"
                {...secondRegister("message")}
                ></textarea>
                <p className="text-xs text-red-500 mt-1">{secondErrors.message?.message}</p>
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
