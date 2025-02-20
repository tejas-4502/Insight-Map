import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import './telemetryChart.css'

const TelemetryChart = () => {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        const svg = d3.select(svgRef.current)
        const width = 600
        const height = 300
        const margin = { top: 20, right: 30, bottom: 30, left: 50 }

        svg.selectAll('*').remove()

        const xScale = d3
            .scaleLinear()
            .domain([0, data.length > 50 ? data.length - 50 : 50])
            .range([margin.left, width - margin.right])

        const yScale = d3
            .scaleLinear()
            .domain([0, 100])
            .range([height - margin.bottom, margin.top])

        const line = d3
            .line<number>()
            .x((_, i) => xScale(i))
            .y(d => yScale(d))
            .curve(d3.curveMonotoneX)

        svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 2)
            .attr('d', line)

        svg.append('g')
            .attr('transform', `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(xScale))

        svg.append('g')
            .attr('transform', `translate(${margin.left},0)`)
            .call(d3.axisLeft(yScale))
    }, [data])

    useEffect(() => {
        const interval = setInterval(() => {
            setData(prevData => {
                const newData = [...prevData, Math.floor(Math.random() * 100)]
                return newData.length > 50 ? newData.slice(1) : newData
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='chart-container'>
            <h3>Telemetry Data</h3>
            <svg ref={svgRef} width={600} height={300}></svg>
        </div>
    )
}

export default TelemetryChart
