import React, { FC, ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { ViewProps } from "wiloke-react-core";
import "./CustomIframe.css"
export interface SectionProps {
  src: string;
}

const CustomIframe: FC<SectionProps> = ({ src}) => {
  return (
    <div style={{paddingTop: 100}}>
      <iframe src={src}/>
    </div>
  );
};

export default CustomIframe;
