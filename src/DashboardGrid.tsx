import { GridStack } from 'gridstack';

function DashboardGrid() {

    GridStack.init();

  return (
    <div className="grid-stack">
  <div className="grid-stack-item">
    <div className="grid-stack-item-content">Item 1</div>
  </div>
  <div className="grid-stack-item" gs-w="2">
    <div className="grid-stack-item-content">Item 2 wider</div>
  </div>
</div>
  )
}

export default DashboardGrid