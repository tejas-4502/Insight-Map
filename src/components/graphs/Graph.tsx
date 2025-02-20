import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const Graph = () => {
    const d3Container = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        if (!d3Container.current) return

        const data = [25, 30, 45, 60, 20, 75, 40]

        const width = 400
        const height = 200

        d3.select(d3Container.current).selectAll('*').remove()

        const svg = d3
            .select(d3Container.current)
            .attr('width', width)
            .attr('height', height)

        const xScale = d3
            .scaleBand()
            .domain(data.map((_, i) => i.toString()))
            .range([0, width])
            .padding(0.2)

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data) || 100])
            .range([height, 0])

        svg.selectAll('rect')
            .data(data)
            .join('rect')
            .attr('x', (_, i) => xScale(i.toString())!)
            .attr('y', d => yScale(d))
            .attr('width', xScale.bandwidth())
            .attr('height', d => height - yScale(d))
            .attr('fill', 'steelblue')

        svg.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale).tickFormat(() => ''))

        svg.append('g').call(d3.axisLeft(yScale))
    }, [])

    return (
        <div>
            <svg ref={d3Container}></svg>
        </div>
    )
}

export default Graph
