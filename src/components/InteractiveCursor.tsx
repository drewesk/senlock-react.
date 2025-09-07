import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'

const InteractiveCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })
  const containerRef = useRef<HTMLDivElement>(null)

  // Debounce resize events to improve performance
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: number
    return (...args: any[]) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(null, args), wait)
    }
  }, [])

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

    const handleResize = debounce(() => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }, 150) // Debounce resize events by 150ms

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [debounce])

  // Memoize arrow grid calculation to avoid recalculating on every render
  const arrowGrid = useMemo(() => {
    const arrows = []
    const width = windowSize.width
    const height = 100 // Section height for 4 rows
    const desiredRows = 4 // How many rows we want
    const desiredCols = Math.floor(width / 40) // Dynamic columns based on window width
    
    const spacingY = height / desiredRows // Dynamic vertical spacing
    const spacingX = width / desiredCols // Dynamic horizontal spacing

    for (let row = 0; row < desiredRows; row++) {
      for (let col = 0; col < desiredCols; col++) {
        const x = col * spacingX + spacingX / 2
        const y = row * spacingY // Start first row at absolute top
        
        // Calculate opacity gradient: top row most visible, bottom row barely visible (more pronounced)
        const t = row / (desiredRows - 1)
        const opacity = (1 - t) * (1 - t) * 0.98 + 0.02 // Ease-out quadratic: 1.0 -> 0.02
        
        arrows.push({ x, y, opacity, key: `${row}-${col}` })
      }
    }
    return arrows
  }, [windowSize.width])

  // Calculate angles separately to avoid recalculating grid positions
  const arrows = useMemo(() => {
    return arrowGrid.map(arrow => {
      let angle = 0
      if (isActive) {
        const dx = mousePos.x - arrow.x
        const dy = mousePos.y - arrow.y
        angle = Math.atan2(dy, dx) * (180 / Math.PI)
      }
      return { ...arrow, angle }
    })
  }, [arrowGrid, mousePos, isActive])

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
              stroke={`rgba(26, 70, 194, ${arrow.opacity})`}
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
