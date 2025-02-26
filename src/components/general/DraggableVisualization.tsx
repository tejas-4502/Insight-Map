import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface NodeDatum {
    id: number
    x: number
    y: number
}

const DraggableVisualization = () => {
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        if (!svgRef.current) return

        const width = 600
        const height = 400

        const nodes: NodeDatum[] = [
            { id: 1, x: 100, y: 200 },
            { id: 2, x: 300, y: 100 },
            { id: 3, x: 500, y: 250 },
        ]

        const svg = d3
            .select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .style('border', '1px solid black')

        const dragHandler = d3
            .drag<SVGCircleElement, NodeDatum>()
            .on('start', event => {
                d3.select(event.sourceEvent.target)
                    .raise()
                    .attr('stroke', 'black')
            })
            .on('drag', (event, d) => {
                d.x = event.x
                d.y = event.y
                d3.select(event.sourceEvent.target)
                    .attr('cx', d.x)
                    .attr('cy', d.y)
            })
            .on('end', event => {
                d3.select(event.sourceEvent.target).attr('stroke', null)
            })

        svg.selectAll<SVGCircleElement, NodeDatum>('circle')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', 20)
            .attr('fill', 'steelblue')
            .attr('stroke', 'white')
            .attr('stroke-width', 2)
            .call(dragHandler)
    }, [])

    return <svg ref={svgRef}></svg>
}

export default DraggableVisualization
