import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Bell, CircleCheck, CircleCheckBigIcon, CircleMinus, Clock, MoreHorizontal } from "lucide-react";

export type ExpensesHeadType = {
    name: string;
    description: string;
    frequency: 'yearly' | 'monthly';
    category: CategoryTypes;
    taxable: boolean;
};

type CategoryTypes = 'technical'| 'inventory' | 'maintenance';

export const expenseHeadColumn: ColumnDef<ExpensesHeadType>[] = [
    {
        accessorKey:'name',
        header: 'Expense Head'
    },
    {
        accessorKey: 'description',
        header: 'Description'
    },
    {
        accessorKey: 'frequency',
        header: 'Frequency'
    },
    {
        accessorKey: 'category',
        header: 'Category'
    },
    {
        accessorKey: 'taxable',
        header: 'Taxable'
    },
    {
        accessorKey: 'actions',
        header:'Actions',
        cell: ()=>{
            return (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>
                Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            )
        }
    }
]

export type ExpenditureListItem = {
    name: string,
    predictedAmount: string,
    amountPaid: string,
    dueDate: string,
    paymentDate: string,
    taxAmount: string,
    status: ExpenditureStatus
}

type ExpenditureStatus = 'created' | 'initiated' | 'approved' | 'declined' | 'tax-done' | 'payment-done'

export const expenditureListColumn :  ColumnDef<ExpenditureListItem>[] = [
    {
        accessorKey: 'checkbox',
        header: ({ table }) => (
                <Checkbox
                    className="mr-2"
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
        ),
            cell: ({ row }) => (
                    <Checkbox
                        className="mr-2"
                        checked={row.getIsSelected()}
                        onCheckedChange={(value) => row.toggleSelected(!!value)}
                        aria-label="Select row"
                    />
              ),
    },
    {
        accessorKey:'name',
        header: 'Expenditure Name'
    },
    {
        accessorKey:'predictedAmount',
        header: 'Predicted Amount (INR)'
    },  
    {
        accessorKey:'amountPaid',
        header: 'Amount Paid (INR)'
    },
    {
        accessorKey:'dueDate',
        header: 'Due Date'
    },
    {
        accessorKey: 'paymentDate',
        header: 'Payment Date'
    },
    {
        accessorKey: 'taxAmount',
        header: 'Tax(INR)'
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell:({row})=>{
            const status = row.original.status;
            return (
                <div className="flex items-center justify-center">
                    {getStatusCheckComponent(status)}
                </div>
            );
        }
    }
]
const getStatusCheckComponent = (status: ExpenditureStatus) => {
    switch (status) {
        case 'created':
                return <Bell className="scale-50"/>;
        case 'initiated':
                return <Clock className="scale-50 text-amber-500"/>;
        case 'approved':
                return <CircleCheck className="scale-50 text-blue-500"/>;
        case 'declined':
                return <CircleMinus className="scale-50 text-red-500"/>
        case 'tax-done':
                return  <CircleCheckBigIcon className="scale-50 text-green-300"/>
        case 'payment-done':
                return  <CircleCheck className="scale-50 text-green-500"/>
        default:
                return null;
    }
}