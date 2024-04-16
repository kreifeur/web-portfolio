import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false); // Add a state to track whether the email has been sent

  const sendEmail = (e) => {
    e.preventDefault();

    if (name !== "" && email !== "" && message !== "") {
      emailjs
        .sendForm(
          "service_kpsa2vz",
          "template_0rmkdjh",
          form.current,
          "QNEUhdOGVk4tFa6WV"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSent(true); // Set the sent state to true when the email is successfully sent
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact" className="w-[100%] min-h-[50vh] pt-[15vh] mb-[10vh] flex flex-col gap-8  ">
      <div className="flex items-center justify-between w-full   sm:flex-row flex-col gap-4 px-5 sm:px-0">
        <div className="sm:w-[30%] bg-gradient-to-r from-white via-gray-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl font-bold w-full">
          Our product we ve created before
        </div>
        <div className="text-gray-500 w-full sm:w-[50%]">
          we have many interesting services with profesional team , that will
          help your work to be better
        </div>
      </div>

      <div className="sm:p-2 p-4 sm:border rounded border-gray-300">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
          <div className="flex justify-between sm:flex-row flex-col gap-8">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="p-2 sm:w-[40%] outline-none bg-black border-b-[3px] border-b-gray-300"
              placeholder="Full Name"
              type="text"
              name="user_name" // Set the name attribute
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="p-2 sm:w-[40%] outline-none bg-black border-b-[3px] border-b-gray-300"
              placeholder="Email"
              type="email"
              name="user_email" // Set the name attribute
            />
          </div>

          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="p-2 outline-none rounded border-l border-l-[10px] border-l-gray-300 text-black"
            placeholder="The message content..."
            name="message" // Set the name attribute
            cols="30"
            rows="10"
          ></textarea>
          <input
            className="cursor-pointer rounded p-2 border-[2px] text-gray-300 border-gray-300 font-bold w-[200px]"
            type="submit"
            value="Send message"
          />
        </form>
      </div>
      {sent && <div className="text-green-500">Email sent successfully!</div>}
    </div>
  );
};

export default Contact;
