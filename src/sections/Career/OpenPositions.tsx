import { XIcon } from "lucide-react";
import { ChangeEvent, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const openPositions = [
  {
    title: "Sales",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Marketing",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Planning",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Management",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Operations",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];

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

const qualificationOptions = [
  "Diploma",
  "Under Graduate",
  "Graduate",
  "Post Graduate",
  "Other",
];

const experienceOptions = [
  "Less than 1 year",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "More than 10 years",
];

const OpenPositions = () => {
  const [fileText, setFileText] = useState<string>("No file chosen");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qualification, setQualification] = useState<string>("");
  const [experience, setExperience] = useState<string>("");

  const toggleModal = () => {
    console.log("Toggle modal clicked, new state:", !isModalOpen); // Debug
    setIsModalOpen(!isModalOpen);
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
    console.log("Form submitted");
    setIsModalOpen(false);
  };

  return (
    <div className="relative py-12 px-8 md:px-28 bg-transparent min-h-[400px]">
      {/* Brand Pattern */}
      <img
        src="/gaikwad-pattern-1.png" // Verify path
        alt="Pattern Overlay"
        className="absolute inset-0 w-full h-full object-contain z-0 opacity-50 sm:opacity-40 md:opacity-30"
      />
      {/* Content Wrapper */}
      <div className="relative z-10">
        <h2 className="text-xl md:text-3xl uppercase text-center font-semibold pt-6">
          Open Positions
        </h2>
        <div className="my-12">
          {openPositions.map((position, index) => (
            <div
              key={index}
              className="border-b border-zinc-500 py-6 md:py-0 md:pt-7.5 flex md:justify-between"
            >
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-xl md:text-2xl">{position.title}</h2>
                <p className="text-zinc-500 pr-10">{position.description}</p>
              </div>
              <button
                onClick={toggleModal}
                className="text-white text-nowrap text-sm md:text-lg bg-[#E74238] my-5 px-4 md:px-5.5 md:py-3 rounded-full z-10 relative"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
        {/* Popup Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative bg-[#24343B] text-white rounded-lg w-80 md:w-120 max-h-[95vh] md:max-h-[97vh] lg:w-[90vw] overflow-y-auto p-6 lg:px-22">
              <div className="flex justify-end">
                <XIcon
                  className="cursor-pointer size-8"
                  strokeWidth={1}
                  onClick={toggleModal}
                />
              </div>
              <div className="px-4 lg:grid grid-cols-2 gap-8">
                {sidePanelForm.map((field, index) => {
                  if (field === "Qualification") {
                    return (
                      <Select
                        key={index}
                        onValueChange={setQualification}
                        value={qualification || ""}
                      >
                        <SelectTrigger className="border-b text-sm md:text-2xl lg:text-xl py-2 md:py-3 md:mb-5 md:pb-7 md:mt-4 mb-4 w-full text-white bg-transparent">
                          <SelectValue placeholder="Select Qualification" />
                        </SelectTrigger>
                        <SelectContent className="bg-black text-white border-zinc-500">
                          {qualificationOptions.map((option, idx) => (
                            <SelectItem key={idx} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    );
                  } else if (field === "Experience") {
                    return (
                      <Select
                        key={index}
                        onValueChange={setExperience}
                        value={experience || ""}
                      >
                        <SelectTrigger className="border-b text-sm md:text-2xl lg:text-xl py-2 mb-4 md:py-3 md:mb-5 md:pb-7 md:mt-7 lg:mt-4 w-full text-white bg-transparent">
                          <SelectValue placeholder="Select Experience" />
                        </SelectTrigger>
                        <SelectContent className="bg-black text-white border-zinc-500">
                          {experienceOptions.map((option, idx) => (
                            <SelectItem key={idx} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    );
                  } else {
                    return (
                      <input
                        key={index}
                        type="text"
                        placeholder={field}
                        className="border-b text-sm md:text-xl lg:text-lg py-2 md:py-3 mb-4 md:mb-5 outline-none w-full text-white bg-transparent"
                      />
                    );
                  }
                })}
              </div>
              <div className="flex gap-6 pt-3">
                <h2 className="text-sm md:text-xl text-zinc-400 ml-4">Upload Files</h2>
                <div className="flex flex-col items-center gap-2">
                  <label className="relative">
                    <input
                      type="file"
                      multiple
                      className="opacity-0 absolute w-0 h-0"
                      onChange={handleFileChange}
                    />
                    <span className="inline-block bg-white text-black px-3 py-2 md:px-4 md:py-3 rounded-full text-xs md:text-xl cursor-pointer hover:bg-gray-100">
                      Choose Files
                    </span>
                  </label>
                  <span className="text-xs md:text-lg text-zinc-400">{fileText}</span>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-5 md:ml-5">
                <input type="checkbox" name="" id="" className="mt-0.5 md:mt-2" />
                <p className="text-[10px] md:text-lg">
                  Check this box if you have prior experience working in Real-Estate.
                </p>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-[#E74238] text-sm mx-auto block px-3 py-2 rounded-full mt-8"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenPositions;