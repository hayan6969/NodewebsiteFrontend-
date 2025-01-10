import React from "react";
import StayConnected from "./StayConnected";
import CardCarousel from "./ui/CardCarouse";

const tips = [
  "Tailored Node Options: Choose from Founder Nodes for core operations or Support Nodes for specific tasks – designed to meet the diverse needs of our growing ecosystem",
  "Essential Contribution: Your participation keeps the network healthy, scalable, and resilient – ensuring growth for everyone",
  "Boost Reliability: By hosting nodes globally, you enhance system integrity and security, creating a robust, failure-resistant network",
  "Earn Valuable Rewards: Enjoy substantial incentives as a token of our appreciation for your vital contributions to the ASS I AM ecosystem",
];
function Revolution() {
  return (
    <div className=" primary_bg_color text-white p-10 md:p-20">
      <div className="flex items-center flex-col justify-center">
        <h1 className="text-[8vw] font-extrabold unbordered">JOIN THE</h1>
        <h1 className=" capatilize text-[5vw] leading-none font-extrabold">
          Decentralized Revolution
        </h1>
      </div>
      <p className="mt-10 md:mt-20 para">
        At ASS I AM, our decentralized node network ensures smooth and secure
        platform operations, eliminating single points of failure. As a node
        operator, you play a critical role in strengthening transparency,
        security, and performance across the ecosystem.
      </p>
      <h1 className="mt-10 md:mt-20 heading">Why Become a Node Operator?</h1>
      <div className=" mt-10 flex flex-col gap-5">
        {tips.map((element, index) => (
          <p className="para" key={index}>
            {element}
          </p>
        ))}
      </div>
      <h1 className="mt-10 md:mt-20 heading">Your Impact Matters</h1>
      <p className="mt-10 para">
        At ASS I AM, we are building a fair, secure, and community-driven
        ecosystem that empowers creators, users, and contributors. As a node
        operator, you are not just supporting the network– you are actively
        shaping its success. Your efforts will be recognized, rewarded, and felt
        across the platform
      </p>
      <h1 className="mt-10 md:mt-20 heading">Take the Leap – Join Us</h1>
      <p className="mt-10 para">
        This is more than an opportunity; it’s a chance to be part of something
        revolutionary. By operating a node, you’ll help redefine entertainment
        and blockchain technology, while securing your place at the forefront of
        innovation.
      </p>
      <div className="flex items-center justify-center mt-10 md:mt-20">
        <p className="para">
          Be part of the movement. Be part of the future. Join us at ASS I AM
          today
        </p>
      </div>
      
    </div>
  );
}

export default Revolution;
