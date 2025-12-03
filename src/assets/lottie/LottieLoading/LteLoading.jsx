import React from "react";
import Lottie from "lottie-react";
import loading from "../loading.json";

const LteLoading = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <Lottie
        animationData={loading}
        loop
        autoplay
        className="
          w-[60%]          /* Mobile */
          sm:w-[50%]       /* Small screens */
          md:w-[35%]       /* Tablets */
          lg:w-[30%]       /* Laptops */
          xl:w-[25%]       /* Large screens */
          max-w-[400px]    /* Hard size limit */
          h-auto
        "
      />
    </div>
  );
};

export default LteLoading;
