import React, { useRef } from "react";
import FontDraggableText from "../ui/FontDraggableText";
import { motion } from "framer-motion";

function Error() {
  const parent = useRef(null);
  return (
    <div
      ref={parent}
      className="h-screen w-screen flex flex-col items-center gap-10 justify-center"
    >
      <motion.div
        drag
        dragConstraints={parent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="error-screen flex items-center p-10 md:p-20 justify-center flex-col shadow-2xl"
      >
        <FontDraggableText words={["Error", "404"]} />
      </motion.div>

      <p className="text-black/50 text-center">
        You can play here! <br /> (Draggable Text){" "}
      </p>
    </div>
  );
}

export default Error;
