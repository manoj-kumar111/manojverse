import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    
    const folder = "/cursors"; 
    const frameCount = 4; 
    const frames: string[] = [];

    for (let i = 1; i <= frameCount; i++) {
      frames.push(`${folder}/frame${i}.png`);
    }

    let index = 0;
    const fps = 10; 

    const intervalId = setInterval(() => {
      document.body.style.cursor = `url(${frames[index]}), auto`;
      index = (index + 1) % frames.length;
    }, 1000 / fps);

    return () => {
      clearInterval(intervalId);
      document.body.style.cursor = "auto";
    };
  }, []);

  return null;
};

export default CustomCursor;
