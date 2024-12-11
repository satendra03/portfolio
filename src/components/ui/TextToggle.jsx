import { cn } from "@/lib/utils";
import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";

function TextToggle({ textTrue, textFalse, className }) {
  const [reality, setReality] = useState(false);
  const toggleReality = () => {
    setReality(!reality);
  };
  return (
    <>
        <p className={cn(`text-4xl md:text-5xl ${reality && "text-gray-400"}`, className)}>{reality ? textTrue : textFalse}

        </p>
        <div
          className={`py-5 flex items-center justify-center text-gray-400`}
        >
          {reality ? <Eye className="hover:cursor-pointer" onClick={toggleReality} /> : <EyeClosed className="hover:cursor-pointer" onClick={toggleReality}/>}
      </div>
    </>
  );
}

export default TextToggle;
