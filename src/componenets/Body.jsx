import React from "react";
import Card from "./Card";


const Body = (props) => {
  //   let courseList = [
  //     { title: "Web Development 0 To 1", subTitle: "HTML, CSS, JS, REACT ",imgLink:"../assets/img/zero2one.png" },
  // { title: "Full Stack DEvelopment", subTitle: "MERN" },
  // { title: "Python", subTitle: "Complete Python" },
  // { title: "DSA", subTitle: "Complete DSA" },
  //   ];

  return (
    <>
      <section className="bg-slate-900 ">
        {/* Quote tag or slogan */}
        <div className=" grid grid-cols-1 text-center p-5">
          <div>
            {/* <blockquote className="font-semibold italic text-center text-slate-50 text-md sm:text-md md:text-xl xl:text-xl">"
                            When you look
                            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block ">
                                <span className="relative text-black"> annoyed </span>
                            </span>
                            all the time, people think that you're busy."
                        </blockquote> */}
          </div>
          <div>
            <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl my-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              HeLLo Folks
            </h1>
          </div>
          <div>
            <h1 className="xl:text-7xl md:text-4xl font-semibold  ">
              <span className="text-slate-50"> Welcome to</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                {" "}
                {props.app_name}
              </span>
            </h1>
          </div>
        </div>
        {/* img & membership btn */}
        <div className="container flex flex-wrap bg-slate-900  ">
          <div className="w-screen  md:w-8/12 ">
            <img
              src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg"
              alt=""
              className="w-100"
            />
          </div>
          <div className=" md:w-4/12 m-auto grid grid-rows-4 grid-flow-col gap-4">
            <h3 className="text-center text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-pink-300 to-yellow-300 ">
              Join us
            </h3>

            <div className="m-auto border-white  hover:font-bold p-3">
              <a
                className="grid-rows-2 transition hover:grid-rows-6 text-white  ease-in delay-50 hover:-translate-y-1 duration-300 p-3 "
                href="https://docs.google.com/forms/d/e/1FAIpQLScbRSjwj7hiFajjwfHex_lLirIiJgbSad-MjKY019jHLnkEjw/viewform"
              >
                Get in Touch
              </a>
            </div>
            <div className="m-auto hover:font-bold pt-3">
              <button className="grid-rows-2  transition hover:grid-rows-6 text-white ">
                Become a Member
              </button>
            </div>
          </div>
        </div>
        {/* project review */}
        <div className="container flex mx-auto bg-slate-900 ">
          <div className="w-full h-screen">
            <Card img ="../assets/pic_1.png"/>
            
          </div>
        </div>
      </section>

      {/* Programms */}
      <section className="bg-zinc-400">
        <h1 className=" text-center text-4xl md:text-5xl sm:text-4xl font-semibold p-5 mt-10">
          Ambassador Program ?
        </h1>
        <div className="grid  container m-auto grid-cols-2 text-center gap-3 p-10">
          <div className="p-3 shadow-slate-500">
            <div className="m-auto border-white p-3">
              <button className="grid-rows-2 transition  text-white ">
                {" "}
                For School
              </button>
            </div>
          </div>
          <div className="p-3 shadow-slate-500">
            <div className="m-auto border-white hover:font-bold p-3">
              <button className="grid-rows-2 transition hover:grid-rows-6 text-white ">
                {" "}
                For Campus
              </button>
            </div>
          </div>
        </div>
      </section>
     </>
  );
};

export default Body;