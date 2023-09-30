import  { SVGProps } from 'react';

const Cross = (props: SVGProps<SVGSVGElement>) => {
  const { color = 'var(--icon)', className, onClick, style } = props;

  return (
    <svg
      data-testid="eMdVcvxrVhw-FnaJjbxWy"
      style={style}
      className={className}
      onClick={onClick}
      width="11px"
      height="17px"
      viewBox="0 -2 11 17"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Trade-Section-Complete"
          transform="translate(-1168.000000, -360.000000)"
          fill={color}
          fillRule="nonzero"
        >
          <g id="noun_Cross_1707162" transform="translate(1168.000000, 360.000000)">
            <g id="Group" transform="translate(0.000000, 0.178590)">
              <path
                d="M0.4441877,0.273672 C0.7663612,-0.0543564 1.2887347,-0.0543704 1.6109192,0.273672 L5.50000495,4.2334712 L9.3890907,0.273672 C9.71127245,-0.0543676 10.2336239,-0.054376 10.5558167,0.2736692 C10.8779902,0.6017004 10.8779984,1.1335716 10.5558167,1.461614 L6.6667282,5.421416 L10.5558194,9.381204 C10.8779984,9.709252 10.8779902,10.241112 10.5558167,10.56916 C10.2336267,10.897208 9.7112697,10.89718 9.3890907,10.56916 L5.5000022,6.609344 L1.61091645,10.56916 C1.2887347,10.89718 0.76636395,10.89718 0.44419045,10.56916 C0.12200045,10.241112 0.12200595,9.709252 0.44419045,9.381204 L4.33327895,5.421416 L0.44419045,1.4616112 C0.1220087,1.1335716 0.1219977,0.6017228 0.4441877,0.273672 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Cross;
