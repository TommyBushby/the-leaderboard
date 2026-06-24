export function BracketCanvas() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid meet"
      className="rwc-scoring__canvas"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rwc-goldLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f5c863" stopOpacity="0" />
          <stop offset="20%" stopColor="#f5c863" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#fff3c4" stopOpacity="0.75" />
          <stop offset="80%" stopColor="#f5c863" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f5c863" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="rwc-goldText" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff3c4" />
          <stop offset="45%" stopColor="#f5c863" />
          <stop offset="100%" stopColor="#b8862a" />
        </linearGradient>
        <filter id="rwc-goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="rwc-goldGlowSoft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g stroke="url(#rwc-goldLine)" strokeWidth="1.1" fill="none" opacity="0.32">
        <path d="M -40 100 H 200 V 150 H 380 V 250 H 540 V 450 H 700" />
        <path d="M -40 200 H 200 V 150 H 380 V 250 H 540 V 450 H 700" />
        <path d="M -40 300 H 200 V 350 H 380 V 250 H 540 V 450 H 700" />
        <path d="M -40 400 H 200 V 350 H 380 V 250 H 540 V 450 H 700" />
        <path d="M -40 500 H 200 V 550 H 380 V 650 H 540 V 450 H 700" />
        <path d="M -40 600 H 200 V 550 H 380 V 650 H 540 V 450 H 700" />
        <path d="M -40 700 H 200 V 750 H 380 V 650 H 540 V 450 H 700" />
        <path d="M -40 800 H 200 V 750 H 380 V 650 H 540 V 450 H 700" />
        <path d="M 1640 100 H 1400 V 150 H 1220 V 250 H 1060 V 450 H 900" />
        <path d="M 1640 200 H 1400 V 150 H 1220 V 250 H 1060 V 450 H 900" />
        <path d="M 1640 300 H 1400 V 350 H 1220 V 250 H 1060 V 450 H 900" />
        <path d="M 1640 400 H 1400 V 350 H 1220 V 250 H 1060 V 450 H 900" />
        <path d="M 1640 500 H 1400 V 550 H 1220 V 650 H 1060 V 450 H 900" />
        <path d="M 1640 600 H 1400 V 550 H 1220 V 650 H 1060 V 450 H 900" />
        <path d="M 1640 700 H 1400 V 750 H 1220 V 650 H 1060 V 450 H 900" />
        <path d="M 1640 800 H 1400 V 750 H 1220 V 650 H 1060 V 450 H 900" />
        <path d="M 700 450 H 900" strokeWidth="1.4" opacity="0.9" />
      </g>
      <g
        className="rwc-scoring__beams rwc-scoring__beams--soft"
        stroke="#e8b04a"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        filter="url(#rwc-goldGlowSoft)"
        opacity="0.45"
      >
        {[100, 300, 500, 700].map((y) => (
          <path
            key={`l${y}`}
            d={`M -40 ${y} H 200 V ${y + 50} H 380 V 250 H 540 V 450 H 700`}
            pathLength={100}
            strokeDasharray="7 93"
          />
        ))}
        {[100, 300, 500, 700].map((y) => (
          <path
            key={`r${y}`}
            d={`M 1640 ${y} H 1400 V ${y + 50} H 1220 V 250 H 1060 V 450 H 900`}
            pathLength={100}
            strokeDasharray="7 93"
          />
        ))}
      </g>
      <g
        className="rwc-scoring__beams"
        stroke="#f5d27a"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        filter="url(#rwc-goldGlow)"
        opacity="0.95"
      >
        {[100, 300, 500, 700].map((y) => (
          <path
            key={`lb${y}`}
            d={`M -40 ${y} H 200 V ${y + 50} H 380 V 250 H 540 V 450 H 700`}
            pathLength={100}
            strokeDasharray="7 93"
          />
        ))}
        {[100, 300, 500, 700].map((y) => (
          <path
            key={`rb${y}`}
            d={`M 1640 ${y} H 1400 V ${y + 50} H 1220 V 250 H 1060 V 450 H 900`}
            pathLength={100}
            strokeDasharray="7 93"
          />
        ))}
      </g>
      <g className="rwc-scoring__labels">
        {[
          { x: 30, label: 'GROUP', pts: '5', px: 58 },
          { x: 220, label: 'ROUND OF 32', pts: '15', px: 272 },
          { x: 400, label: 'ROUND OF 16', pts: '15', px: 452 },
          { x: 1090, label: 'QUARTER-FINALS', pts: '20', px: 1142 },
          { x: 1260, label: 'SEMI-FINALS', pts: '30', px: 1312 },
          { x: 1440, label: 'FINAL', pts: '60', px: 1492 },
        ].map((item) => (
          <g key={item.label}>
            <text
              x={item.x}
              y={425}
              fill="#f5c863"
              fillOpacity="0.78"
              fontFamily="var(--rwc-font-display)"
              fontSize="11"
              fontWeight="700"
              letterSpacing="2.4"
            >
              {item.label}
            </text>
            <text
              x={item.x}
              y={465}
              fill="url(#rwc-goldText)"
              fontFamily="var(--rwc-font-display)"
              fontSize="42"
              fontWeight="700"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {item.pts}
            </text>
            <text
              x={item.px}
              y={465}
              fill="#f5c863"
              fillOpacity="0.7"
              fontFamily="var(--rwc-font-display)"
              fontSize="11"
              fontWeight="700"
              letterSpacing="1.6"
            >
              PTS
            </text>
          </g>
        ))}
      </g>
    </svg>
  )
}
