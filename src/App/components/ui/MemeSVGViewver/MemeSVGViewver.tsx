import React from 'react';
import styles from './MemeSVGViewver.module.css';

interface IMemeSVGViewverProps {}

const MemeSVGViewver: React.FC<MemeSVGViewverProps> = (props) => {
  return (
    <div className={styles.MemeSVGViewver} data-testid="MemeSVGViewver">
      MemeSVGViewver Component
    </div>
  );}

export default MemeSVGViewver;
