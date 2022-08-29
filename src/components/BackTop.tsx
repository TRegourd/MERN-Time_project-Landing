import React, { useEffect } from "react";

function BackTop() {
  function scrollFunction() {
    var mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.classList.add("block");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("block");
      }
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <a
      href="#"
      onClick={topFunction}
      id="back-to-top"
      className="back-to-top fixed bottom-10 right-5 z-10 hidden h-9 w-9 rounded-full bg-primary-600 text-center text-lg leading-9 text-white sm:bottom-5"
      aria-label="BackTop Button"
    >
      <i className="mdi mdi-arrow-up"></i>
    </a>
  );
}

export default BackTop;
