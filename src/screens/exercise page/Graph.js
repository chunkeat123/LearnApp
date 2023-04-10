import React from 'react';
import { View } from 'react-native';
import { Surface, Shape, Path } from '@react-native-community/art';

const Graph = ({ xMin, xMax, yMin, yMax, func }) => {
  const scale = 100;
  const originX = -xMin * scale;
  const originY = yMax * scale;

  const f = (x, y, func) => eval(func);

  const step = 0.1;
  const xValues = [];
  for (let x = parseFloat(xMin); x <= parseFloat(xMax); x += step) {
    xValues.push(x);
  }
  const yValues = [];
  for (let y = parseFloat(yMin); y <= parseFloat(yMax); y += step) {
    yValues.push(y);
  }

  const zValues = xValues.map((x) => yValues.map((y) => f(x, y)));
  const flatZValues = [].concat(...zValues);
  const maxVal = Math.max(...flatZValues);
  const minVal = Math.min(...flatZValues);

  const getPath = () => {
    const path = Path();

    for (let i = 0; i < xValues.length; i++) {
      const x = xValues[i];
      for (let j = 0; j < yValues.length; j++) {
        const y = yValues[j];
        const z = f(x, y);
        const pixelX = x * scale + originX;
        const pixelY = -y * scale + originY;
        const pixelZ = ((z - minVal) / (maxVal - minVal)) * 255;
        const color = `rgb(${pixelZ}, ${pixelZ}, ${pixelZ})`;
        path.moveTo(pixelX, pixelY);
        path.lineTo(pixelX + scale, pixelY);
        path.lineTo(pixelX + scale, pixelY - scale);
        path.lineTo(pixelX, pixelY - scale);
        path.lineTo(pixelX, pixelY);
        path.close();
        path.fill(color);
        path.moveTo(pixelX, pixelY);
        path.lineTo(pixelX + scale, pixelY);
        path.moveTo(pixelX, pixelY);
        path.lineTo(pixelX, pixelY - scale);
      }
    }
    return path;
  };

  return (
    <View>
      <Surface width={800} height={800}>
        <Shape d={getPath()} stroke="#000" strokeWidth={1} />
      </Surface>
    </View>
  );
};

export default Graph;
