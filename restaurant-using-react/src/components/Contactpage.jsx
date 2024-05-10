import React, { useState } from "react";

const Contactpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the server
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          alert("Error sending message");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error sending message");
      });
  };

  return (
    <div className="max-w-[1400px] m-auto px-4">
      {/* <h2>Get In touch</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form> */}
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
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
            <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label for="" className="text-sm">Your name</label>
                </div>
                <div>
                  <input type="text" placeholder="Your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"/>
                </div>
                <div>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
