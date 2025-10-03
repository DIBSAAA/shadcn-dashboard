import { ExpenditureListItem, ExpensesHeadType, expenditureListColumn, expenseHeadColumn } from "./columns"
import { DataTable } from "./data-table"
 
export default function DemoPage() {
  const data1:ExpensesHeadType[] =  [
    {
      name: "AWT Subscription",
      description: "Subscription charges",
      frequency: "yearly",
      category: 'technical',
      taxable: false,
    },
    {
        name: "AWM Subscription",
        description: "Subscription charges",
        frequency: "monthly",
        category: 'inventory',
        taxable: false,
      },
      {
        name: "AWS Subscription",
        description: "Subscription charges",
        frequency: "yearly",
        category: 'technical',
        taxable: false,
      },
      {
        name: "AWS Subscription",
        description: "Subscription charges",
        frequency: "monthly",
        category: 'maintenance',
        taxable: false,
      }
  ]
;

const data2: ExpenditureListItem[] = [
  {
    name: 'AWT Payment',
    predictedAmount: "2002",
    amountPaid: "2002",
    dueDate: "02-05-1978",
    paymentDate: "02-05-1978",
    taxAmount: "102",
    status: "created"
  },
  {
    name: 'Office Rent',
    predictedAmount: "5000",
    amountPaid: "5000",
    dueDate: "10-03-2023",
    paymentDate: "10-03-2023",
    taxAmount: "250",
    status: "payment-done"
  },
  {
    name: 'Software Licenses',
    predictedAmount: "1200",
    amountPaid: "0",
    dueDate: "15-04-2025",
    paymentDate: "",
    taxAmount: "0",
    status: "created"
  },
  {
    name: 'Marketing Campaign',
    predictedAmount: "3000",
    amountPaid: "3000",
    dueDate: "05-02-2025",
    paymentDate: "07-02-2025",
    taxAmount: "150",
    status: "tax-done"
  },
  {
    name: 'Equipment Purchase',
    predictedAmount: "8000",
    amountPaid: "8000",
    dueDate: "20-01-2025",
    paymentDate: "21-01-2025",
    taxAmount: "400",
    status: "approved"
  },
  {
    name: 'Consulting Fees',
    predictedAmount: "3500",
    amountPaid: "0",
    dueDate: "01-02-2025",
    paymentDate: "",
    taxAmount: "0",
    status: "declined"
  },
  {
    name: 'Travel Expenses',
    predictedAmount: "1500",
    amountPaid: "1500",
    dueDate: "12-02-2025",
    paymentDate: "12-02-2025",
    taxAmount: "75",
    status: "initiated"
  }
];
 
  return (
    <div className="contianer mx-auto py-10 space-y-5">
      <DataTable columns={expenseHeadColumn} data={data1} searchTextPlaceholder="Filter by (expense head,frequency,category)"/>
      <DataTable columns={expenditureListColumn} data={data2} searchTextPlaceholder="Filter by (expense head,frequency,category)"/>
    </div>
  )
}