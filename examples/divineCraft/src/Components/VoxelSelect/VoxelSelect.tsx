import { useRef, useEffect } from "react";
import { voxelData } from "../../Data/VoxelData";
import "./VoxelSelect.css";
import { VoxelData } from "@divinevoxel/vlox";
import { useState } from "react";

function Voxel({
  data,
  active,
  ref,
}: {
  data: VoxelData;
  active: boolean;
  ref?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div ref={ref} className={`voxel ${active ? "active" : ""}`}>
      <div className="voxel-image-container">
        <img
          className="voxel-image"
          src={`/assets/textures/${data.id}/default.png`}
        />
      </div>
    </div>
  );
}

export function VoxelSelect() {
/*   const [activeVoxel, setActiveVoxel] = useState(PlayerState.selectedVoxel);
  const containerRef = useRef<HTMLDivElement|null>(null);

  PlayerState.observers.voxelSelectUpdated.subscribe(VoxelSelect, () => {
    setActiveVoxel(PlayerState.selectedVoxel);
    const activeElement = containerRef.current?.querySelector(".active");
    activeElement?.scrollIntoView({ inline: "center" });
  });

  return (
    <div ref={containerRef} className="voxel-select">
      <div className="voxel-select-row">
        {voxelData.map((_, index) => (
          <Voxel
            key={_.id}
            active={activeVoxel.id == _.id}
            data={_}
            ref={
              index === voxelData.findIndex((v) => v.id === activeVoxel.id)
                ? containerRef
                : undefined
            }
          />
        ))}
      </div>
    </div>
  ); */
  return <></>
}
