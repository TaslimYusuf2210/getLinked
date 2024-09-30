import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
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
    <div className="font-montserrat grid gap-10 place-items-center text-left px-16">
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
  );
}

export default Contact;
