import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    if (name != "" && email != "" && message != "") {
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
    <div id="contact" className=" w-[100%] min-h-[50vh] pt-[15vh] mb-2">
      <div className="sm:p-2 p-4 sm:border rounded border-purple-300">
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="flex flex-col gap-2"
        >
          <div className="flex justify-between sm:flex-row flex-col gap-8">
            <input
            onChange={(e) => setName(e.target.value)}
            value={name}
              className="p-2 sm:w-[40%] outline-none bg-black border-b-[3px] border-b-purple-300"
              placeholder="Full Name "
              type="text"
              name=""
              id=""
            />
            <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
              className="p-2 sm:w-[40%] outline-none bg-black border-b-[3px] border-b-purple-300"
              placeholder="Email "
              type="email"
              name=""
              id=""
            />
          </div>

          <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
            className="p-2 outline-none  rounded  border-l border-l-[10px] border-l-purple-300 text-black"
            placeholder="The message content ..."
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input
            className="cursor-pointer rounded p-2 border-[2px] text-purple-300 border-purple-300 font-bold w-[200px] "
            type="submit"
            value="Send message"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
