import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

const PriceBreakup = () => {
  const [view, setView] = useState("dynamic");

  return (
    <div className="bg-[#17262A] text-white bg-[url('/mobile-pattern.png')] bg-[length:510px_510px] bg-repeat bg-bottom flex flex-col items-center justify-center montserrat-regular p-[20px] gap-6">
      <h2 className="text-xl uppercase text-center">Price Breakup</h2>
      {/* Tabs Toggle View */}
      <div className="border w-fit rounded-full">
        <button
          onClick={() => setView("dynamic")}
          className={`px-3 py-2 text-sm rounded-l-full ${
            view === "dynamic" ? "bg-[#E74238]" : "bg-transparent"
          }`}
        >
          Dynamic View
        </button>
        <button
          onClick={() => setView("unified")}
          className={`px-3 py-2 text-sm rounded-r-full ${
            view === "unified" ? "bg-[#E74238]" : "bg-transparent"
          }`}
        >
          Unified View
        </button>
      </div>

      {/* Conditional Rendering */}
      {view === "dynamic" ? (
        <div className="border p-[20px] flex flex-col gap-4 rounded-3xl w-[90%]">
          {/* Tile-1 */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg uppercase font-medium">3bhk optimax</h2>
            <p className="text-sm text-zinc-400">Carpet area: 790sqft</p>
            <p className="text-sm text-zinc-400">Starting from 1.2CR onwards</p>
            <button className="w-full bg-[#E74238] text-white text-xs rounded-full px-3 py-1.5">
              Download Brochure
            </button>
          </div>
          {/* Tile-2 */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg uppercase font-medium">3bhk optimax</h2>
            <p className="text-sm text-zinc-400">Carpet area: 790sqft</p>
            <p className="text-sm text-zinc-400">Starting from 1.2CR onwards</p>
            <button className="w-full bg-[#E74238] text-white text-xs rounded-full px-3 py-1.5">
              Download Brochure
            </button>
          </div>
          {/* Tile-3 */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg uppercase font-medium">3bhk optimax</h2>
            <p className="text-sm text-zinc-400">Carpet area: 790sqft</p>
            <p className="text-sm text-zinc-400">Starting from 1.2CR onwards</p>
            <button className="w-full bg-[#E74238] text-white text-xs rounded-full px-3 py-1.5">
              Download Brochure
            </button>
          </div>
          {/* Tile-4 */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg uppercase font-medium">3bhk optimax</h2>
            <p className="text-sm text-zinc-400">Carpet area: 790sqft</p>
            <p className="text-sm text-zinc-400">Starting from 1.2CR onwards</p>
            <button className="w-full bg-[#E74238] text-white text-xs rounded-full px-3 py-1.5">
              Download Brochure
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Select */}
          <Select>
            <SelectTrigger className="w-[260px] bg-white text-[#E64237]! text-lg border-[1.7px] border-[#E64237] rounded-xl">
              <SelectValue placeholder="OPTIMAX PLUS" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Building</SelectLabel>
                <SelectItem value="apple">OPTIMAX PLUS</SelectItem>
                <SelectItem value="apple">OPTIMAX PLUS</SelectItem>
                <SelectItem value="apple">OPTIMAX PLUS</SelectItem>
                <SelectItem value="apple">OPTIMAX PLUS</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="border p-[20px] flex flex-col gap-4 rounded-3xl w-[90%] bg-white">
            <h2 className="text-[#E64237] text-xl text-center font-medium">
              DESIGNED TO BREATHE
            </h2>
            <p className="text-[#24343B]">
              Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
              turpis porttitor sed cras donec.
            </p>
            {/* Features */}
            <div className="flex gap-4">
              <h2 className="text-sm text-[#24343B] font-semibold">
                3 <span className="italic text-[#E64237] font-normal">BHK</span>
              </h2>
              <h2 className="text-sm border-x-2 text-[#24343B] border-x-red-500 px-3">
                <span className="font-semibold">900</span> sq.ft
              </h2>
              <h2 className="text-sm text-[#24343B]">
                <span className="font-semibold">1.2 Cr</span> onwards
              </h2>
            </div>
            {/* unit plan */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h2 className="text-[#24343B] text-xl font-medium">UNIT PLAN</h2>
                <button className="bg-[#E74238] text-white text-[10px] rounded-full px-2 py-1 mr-3">
                  Price Breakup
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/uniqo-unit-plan.png" alt="" />
                <div className="flex gap-3">
                  <img src="/icons/comp-proj-left-arrow-black.png" alt="" className="w-12"/>
                  <img src="/icons/comp-proj-right-arrow-black.png" alt="" className="w-12"/>
                </div>
              </div>
            </div>
            {/* CTA Buttons */}
            <button className="bg-[#E74238] text-white text-sm rounded-full px-5 py-2 w-fit mx-auto">
              View & Download
            </button>
            <button className="bg-[#E74238] text-white text-sm rounded-full px-3 py-2">
              Download Master PLan & Pricing
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PriceBreakup;
