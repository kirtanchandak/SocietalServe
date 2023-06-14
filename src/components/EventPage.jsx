import React, { useEffect, useState } from "react";
import "../App.css";
import { data } from "../utils/data";

const EventPage = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [date, setDate] = useState("");

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
      setTitle(item.title);
    }
  }, []);
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
        <div className="pt-4">
          <p className="font-[500]">{des}</p>
          <p>On: {date}</p>
        </div>
        <img
          src={img}
          className="rounded-md mt-4"
          alt=""
          height="100%"
          width="100%"
        />
        <button className="bg-[#576CBC] btn rounded-md text-white mt-3">
          Join Now
        </button>
      </div>
    </>
  );
};

export default EventPage;
