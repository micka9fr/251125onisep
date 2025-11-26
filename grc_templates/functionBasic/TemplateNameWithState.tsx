import React from 'react';
import styles from './TemplateName.module.css';
import { useEffect, useState } from "react";

interface ITemplateNameProps {}

const TemplateName: React.FC<TemplateNameProps> = (props) => {

  const [state, setState] = useState(false);
  
  useEffect(() => {
    // code here
  
  }, [state])


  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
}

export default TemplateName;
