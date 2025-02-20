import 'primeflex/primeflex.css'
import './App.css'
import TelemetryChart from './components/telemetryMappings/telemetryChart/TelemetryChart'
import TelemetryMap from './components/telemetryMappings/telemetryMap/TelemetryMap'
import Graph from './components/graphs/Graph'

const App = () => {
    return (
        <div className='App'>
            <h1 className='text-3xl font-bold mb-4'>Telemetry Dashboard</h1>
            <div className='grid'>
                <div className='flex flex-column align-items-center'>
                    <h2 className='text-xl mb-2'>Chart</h2>
                    <TelemetryChart />
                </div>
                <div className='flex flex-column align-items-center'>
                    <h3 className='text-xl mb-2'>Map</h3>
                    <TelemetryMap />
                </div>
                <div className='flex flex-column align-items-center'>
                    <h1 className='text-xl mb-2'>Graph Visualization</h1>
                    <Graph />
                </div>
            </div>
        </div>
    )
}

export default App
