import React, { useContext, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import cn from "classnames";

const SelectedSlideContext = React.createContext(0)

const ImageCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSlideChange = (index) => {
    setSelectedIndex(index)
  }

  return (
    <div className="carousel">
      <SelectedSlideContext.Provider value={selectedIndex}>
        <Carousel
          showThumbs={false}
          renderIndicator={renderIndicator}
          showStatus={false}
          showArrows={false}
          onChange={onSlideChange}
          centerMode
          infiniteLoop
          autoPlay
        >
          <Slide imageId="tailor.jpg" index={0}></Slide>
          <Slide imageId="taxi.jpg" index={1}></Slide>
          <Slide imageId="keke.jpg" index={2}></Slide>
        </Carousel>
        <h2>Giving you the opportunity you wish you had</h2>
      </SelectedSlideContext.Provider>
    </div>
  );
};

const renderIndicator = (onClick, isSelected) => {
  return (
    <div
      className={cn("thumb", { "active-thumb": isSelected })}
      onClick={onClick}
    ></div>
  );
};

const Slide = ({ imageId, children = <></>, index }) => {
  const selectedIndex = useContext(SelectedSlideContext)

  const isNotSelected = selectedIndex !== index;

  return (
    <div className={cn("slide", { "unselected-slide": isNotSelected })}>
      <img className="img-slide" src={`/img/${imageId}`} alt="elem" />
      {children}
    </div>
  );
};

export default ImageCarousel;
