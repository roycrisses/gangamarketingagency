export default function IsometricBoxes02({ className = "" }) {
  return (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bottom box */}
      <path
        d="M150 140 L230 100 L230 160 L150 200 L70 160 L70 100 Z"
        fill="url(#grad-b1)"
        stroke="rgba(37,99,235,0.2)"
        strokeWidth="0.8"
      />
      <path
        d="M70 100 L150 140 L150 80 L70 40 Z"
        fill="url(#grad-b1l)"
        stroke="rgba(37,99,235,0.15)"
        strokeWidth="0.8"
      />
      <path
        d="M150 140 L230 100 L230 40 L150 80 Z"
        fill="url(#grad-b1r)"
        stroke="rgba(37,99,235,0.2)"
        strokeWidth="0.8"
      />

      {/* Middle box */}
      <path
        d="M150 100 L210 70 L210 120 L150 150 L90 120 L90 70 Z"
        fill="url(#grad-b2)"
        stroke="rgba(37,99,235,0.25)"
        strokeWidth="0.8"
      />
      <path
        d="M90 70 L150 100 L150 50 L90 20 Z"
        fill="url(#grad-b2l)"
        stroke="rgba(37,99,235,0.2)"
        strokeWidth="0.8"
      />
      <path
        d="M150 100 L210 70 L210 20 L150 50 Z"
        fill="url(#grad-b2r)"
        stroke="rgba(37,99,235,0.25)"
        strokeWidth="0.8"
      />

      {/* Top box */}
      <path
        d="M150 60 L190 40 L190 80 L150 100 L110 80 L110 40 Z"
        fill="url(#grad-b3)"
        stroke="rgba(37,99,235,0.3)"
        strokeWidth="0.8"
      />
      <path
        d="M110 40 L150 60 L150 20 L110 0 Z"
        fill="url(#grad-b3l)"
        stroke="rgba(37,99,235,0.25)"
        strokeWidth="0.8"
      />
      <path
        d="M150 60 L190 40 L190 0 L150 20 Z"
        fill="url(#grad-b3r)"
        stroke="rgba(37,99,235,0.3)"
        strokeWidth="0.8"
      />

      <defs>
        <linearGradient id="grad-b1" x1="70" y1="100" x2="230" y2="200">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#BFDBFE" />
        </linearGradient>
        <linearGradient id="grad-b1l" x1="70" y1="40" x2="150" y2="140">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="grad-b1r" x1="150" y1="40" x2="230" y2="140">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>

        <linearGradient id="grad-b2" x1="90" y1="70" x2="210" y2="150">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
        <linearGradient id="grad-b2l" x1="90" y1="20" x2="150" y2="100">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
        <linearGradient id="grad-b2r" x1="150" y1="20" x2="210" y2="100">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>

        <linearGradient id="grad-b3" x1="110" y1="40" x2="190" y2="100">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#EFF6FF" />
        </linearGradient>
        <linearGradient id="grad-b3l" x1="110" y1="0" x2="150" y2="60">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#BFDBFE" />
        </linearGradient>
        <linearGradient id="grad-b3r" x1="150" y1="0" x2="190" y2="60">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
    </svg>
  );
}
