import React, { useEffect, useState } from "react";

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
    <div>
      <h1>{title}</h1>
      <h1>{des}</h1>
      <h1>{date}</h1>
      <img src={img} alt="" srcset="" />
    </div>
  );
};

export default EventPage;
