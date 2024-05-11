import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

const Contactpage = () => {
  const [state, handleSubmit] = useForm("mqkrjanv");
  if (state.succeeded) {
      // return <p>Thanks for joining!</p>;
      alert('Thanks for showing interest!')
      
  }

  return (
    // <div className="max-w-[1400px] m-auto px-4">

      <div id="contactpage" className="flex w-full ">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full justify-center items-center max-w-screen-xl p-8 sm:p-12  shadow-lg text-white">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking wide">Contact Us</h1>
              <p className="pt-2 text-cyan-100 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, doloremque.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="call"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>+(123) 456 7890</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="mail"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>contact@xyzwebsite.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="location"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>11, Street 342, Abcd fgh</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-100">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm">Your name</label>
                  <input id="name" type="name" name="name" placeholder="Your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">Email Address</label>
                  <input id="email" type="email" name="email" placeholder="Email Address" className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">Message</label>
                  <textarea id="message" name="message" placeholder="Message" rows="4" className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300">
                  </textarea>
                  <ValidationError prefix="message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting} className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                  Send Message
                </button>
                {/* {state.succeeded?<div>Thanks for showing interest!</div>:''} */}
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contactpage;
