import React, { useEffect, useState } from "react";
import "../App.css";
import { data } from "../utils/data";
import { account } from "../utils/appwrite";

const EventPage = () => {
  const [ngoname, setNgoname] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
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
      setDes(item.des);
      setImg(item.img);
      setNgoname(item.ngoname);
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

        sendEmail(receiverEmail);
        console.log("User email:", receiverEmail);
      })
      .catch((error) => {
        console.error("Error retrieving user data:", error);
      });
  };
  return (
    <>
      <div className="p-10 h-screen back">
        <h1 className="text-3xl md:text-5xl font-[700]">{title}</h1>
        <div className="flex gap-1 pt-4">
          <img
            src="https://secure.meetupstatic.com/next/images/design-system-icons/menu-network-event-outline.svg?w=48"
            alt=""
          />
          <h1>Pragati NGO, Pune</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4">
            <img src={img} alt={title} className="mb-4 rounded-md w-full" />
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-1 rounded mt-3">
              RSVP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
