import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const LargeScatterplot: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const width = 500
    const height = 300
    const numPoints = 1_000_000 // 1 million data points

    useEffect(() => {
        if (!canvasRef.current) return
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Generate random data
        const data = d3.range(numPoints).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            color: d3.interpolateTurbo(Math.random()), // Random colors
        }))

        // Draw points using Canvas API
        ctx.clearRect(0, 0, width, height)
        ctx.globalAlpha = 0.6

        data.forEach(d => {
            ctx.fillStyle = d.color
            ctx.beginPath()
            ctx.arc(d.x, d.y, 1, 0, 2 * Math.PI)
            ctx.fill()
        })
    }, [])

    return (
        <div className='canvas-container flex flex-column align-items-center p-3'>
            <div className='canvas-wrapper'>
                <canvas ref={canvasRef} width={width} height={height} />
            </div>
        </div>
    )
}

export default LargeScatterplot
