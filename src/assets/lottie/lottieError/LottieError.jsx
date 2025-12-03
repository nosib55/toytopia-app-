import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../Error404.json";

const LottieError = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Lottie
        animationData={errorAnimation}
        loop
        autoplay
        className="
          w-[70%]          /* Mobile */ 
          sm:w-[60%]       /* Small screens */
          md:w-[45%]       /* Tablets */
          lg:w-[35%]       /* Laptops */
          xl:w-[30%]       /* Large screens */
          max-w-[500px]    /* Hard limit */
          h-auto
        "
      />
    </div>
  );
};

export default LottieError;
