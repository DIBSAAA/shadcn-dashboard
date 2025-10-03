import { BarChartMixed } from './components/bar-chart-mixed';
import { ChartAreaInteractive } from './components/chart-area-interactive';
import { PieChartCard } from './components/pie-chart-card';
import { RadarChartIcons } from './components/radar-chart-icons';
import { SectionCards } from './components/section-cards';

function DashboardGrid() {
  return (
    <div className="dashboard">
      <div className='border-0 border-b-2 mb-4 pb-4 border-card-foreground'>
        <SectionCards />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <RadarChartIcons />
        <BarChartMixed />
        <PieChartCard />
        <div className='col-span-1 lg:col-span-3'>
          <ChartAreaInteractive />
        </div>
        <PieChartCard />
        <RadarChartIcons />
        <BarChartMixed />
      </div>
    </div>
  )
}

export default DashboardGrid