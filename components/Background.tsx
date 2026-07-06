export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-40 sm:opacity-60 bg-slate-950">
      <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0"></stop>
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1"></stop>
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id="grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0"></stop>
            <stop offset="50%" stopColor="#10b981" stopOpacity="1"></stop>
            <stop offset="100%" stopColor="#10b981" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0"></stop>
            <stop offset="50%" stopColor="#a855f7" stopOpacity="1"></stop>
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0"></stop>
          </linearGradient>
          <style>
            {`
              @keyframes flow1 { 0% { stroke-dashoffset: 2000; } 100% { stroke-dashoffset: -200; } }
              @keyframes flow2 { 0% { stroke-dashoffset: 2500; } 100% { stroke-dashoffset: -250; } }
              @keyframes flow3 { 0% { stroke-dashoffset: 3000; } 100% { stroke-dashoffset: -300; } }
              @keyframes flow4 { 0% { stroke-dashoffset: 1500; } 100% { stroke-dashoffset: -150; } }
              .path-flow-1 { stroke-dasharray: 200 2000; animation: flow1 4.5s linear infinite; }
              .path-flow-2 { stroke-dasharray: 200 2000; animation: flow1 5s linear infinite; animation-delay: 1s; }
              .path-flow-3 { stroke-dasharray: 250 2500; animation: flow2 6s linear infinite; animation-delay: 0.5s; }
              .path-flow-4 { stroke-dasharray: 250 2500; animation: flow2 5.5s linear infinite; animation-delay: 2.5s; }
              .path-flow-5 { stroke-dasharray: 300 3000; animation: flow3 7s linear infinite; animation-delay: 1.5s; }
              .path-flow-6 { stroke-dasharray: 150 1500; animation: flow4 3.5s linear infinite; animation-delay: 3s; }
            `}
          </style>
        </defs>
        <g stroke="#334155" strokeWidth="2" fill="none" opacity="0.3">
          <path d="M 150 1100 L 150 750 L 350 550 L 350 -100"></path>
          <path d="M 850 -100 L 850 350 L 650 550 L 650 1100"></path>
          <path d="M -100 450 L 250 450 L 350 350 L 650 350 L 750 450 L 1100 450"></path>
          <path d="M 1100 650 L 750 650 L 650 750 L 350 750 L 250 650 L -100 650"></path>
          <path d="M -100 850 L 200 850 L 400 1050 L 1100 1050"></path>
          <path d="M 1100 150 L 900 150 L 700 -50"></path>
        </g>
        <g fill="none" strokeWidth="2" className="md:stroke-[3px]" strokeLinecap="round">
          <path d="M 150 1100 L 150 750 L 350 550 L 350 -100" stroke="url(#grad-emerald)" className="path-flow-1"></path>
          <path d="M 850 -100 L 850 350 L 650 550 L 650 1100" stroke="url(#grad-cyan)" className="path-flow-2"></path>
          <path d="M -100 450 L 250 450 L 350 350 L 650 350 L 750 450 L 1100 450" stroke="url(#grad-purple)" className="path-flow-3"></path>
          <path d="M 1100 650 L 750 650 L 650 750 L 350 750 L 250 650 L -100 650" stroke="url(#grad-emerald)" className="path-flow-4"></path>
          <path d="M -100 850 L 200 850 L 400 1050 L 1100 1050" stroke="url(#grad-cyan)" className="path-flow-5"></path>
          <path d="M 1100 150 L 900 150 L 700 -50" stroke="url(#grad-purple)" className="path-flow-6"></path>
        </g>
      </svg>
    </div>
  )
}
