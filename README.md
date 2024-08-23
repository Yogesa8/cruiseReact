# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


echo "# cruiseReact" >> README.md
git init
git add .
git status
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YoYogesh8198/cruiseReact.git
git push -u origin main





import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Functional Carousel component
const Carousel = ({ items, active }) => {
  const [currentIndex, setCurrentIndex] = useState(active);
  const [direction, setDirection] = useState("");

  const moveLeft = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + items.length) % items.length
    );
  };

  const moveRight = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const generateItems = () => {
    let itemsToShow = [];
    for (let i = currentIndex - 2; i <= currentIndex + 2; i++) {
      let index = (i + items.length) % items.length;
      let level = currentIndex - i;
      itemsToShow.push({ key: index, id: items[index], level });
    }
    return itemsToShow;
  };

  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <i className="fi-arrow-left" />
      </div>
      <TransitionGroup className="carousel-items">
        {generateItems().map((item) => (
          <CSSTransition
            key={item.key}
            classNames={direction}
            timeout={500}
          >
            <div className={`item level${item.level}`}>
              {item.id}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="arrow arrow-right" onClick={moveRight}>
        <i className="fi-arrow-right" />
      </div>
    </div>
  );
};

// Main BestPlace functional component
const BestPlace = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return <Carousel items={items} active={0} />;
};

// Export BestPlace component
export default BestPlace;

// Render the component
createRoot(document.getElementById("app")).render(<BestPlace />);
