import React, { useEffect, useState } from "react";
import "../App.css";

const EventPage = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const data = [
      {
        id: 1,
        img: "https://earth5r.org/wp-content/uploads/2020/07/Clean-Up-Drive-Gandhinagar-Mumbai-India-Environmental-NGO-Earth5R.jpg",
        title: "Garbage collection Drive",
        date: "FriDay 9th June 2023 2:15",
        des: "Come Join us for the most beaautiful organisational comittie event :)",
      },
      {
        id: 2,
        img: "https://www.bookeventz.com/blog/wp-content/uploads/2021/02/FI-1.jpg",
        date: "FriDay 9th June 2023 2:15",
        title: "Food Distribution Drive",
        des: "Come Join us for the most beaautiful organisational comittie event :)",
      },
      {
        id: 3,
        img: "https://static.toiimg.com/thumb/msid-68667160,width-400,resizemode-4/68667160.jpg",
        date: "FriDay 9th June 2023 2:15",
        title: "Blood Donation Camp",
        des: "Come Join us for the most beaautiful organisational comittie event :)",
      },
      {
        id: 4,
        img: "https://ratnanidhi.org/userfile/image/Webp%20images/001F.webp",
        date: "FriDay 9th June 2023 2:15",
        title: "Clothes Distribution Drive",
        des: "Come Join us for the most beaautiful organisational comittie event :)",
      },
    ];
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
        <img src={img} className="rounded-md mt-4" alt="" srcset="" />
        <button className="bg-[#576CBC] btn rounded-md text-white mt-3">
          Join Now
        </button>
      </div>
    </>
  );
};

export default EventPage;
