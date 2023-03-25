import React from 'react'
import './ButtonsSliders.css'

export default function ButtonsSlider({
  sliderIndex,
  setSliderIndex,
  maxSliders = 3,
}) {
  return (
    <>
      <div className="container-buttons-pagination">
        <button
          className="scroll-button-left"
          onClick={() => {
            if (sliderIndex > 0) {
              setSliderIndex((prevIndex) => prevIndex - 1);
            }
          }}
        >
          &#8249;
        </button>
        <button
          className="scroll-button-right"
          onClick={() => {
            if (sliderIndex < maxSliders) {
              setSliderIndex((prevIndex) => prevIndex + 1);
            }
          }}
        >
          &#8250;
        </button>
      </div>
    </>
  );
}
