import React, { useEffect, useState } from "react";
import loading from "../../assets/img/loading.gif";
import done from "../../assets/img/done.gif";

const Modal = ({ dynamicText, handleModal }) => {
  const [img, setImg] = useState(loading);
  const [visibleBtn, setVisibleBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setImg(done);
        setVisibleBtn(true);
    }, 11000);
  }, []);
  return (
    <>
      <div
        className="modal-bg fixed h-screen w-full top-0 left-0 bg-black opacity-60 z-10"
        onClick={handleModal}
      ></div>
      <div className="modal w-[320px] bg-white rounded-[15px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 p-[40px]">
        <img src={img} className="h-[150px] block mx-auto" alt="" />
        <h2 className="text-2xl text-center pt-5 font-bold">{dynamicText}</h2>
        {
            visibleBtn && (
                <button onClick={handleModal} className="btn block w-full bg-[#EA7A82] px-[30px] py-[10px] text-white rounded-[5px] mt-5">
                    Close
                </button>
            )
        }
      </div>
    </>
  );
};

export default Modal;
