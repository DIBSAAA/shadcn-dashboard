import { Home } from 'lucide-react';
import './App.css'
import { NavMain } from './components/nav-main';
import { SectionCards } from './components/section-cards';
import { SidebarProvider } from './components/ui/sidebar';
import { IconHome } from '@tabler/icons-react';
import { BarChartMixed } from './components/bar-chart-mixed';
import { PieChartCard } from './components/pie-chart-card';
import { RadarChartIcons } from './components/radar-chart-icons';
import { ChartAreaInteractive } from './components/chart-area-interactive';
function App() {

  return (
    <SidebarProvider>
      <div className='container'>
        {/* <DashboardGrid /> */}
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
    </SidebarProvider>
  )
}

export default App
