import React from 'react';
import styles from './InteractiveMap.module.css';

const InteractiveMap = ({ activeRegion, onRegionChange }) => {
  // Simplified Schematic Map Paths (Continents)
  const regions = [
    { id: 'NORTH AMERICA', path: 'M 100,50 L 180,50 L 220,100 L 200,180 L 150,220 L 80,180 L 70,100 Z', center: [140, 120] },
    { id: 'SOUTH AMERICA', path: 'M 180,220 L 240,240 L 240,340 L 200,400 L 160,340 L 160,240 Z', center: [200, 310] },
    { id: 'EUROPE', path: 'M 320,40 L 400,30 L 440,80 L 440,140 L 360,160 L 300,100 Z', center: [370, 90] },
    { id: 'AFRICA', path: 'M 320,160 L 420,160 L 480,240 L 440,360 L 360,380 L 300,280 Z', center: [390, 270] },
    { id: 'ASIA', path: 'M 440,30 L 600,20 L 700,80 L 720,240 L 600,320 L 460,260 L 440,140 Z', center: [580, 150] },
    { id: 'AUSTRALIA', path: 'M 580,340 L 680,340 L 710,410 L 660,450 L 590,430 Z', center: [640, 390] },
  ];

  return (
    <div className={styles.mapWrap}>
      <svg 
        viewBox="0 0 800 500" 
        className={styles.svg}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Connections / Lines (Decorative) */}
        <path 
          d="M 370,90 Q 500,100 580,150" 
          className={styles.line} 
          fill="none" 
        />
        <path 
          d="M 140,120 Q 250,80 370,90" 
          className={styles.line} 
          fill="none" 
        />

        {regions.map((region) => {
          const isActive = activeRegion === region.id;
          return (
            <g 
              key={region.id}
              className={`${styles.regionGroup} ${isActive ? styles.active : ''}`}
              onClick={() => onRegionChange(region.id)}
            >
              <path 
                d={region.path} 
                className={styles.p}
              />
              <circle 
                cx={region.center[0]} 
                cy={region.center[1]} 
                r="4" 
                className={styles.dot} 
              />
              <text 
                x={region.center[0]} 
                y={region.center[1] + 20} 
                className={styles.label}
              >
                {region.id}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default InteractiveMap;
