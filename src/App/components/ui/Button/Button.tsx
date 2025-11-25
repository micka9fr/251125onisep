import type React from "react";
import style from "./Button.module.css";
import { useEffect, useState } from "react";

interface IButtonProps {
  color?: string;
  type?: "reset"|"submit"|"button";
  children: React.ReactNode | string | Array<React.ReactElement | string>;
  onButtonClick: ()=>void;    
}

const Button = ({ children, color, type = "button", onButtonClick }: IButtonProps) => {
  
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isClicked) { 
        setIsClicked(false)
      }
    }, 250);
  
  }, [isClicked])
  
  return (
    <button 
      type={ type } 
      style={{ backgroundColor: color }} 
      className={style.Button+(isClicked?' '+style.clicked:'')}
      onClick={()=>{
        onButtonClick();        
        setIsClicked(true);
      }}>
      {children}
    </button>
  );
};

export default Button;
