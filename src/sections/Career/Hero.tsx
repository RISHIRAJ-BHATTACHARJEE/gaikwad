import { MenuIcon, XIcon } from "lucide-react";
import React, { ChangeEvent, useState } from "react";

const sidePanelForm = [
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Qualification",
  "Experience",
  "Designation",
  "Current City",
];

const Hero = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [fileText, setFileText] = useState<string>("No file chosen");

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFileText(
        `${files.length} file${files.length > 1 ? "s" : ""} selected`
      );
    } else {
      setFileText("No file chosen");
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // File submission logic
    console.log("Form submitted");
  };

  return (
    <div className="text-white bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/careers-hero.png')] h-screen bg-cover bg-center p-6 flex flex-col items-center justify-between">
      <div className="flex items-center justify-between w-full">
        <img src="/navbar-logo.png" alt="logo" className="w-34" />
        <MenuIcon className="text-white" onClick={togglePanel} />
      </div>
      <div className="flex flex-col items-center justify-between gap-4 pb-12">
        <h2 className="text-3xl font-bold">Work With Us</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
          porttitor sed cras donec. Id ac molestie purus tincidunt in cras.
        </p>
        <button className="primary py-2! font-[500]!">View Jobs</button>
      </div>
      {/* Dropdown Menu */}
      <div
        className={`fixed flex flex-col top-0 right-0 h-full w-64 bg-black text-white transition-transform duration-300 ease-in-out ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <XIcon
            className="cursor-pointer m-3 size-8"
            strokeWidth={1}
            onClick={togglePanel}
          />
        </div>
        <div className="px-6">
          {sidePanelForm.map((field, index) => (
            <input
              key={index}
              type="text"
              placeholder={field}
              className="border-b text-sm py-2 mb-4 outline-none w-full"
            />
          ))}
        </div>
        <div className="flex gap-6 pl-6 pt-3">
          <h2 className="text-sm text-zinc-400">Upload Files</h2>
          <div className="flex flex-col items-center gap-2">
            <label className="relative">
              <input
                type="file"
                multiple
                className="opacity-0 absolute w-0 h-0"
                onChange={handleFileChange}
              />
              <span className="inline-block bg-white text-black px-3 py-2 rounded-full text-xs cursor-pointer hover:bg-gray-100">
                Choose Files
              </span>
            </label>
            <span className="text-xs text-zinc-400">{fileText}</span>
          </div>
        </div>
        <button
          onSubmit={handleSubmit}
          className="bg-[#E74238] text-sm mx-auto px-3 py-2 rounded-full mt-8"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Hero;
