"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thanks for contacting us! We will get back to you soon");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };
  return (
    <section
      id="contact"
      className="relative flex flex-wrap lg:h-screen lg:items-center"
    >
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg">
          <h1 className="text-2xl font-bold sm:text-3xl">Get in Touch</h1>
          <p className="mt-4 text-gray-500">
            Fill out the form to send us a message.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Phone Number"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                rows={4}
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex text-xl items-center gap-4 rounded-lg w-[50%] bg-primary px-5 py-3 font-serif font-medium text-white"
            >
              Message us <Send />
            </button>
          </form>
        </div>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Contact;
