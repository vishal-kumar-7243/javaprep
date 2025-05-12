import type { SVGProps } from 'react';

export function JavaPrepLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="120"
      height="30"
      {...props}
    >
      <rect width="200" height="50" fill="hsl(var(--primary))" rx="5" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="var(--font-geist-sans), sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="hsl(var(--primary-foreground))"
      >
        JavaPrep
      </text>
    </svg>
  );
}
