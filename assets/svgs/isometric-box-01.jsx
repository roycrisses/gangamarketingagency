export default function IsometricBox01({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top face */}
      <path
        d="M100 20 L180 60 L100 100 L20 60 Z"
        fill="url(#grad-top)"
        stroke="rgba(37,99,235,0.3)"
        strokeWidth="1"
      />
      {/* Left face */}
      <path
        d="M20 60 L100 100 L100 180 L20 140 Z"
        fill="url(#grad-left)"
        stroke="rgba(37,99,235,0.2)"
        strokeWidth="1"
      />
      {/* Right face */}
      <path
        d="M100 100 L180 60 L180 140 L100 180 Z"
        fill="url(#grad-right)"
        stroke="rgba(37,99,235,0.25)"
        strokeWidth="1"
      />
      {/* Inner top face */}
      <path
        d="M100 40 L155 65 L100 90 L45 65 Z"
        fill="url(#grad-inner)"
        stroke="rgba(37,99,235,0.4)"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="grad-top" x1="20" y1="20" x2="180" y2="100">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#BFDBFE" />
        </linearGradient>
        <linearGradient id="grad-left" x1="20" y1="60" x2="100" y2="180">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="grad-right" x1="100" y1="60" x2="180" y2="180">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="grad-inner" x1="45" y1="40" x2="155" y2="90">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
      </defs>
    </svg>
  );
}
