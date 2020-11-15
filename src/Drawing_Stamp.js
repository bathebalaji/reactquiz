import React from 'react'
import { Stage, Layer, Line, Text, Rect, Circle, Ellipse, RegularPolygon } from 'react-konva';

function Drawing_Stamp() {

  const [tool, setTool] = React.useState('');
  const [lines, setLines] = React.useState([]);
  const [rects, setRects] = React.useState([]);
  const [circles, setCircles] = React.useState([]);
  const [triangles, setTriangles] = React.useState([]);
  const isDrawing = React.useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    console.log("The selected tool is " + tool);
    if (tool === "" || tool === 'pen')
      setLines([...lines, { tool, points: [pos.x, pos.y] }]);

    if (tool === 'rect')
      setRects([...rects,
      { startPointX: pos.x, startPointY: pos.y, width: 0, height: 0 }
      ]);

    if (tool === 'circle')
      setCircles([...circles,
      { startPointX: pos.x, startPointY: pos.y, radiusX: 1, radiusY: 1 }

      ]);

    if (tool === 'triangle')
      setTriangles([...triangles,
      { startPointX: pos.x, startPointY: pos.y, radiusX: 15 }

      ])
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    // To draw line
    if (tool === "" || tool === 'pen') {
      let lastLine = lines[lines.length - 1];
      // add point
      lastLine.points = lastLine.points.concat([point.x, point.y]);

      // replace last
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }

    // To draw Rectangle
    if (tool === 'rect') {
      let curRec = rects[rects.length - 1];
      console.log("From rect " + point.x + "crr" + curRec.startPointX);
      curRec.width = point.x - curRec.startPointX;
      curRec.height = point.y - curRec.startPointY;
      setRects(rects.concat(curRec));
    }

    // To Draw circle
    if (tool === 'circle') {
      let curCircle = circles[circles.length - 1];
      // curCircle.startPointX = point.x;
      // curCircle.startPointY = point.y;
      curCircle.radiusX = (point.x - curCircle.startPointX);
      curCircle.radiusY = (point.y - curCircle.startPointY);
      console.log("x, y  and radius" + point.x + "insintald  :" + curCircle.startPointX + "<" + curCircle.startPointY + "," + curCircle.radiusX);
      setCircles(circles.concat(curCircle));
    }

    // To Draw Trigangle
    if (tool === 'triangle') {
      
      
      let curTri = triangles[triangles.length - 1];
      curTri.radiusX = point.x - curTri.startPointX;
      console.log("From Triangle " + point.x + "start point" + curTri.startPointX+"Radius :"+curTri.radiusX);
      setTriangles(triangles.concat(curTri));
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <div>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Pen</option>
        <option value="rect">Rectangle</option>
        <option value="circle">Circle</option>
        <option value="eraser">Eraser</option>
        <option value="triangle">Triangle</option>
      </select>
      <Stage
        width={800}
        height={500}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          <Text text="Just start drawing" x={5} y={30} />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={2}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}

          <Text text="Just klsdjfjasdklfj drawing" x={205} y={30} />
          {rects.map((rect, i) => (
            <Rect
              key={i}
              x={Math.min(rect.startPointX, rect.startPointX + rect.width)}
              y={Math.min(rect.startPointY, rect.startPointY + rect.height)}
              width={Math.abs(rect.width)}
              height={Math.abs(rect.height)}

              stroke="#df4b26"
              globalCompositeOperation={
                rect.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}

          {circles.map((cir, i) => (
            <Ellipse
              key={i}
              x={Math.min(cir.startPointX)}
              y={Math.min(cir.startPointY)}
              radiusX={Math.abs(cir.radiusX)}
              radiusY={Math.abs(cir.radiusY)}

              stroke="#df4b26"
              globalCompositeOperation={
                cir.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))
          }

          {triangles.map((triang, i) => (
            <RegularPolygon
              key={i}
              x={Math.min(triang.startPointX)}
              y={Math.min(triang.startPointY)}
              radius={Math.abs(triang.radiusX)}
              sides={3}
              stroke="#df4b26"
              globalCompositeOperation={
                triang.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))
          }

        </Layer>
      </Stage>

    </div>
  )
}

export default Drawing_Stamp;