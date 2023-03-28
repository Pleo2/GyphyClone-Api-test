import React, { useCallback } from 'react';
import './ButtonsSliders.css';

export default function ButtonsSlider({
  sliderIndex,
  setSliderIndex,
  maxSliders = 3,
}) {

  const scrollLeft = useCallback(() => {
      if (sliderIndex > 0) {
        setSliderIndex((prev) => prev - 1);
      }
    },
    [setSliderIndex, sliderIndex],
  );

  const scrollRight = useCallback(() => {
      if (sliderIndex < maxSliders) { setSliderIndex((prev) => prev + 1); }
    },
    [setSliderIndex, sliderIndex, maxSliders],
  );

  return (
    <>
        <button
          type='button'
          className="scroll-button-left"
          onClick={scrollLeft}
        >
          &#8249;
        </button>
        <button
          type='button'
          className="scroll-button-right"
          onClick={scrollRight}
        >
          &#8250;
        </button>
    </>
  );
}
