import { useEffect, useRef, useState } from "react";
import { WorldMapComponent } from "Map/WorldMapComponent";
import StartGame from "StartGame";
import { Graph } from "@amodx/ncs";

export function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [graph, setGraph] = useState<Graph | null>(null);

  useEffect(() => {
    (async () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const nodes = await StartGame(canvas);
      setGraph(nodes);
    })();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {graph && <WorldMapComponent graph={graph} />}
      <canvas
        style={{
          width: "100%",
          height: "100%",
          touchAction: "none",
        }}
        ref={canvasRef}
      ></canvas>
    </div>
  );
}
