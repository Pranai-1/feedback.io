import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function CustomTooltip({
  Icon,
  content,
}: {
  Icon: React.ElementType;
  content: string;
}) {
  return (
    <div className="relative">
      <Icon
        className="cursor-pointer text-xl"
        data-tooltip-id="infoTooltip"
        data-tooltip-content={content}
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
