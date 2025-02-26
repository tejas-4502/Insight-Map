import 'primeflex/primeflex.css'
import './App.css'
import TelemetryChart from './components/telemetryMappings/telemetryChart/TelemetryChart'
import TelemetryMap from './components/telemetryMappings/telemetryMap/TelemetryMap'
import Graph from './components/graphs/Graph'
import LargeScatterplot from './components/general/LargeScatterplot'
import DraggableVisualization from './components/general/DraggableVisualization'

const App = () => {
    return (
        <div className='App'>
            <h1 className='text-3xl font-bold mb-4'>Telemetry Dashboard</h1>
            <div className='grid p-4'>
                <div className='col-12 md:col-6 flex flex-column align-items-center p-3'>
                    <h2 className='text-xl mb-2'>Chart</h2>
                    <TelemetryChart />
                </div>
                <div className='col-12 md:col-6 flex flex-column align-items-center p-3'>
                    <h3 className='text-xl mb-2'>Map</h3>
                    <TelemetryMap />
                </div>
                <div className='col-12 md:col-6 flex flex-column align-items-center p-3'>
                    <h1 className='text-xl mb-2'>Graph Visualization</h1>
                    <Graph />
                </div>
                <div className='col-12 md:col-6 flex flex-column align-items-center p-3'>
                    <h1 className='text-xl mb-2'>
                        Canvas for Million Data Points
                    </h1>
                    <LargeScatterplot />
                </div>
                <div className='col-12 flex flex-column align-items-center p-3'>
                    <h1 className='text-xl mb-2'>Draggable Visualization</h1>
                    <DraggableVisualization />
                </div>
            </div>
        </div>
    )
}

export default App
