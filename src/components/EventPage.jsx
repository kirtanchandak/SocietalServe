import React, { useEffect, useState } from "react";
import "../App.css";
import { data } from "../utils/data";
import { BiTimeFive } from "react-icons/bi";
import { account } from "../utils/appwrite";
import sendEmail from "../utils/sendmail";

const EventPage = () => {
  const [RSVPbtntxt, setRSVPbtntxt] = useState("RSVP Now");
  const [img, setImg] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [ngo, setNgo] = useState("");
  const [ngoLogo, setNgoLogo] = useState("");
  const [detailedDes, setDetailedDes] = useState("");

  useEffect(() => {
    var url = window.location.href;
    url = url.split("/").pop();
    console.log(url);
    const targetId = parseInt(url);
    const item = data.find((event) => event.id === targetId);
    if (item) {
      setDate(item.date);
      setImg(item.img);
      setTitle(item.title);
      setNgo(item.ngo);
      setNgoLogo(item.ngologo);
      setDetailedDes(item.detailedDes);
    }
  }, []);
  const handleSendEmail = () => {
    account
      .get()
      .then((response) => {
        const receiverEmail = response.email;
        // sendEmail(receiverEmail);
        setRSVPbtntxt("You've Succesfully RSVP'ed");
        setIsButtonDisabled(true);
        console.log("User email:", receiverEmail);
      })
      .catch((error) => {
        console.error("Error retrieving user data:", error);
      });
  };
  return (
    <>
      <div className="ml-4 py-4 border-b">
        <h1 className="text-3xl md:text-5xl font-[700]">{title}</h1>
        <div className="flex gap-3 pt-4">
          <img src={ngoLogo} alt="ngologo" className="w-10" />
          <h1 className="mt-1">{ngo}, Pune</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4">
            <img src={img} alt="img" className="mb-4 rounded-md w-full" />
          </div>
          <div className="md:w-3/4 md:pl-8">
            <h2 className="lg:text-5xl font-[700] hidden">{title}</h2>
            <div className="text-sm w-72">
              <div className="px-2 py-3 sm:pb-4.5 lg:py-5 bg-white lg:rounded-t-2xl lg:rounded-b-2xl border-b">
                <div>
                  <div className="flex">
                    <div>
                      <BiTimeFive size="20px" className="mt-2" />
                    </div>
                    <div className="pl-4 md:pl-4.5 lg-pl-5 mt-2">{date}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <h1 className="text-xl font-semibold">Details:</h1>
              <p className="text-gray-600 mt-3 font-medium">{detailedDes}</p>
            </div>
            <button
              onClick={handleSendEmail}
              disabled={isButtonDisabled}
              className="bg-blue-500 disabled:bg-slate-300 disabled:text-black hover:bg-blue-700 text-white font-semibold px-4 py-1 rounded mt-3"
            >
              {RSVPbtntxt}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
