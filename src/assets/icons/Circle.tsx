import {SVGProps} from "react"

const Circle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}
  >
    <rect
      width={6.5}
      height={6.5}
      x={0.75}
      y={0.75}
      fill="#fff"
      stroke="#DD5950"
      strokeWidth={1.5}
      rx={3.25}
    />
  </svg>
)

export default Circle;
