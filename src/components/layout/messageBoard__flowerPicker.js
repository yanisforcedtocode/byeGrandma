// === packages
import { useState, useEffect } from "react";
// === css
import styles from "./../css-modules/messageBoard.module.css";

const FlowerPicker = (props) => {
  // states
  const [isFlowerHovered, setisFlowerHovered] = useState(false)
  const flowerClickHandler = (e) => {
    props.setIsFlowerSelected(Number(e.target.dataset.key))
  };
  const flowerMouseInHandler = (e) => {
    setisFlowerHovered(Number(e.target.dataset.key))
  };
  const flowerMouseOutHandler = () => {
    setisFlowerHovered(false);
  };
  
  // effects
  return (
    <div className={styles.flower__picker__container}>
      <h3 className={styles.flower__picker__title}>請選取及獻上鮮花</h3>
      <div className={styles.flower__picker__grid}>
        {props.images.map((el, ind) => {
          return (
            <div
            className={styles.flower__picker__container__imgWrapper}
              key={ind}
              onClick={flowerClickHandler}
              onMouseEnter={flowerMouseInHandler}
              onMouseLeave={flowerMouseOutHandler}
            >
                <div 
                className={styles.flower__picker__container__imgWrapper__overLay}
                style = {{opacity:`${isFlowerHovered === ind || props.isFlowerSelected === ind?'0%':'100%'}`}}
                data-key={ind}
                ></div>
              <img
                className={styles.flower__picker__container__img}
                src={el}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlowerPicker;
