import React, { useEffect } from "react";
// import house from '../assets/img/house.svg'
import umbrella from "../assets/img/umbrella.gif";
import analyzing from "../assets/img/analyzing.gif";
import result from "../assets/img/result.gif";
import logo from "../assets/img/logo.webp";
import Modal from "../components/modal";

const MainPage = () => {
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [imageToShow, setImageToShow] = React.useState(umbrella);
  const [isClicked, setIsClicked] = React.useState(false);
  const [dynamicText, setDynamicText] = React.useState("");
  const [modalClosable, setModalClosable] = React.useState(false);

  useEffect(() => {
    // get location name
    const getLocation = async () => {
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${currentLocation?.lat}&longitude=${currentLocation?.lng}&localityLanguage=en`
      );
      const data = await res.json();
      console.log(data);
      setCurrentLocation({city: data.city, locality: data.locality});
    };

    // get current location
    getLocation();
  }, [currentLocation?.lat, currentLocation?.lng]);

  const handleAnalyzing = () => {
    setImageToShow(analyzing);
    setDynamicText("Getting Your Location...");
    setIsClicked(true);
    setTimeout(() => {
      setDynamicText("Gathering Data...");
    }, 3000);
    setTimeout(() => {
      setDynamicText("Analyzing Condition...");
    }, 7000);
    setTimeout(() => {
      setDynamicText("Making The Result...");
    }, 9000);
    setTimeout(() => {
      setImageToShow(result);
      setDynamicText("I Don't Know! Go and Look Outside 😒😒");
      setModalClosable(true);
    }, 11000);
  }

  const handleModal = () => {
    if(modalClosable) {
      setIsClicked(false);
      setImageToShow(umbrella);
      setDynamicText("");
    }
  }
  return (
    <div className="main-page">
      <div className="wrapper">
        <div className="card bg-[#000] p-[40px] rounded-[15px] md:w-2/3 flex justify-between items-center gap-[40px] md:flex-row flex-col">
          <div className="md:w-1/2 h-full bg-[#4f5764] p-[40px] rounded-[15px] flex justify-center items-center">
            <img src={imageToShow} className="h-[400px]" alt="" />
          </div>
          <div className="md:w-1/2 h-full p-[40px] rounded-[15px] flex flex-col justify-center items-center">
            <img src={logo} className="w-[100px] mb-8" alt="" />

            {currentLocation && (
              <h1 className="text-[#fff] text-[30px] font-bold mb-8">
                {currentLocation.locality} | {currentLocation.city}
              </h1>
            )}

            {
              isClicked && <Modal dynamicText={dynamicText} handleModal={handleModal} />
            }
            
            <button onClick={handleAnalyzing} className="btn bg-[#EA7A82] px-[30px] py-[10px] text-white rounded-[5px]">
              Analyze The Weather
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
