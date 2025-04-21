import React from "react";
import Goa from "../../assets/images/Goa.svg";
import Night from "../../assets/images/Night.svg";
import Black from "../../assets/images/Black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Latest() {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      image: Goa,
      date: "Aug 12, 2024",
      title: "Vestibulum Id Dui Consectetur Ullarices.",
      description:
        "Vestibulum id dui consectetur, ullamcorper nec porttitor est sit amet porta ultrices.",
      link: "#",
    },
    {
      id: 2,
      image: Night,
      date: "Aug 12, 2024",
      title: "Vestibulum Id Dui Consectetur Ullarices.",
      description:
        "Vestibulum id dui consectetur, ullamcorper nec porttitor est sit amet porta ultrices.",

      link: "#",
    },
    {
      id: 3,
      image: Black,
      date: "Aug 12, 2024",
      title: "Vestibulum Id Dui Consectetur Ultrices.",
      description:
        "Vestibulum id dui consectetur, ullamcorper nec porttitor est sit amet porta ultrices.",
      link: "#",
    },
  ];

  // Render blog cards without map
  const renderBlogPosts = () => {
    const items = [];

    for (let i = 0; i < blogPosts.length; i++) {
      const post = blogPosts[i];
      items.push(
        <div
          key={post.id}
          className={`bg-white rounded-[3vw] lg:rounded-[1vw] overflow-hidden shadow-md
          ${i > 0 ? "hidden md:block" : "block"}`}
        >
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover "
            />
            <div className="absolute bottom-4 left-4 bg-[#000000]  opacity-[75%] rounded-full  px-3 py-1 md:px-3 md:py-1  text-[3vw] md:text-[0.8vw] font-medium text-white">
              {post.date}
            </div>
          </div>
          <div className="pl-7 md:py-[1.5vw] py-[5vw] flex flex-col   gap-[4vw] md:gap-[0.5vw] ">
            <h3
              className="font-medium  text-[5vw] md:text-[1.2vw] "
              style={{ fontFamily: "Raleway" }}
            >
              {post.title}
            </h3>
            <p className="text-gray-600  md:text-[0.8vw] text-[4.5vw] lg:text-[0.9vw]  md:w-[23vw] ">
              {post.description}
            </p>
            <a
              href={post.link}
              className="relative font-medium text-transparent bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text  text-[3vw] md:text-[1vw] hover:opacity-80 transition-opacity duration-200 underline-offset-2"
            >
              Read More
              <span className="absolute left-0 bottom-0  w-[14.5vw] md:w-[4.9vw] h-[1.5px] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]"></span>
            </a>
          </div>
        </div>
      );
    }

    return items;
  };

  return (
    <div className="  ">
      <div className="flex  flex-col gap-[2vw] items-start mx-[4vw]">
        <div className=" flex  flex-col   md:flex-row items-center justify-between w-full">
          <h2 className=" md:text-[3.5vw] text-[9vw] lg:text-[3.5vw] font-Raleway font-normal  ">
            Latest News & Blog
          </h2>
          <div className="block md:hidden ml-[70vw]">
            <button
              onClick={() => alert("You tapped the arrow!")} // replace with your action
    
              className="w-[8vw] h-[8vw]  mt-3  mb-2 flex items-center justify-center bg-[#ED1C24]/[0.15]
              rounded-full"
            >
              <i className="fa-solid fa-arrow-right text-[#C1645C]   text-[4vw]"></i>
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-6">
          {renderBlogPosts()}
        </div>
      </div>
    </div>
  );
}
