const Contact = () => {
  return (
    <div id="contact" className=" w-[100%] min-h-[50vh] pt-[15vh] mb-2">
      <div className="sm:p-2 p-4 sm:border rounded border-purple-300">
        <form action="" className="flex flex-col gap-2">
          <div className="flex justify-between sm:flex-row flex-col gap-8">
            <input className="p-2 sm:w-[40%] outline-none bg-black border-b-[3px] border-b-purple-300" placeholder="Full Name " type="text" name="" id="" />
            <input className="p-2 sm:w-[40%] outline-none bg-black border-b-[3px] border-b-purple-300" placeholder="Email " type="email" name="" id="" />
          </div>

          <textarea
          className="p-2 outline-none  rounded  border-l border-l-[10px] border-l-purple-300 text-black"
            placeholder="The message content ..."
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input className="cursor-pointer rounded p-2 border-[2px] text-purple-300 border-purple-300 font-bold w-[200px] " type="submit" value="Send message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
