import React, { Fragment, useEffect, useState } from "react";
import CountDown from "./CountDown";
const Landing = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, [observer]);

  return (
    <Fragment>
      <section className="landing">
        <div className="circle circle-1"></div>
        <div className="circle circle-2 hide-sm"></div>
        <div className="logo">
          <div className="logo-img"></div>
          <svg
            id="rectangle-blue"
            viewBox="0 0 237 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="100.022"
              height="378.108"
              rx="50"
              transform="matrix(0.902098 0.43153 -0.482048 0.876145 164.266 -15.9815)"
              fill="#005BFF"
              fillOpacity="0.3"
            />
          </svg>
          <svg
            id="rectangle-orange"
            viewBox="0 0 237 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="100.022"
              height="378.108"
              rx="50"
              transform="matrix(0.902098 0.43153 -0.482048 0.876145 164.808 -15.9815)"
              fill="#E05BF4"
              fillOpacity="0.3"
            />
          </svg>
          <svg
            id="rectangle-light-blue"
            viewBox="0 0 237 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="100.022"
              height="378.108"
              rx="50"
              transform="matrix(0.902098 0.43153 -0.482048 0.876145 164.724 -15.9815)"
              fill="#00FFF2"
              fillOpacity="0.3"
            />
          </svg>
        </div>
      
          <CountDown/>
       
          
       
      </section>
      <section className="about ">
        <div className="custom-shape-divider-top-1679898776">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="about-content">
          <h1 className="vertical-header text-border-blue hidden bottom">
            What is
            <br />
            Uxplore?
          </h1>
          <div className="hidden right">
            <h2>What is Uxplore</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              temporibus dolores non magnam ad ex beatae delectus iste
              recusandae reprehenderit voluptates adipisci mollitia autem totam
              aut quisquam! Fugit voluptatum accusantium, iure qui
              exercitationem quaerat cupiditate aliquam nulla veritatis quasi
              maiores sapiente necessitatibus libero corporis? Unde ut
              accusantium tenetur voluptatibus iure deserunt est distinctio,
              consequuntur nesciunt iste itaque, harum, eaque et obcaecati ipsa
              voluptates nam beatae. Pariatur quisquam eius rerum vel recusandae
              doloribus sit similique iusto iste. Iure ratione illum officia
              voluptas unde maiores laboriosam dolore sequi, cupiditate sunt
              distinctio, corporis assumenda est suscipit molestiae? Eos tempora
              recusandae sunt quaerat ipsam!
            </p>
          </div>
        </div>
      </section>
      <section className="guidlines text-primary">
        <div>
          <h2 className="hidden top">guidlines</h2>
          <ul className="hidden left">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
              nisi?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
              nisi?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
              nisi?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
              nisi?
            </li>
          </ul>
        </div>
        <h1 className="vertical-header text-border-gradient hidden top">
          guidlines
        </h1>
      </section>
    </Fragment>
  );
};

export default Landing;
