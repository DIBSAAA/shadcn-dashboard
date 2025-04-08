import './App.css'
import DashboardGrid from './DashboardGrid';

function App() {

  return (
    <div className='w-full h-full'>
      {/* <div className='flex space-x-12'>
          <RadarChartIcons/>
          <PieChartCard/>
          <BarChartMixed/>
      </div> */}
      <DashboardGrid />
    </div>
  )
}

export default App
