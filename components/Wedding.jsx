import React from "react";
import Image from "next/image";


function Wedding() {
  return (
    <div className="w-full h-fit text-center pt-28 bg-[#7689d8]" id="wedding">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
        <div>
          <Image
            className=""
            src="/assets/twoStates.png"
            alt="logo"
            width="200"
            height="300"
          />
            <p className="uppercase text-sm tracking-widest text-[white]">
                LETS Wedding
            </p>
            <h1 className="py-4 text-[white]">
                okok jhshshshhs
            </h1>
            <h1 className="py-2 text-[white]">
                okok jhshshshhs
            </h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                okokoko okokokok okokokokok okokokokokokok okokokokokok ki am ki i will be a om iwwm
            </p>
        </div>
      </div>
    </div>
  );
}

export default Wedding;
