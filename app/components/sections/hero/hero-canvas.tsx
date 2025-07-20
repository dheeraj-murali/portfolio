import { curveBasis } from "@visx/curve";
import { useDrag } from "@visx/drag";
import type { HandlerArgs } from "@visx/drag/lib/useDrag";
import { LinearGradient } from "@visx/gradient";
import { LinePath } from "@visx/shape";
import { EraserIcon } from "lucide-react";
import { useCallback, useState } from "react";

import { Button } from "~/components/ui/button";

type Line = { x: number; y: number }[];
type Lines = Line[];

type DragIIProps = {
  width: number;
  height: number;
  data?: Lines;
};

export function Canvas(props: DragIIProps) {
  const { width, height, data = [] } = props;

  const [cleared, setCleared] = useState(false);

  const [lines, setLines] = useState<Lines>(data);
  const onDragStart = useCallback(
    (currDrag: HandlerArgs) => {
      // add the new line with the starting point
      setLines((currLines) => [
        ...currLines,
        [{ x: currDrag?.x || 0, y: currDrag?.y || 0 }],
      ]);
    },
    [setLines]
  );
  const onDragMove = useCallback(
    (currDrag: HandlerArgs) => {
      // add the new point to the current line
      setLines((currLines) => {
        const nextLines = [...currLines];
        const newPoint = {
          x: (currDrag?.x || 0) + (currDrag?.dx || 0),
          y: (currDrag?.y || 0) + (currDrag?.dy || 0),
        };
        const lastIndex = nextLines.length - 1;
        nextLines[lastIndex] = [...(nextLines[lastIndex] || []), newPoint];
        return nextLines;
      });
    },
    [setLines]
  );

  const {
    x = 0,
    y = 0,
    dx,
    dy,
    isDragging,
    dragStart,
    dragEnd,
    dragMove,
  } = useDrag({
    onDragStart,
    onDragMove,
    resetOnStart: true,
  });

  return width < 10 ? null : (
    <div
      className="relative rounded-lg overflow-hidden"
      style={{ touchAction: "none" }}
    >
      <div className="absolute bottom-4 right-2 flex flex-col items-end gap-2">
        <Button
          onClick={() => {
            setCleared(true);
            setLines([]);
          }}
          variant="ghost"
        >
          <EraserIcon />
          <span>Clean Slate</span>
        </Button>

        {cleared && lines.length <= 0 && (
          <p className="text-xs animate-pulse hidden lg:block">
            Click and drag to draw more
          </p>
        )}
      </div>

      <svg width={width} height={height}>
        <LinearGradient id="stroke" from="#ff614e60" to="#ffdc6460" />

        <rect fill="transparent" width={width} height={height} />

        {lines.map((line, i) => (
          <LinePath
            key={`line-${i}`}
            fill="transparent"
            stroke="url(#stroke)"
            strokeWidth={25}
            data={line}
            curve={curveBasis}
            x={(d) => d.x}
            y={(d) => d.y}
          />
        ))}

        <g>
          {isDragging && (
            /* capture mouse events (note: <Drag /> does this for you) */
            <rect
              width={width}
              height={height}
              onMouseMove={dragMove}
              onMouseUp={dragEnd}
              fill="transparent"
            />
          )}
          {/* decorate the currently drawing line */}
          {isDragging && (
            <g>
              <rect
                fill="transparent"
                width={8}
                height={8}
                x={x + dx - 4}
                y={y + dy - 4}
                pointerEvents="none"
              />
              <circle
                cx={x}
                cy={y}
                r={4}
                fill="transparent"
                pointerEvents="none"
              />
            </g>
          )}
          {/* create the drawing area */}
          <rect
            fill="transparent"
            width={width}
            height={height}
            onMouseEnter={cleared ? undefined : dragStart}
            onMouseDown={isDragging ? dragEnd : dragStart}
            onMouseUp={isDragging ? dragEnd : undefined}
            onMouseMove={isDragging ? dragMove : undefined}
            onTouchStart={dragStart}
            onTouchEnd={isDragging ? dragEnd : undefined}
            onTouchMove={isDragging ? dragMove : undefined}
          />
        </g>
      </svg>
    </div>
  );
}
