import { useState, useEffect } from "react";

const useMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobileStatus = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    updateMobileStatus();

    window.addEventListener("resize", updateMobileStatus);

    return () => {
      window.removeEventListener("resize", updateMobileStatus);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useMobile;
