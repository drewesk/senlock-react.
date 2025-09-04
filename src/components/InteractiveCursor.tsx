import React, { useState, useEffect, useRef } from 'react'

const InteractiveCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const isInside = e.clientX >= rect.left && e.clientX <= rect.right && 
                        e.clientY >= rect.top && e.clientY <= rect.bottom
        
        setIsActive(isInside)
        if (isInside) {
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Create grid that flexes to fill the section perfectly
  const arrows = []
  const width = window.innerWidth // Dynamic width that resizes with window
  const height = 100 // Section height for 4 rows
  const desiredRows = 4 // How many rows we want
  const desiredCols = Math.floor(width / 40) // Dynamic columns based on window width
  
  const spacingY = height / desiredRows // Dynamic vertical spacing
  const spacingX = width / desiredCols // Dynamic horizontal spacing

  for (let row = 0; row < desiredRows; row++) {
    for (let col = 0; col < desiredCols; col++) {
      const x = col * spacingX + spacingX / 2
      const y = row * spacingY // Start first row at absolute top
      let angle = 0
      
      // Calculate opacity gradient: top row most visible, bottom row barely visible
      const opacity = 1 - (row / (desiredRows - 1)) * 0.95 // From 1.0 to 0.05
      
      if (isActive) {
        const dx = mousePos.x - x
        const dy = mousePos.y - y
        angle = Math.atan2(dy, dx) * (180 / Math.PI)
      }
      
      arrows.push({ x, y, angle, opacity, key: `${x}-${y}` })
    }
  }

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100px',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      {arrows.map(arrow => (
        <div
          key={arrow.key}
          style={{
            position: 'absolute',
            left: arrow.x - 8,
            top: arrow.y,
            transform: `rotate(${arrow.angle}deg)`,
            transition: isActive ? 'transform 0.1s ease-out' : 'transform 0.8s ease-out'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M2 6 L8 12 L14 6"
              fill="none"
              stroke={`rgba(255, 255, 255, ${arrow.opacity})`}
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

export default InteractiveCursor
