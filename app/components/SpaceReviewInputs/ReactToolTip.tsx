import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function CustomTooltip({
  Icon,
  content,
  handleClick,
  className
}: {
  Icon: React.ElementType;
  content: string;
  handleClick:()=>void;
  className:string
}) {
  return (
    <div className="relative">
      <Icon
        className={className}
        data-tooltip-id="infoTooltip"
        data-tooltip-content={content}
        onClick={handleClick}
      />
      <ReactTooltip
        id="infoTooltip"
        place="top"
        style={{ maxWidth: "300px", whiteSpace: "normal" }}
        className="bg-gray-700 text-white rounded"
      />
    </div>
  );
}
