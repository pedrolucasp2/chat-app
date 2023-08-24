import React from 'react';
import { Bar } from '@visx/shape';
import { scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';

const data = [
  { x: 'A', y: 10 },
  { x: 'B', y: 5 },
  { x: 'C', y: 15 },
  { x: 'D', y: 8 },
];

const width = 600;
const height = 400;

const xScale = scaleLinear({
  domain: data.map((d) => d.x),
  nice: true,
});
const yScale = scaleLinear({
  domain: [0, Math.max(...data.map((d) => d.y))],
});

export default function Chart() {
  return (
    <svg width={width} height={height}>
      {data.map((d) => (
        <Bar
          key={d.x}
          x={xScale(d.x)}
          y={height - yScale(d.y)}
          width={xScale.bandwidth()}
          height={yScale(d.y)}
          fill="#4fc3f7"
        />
      ))}
    </svg>
  );
}
