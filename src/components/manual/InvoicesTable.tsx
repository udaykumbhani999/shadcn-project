import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Filter, Search } from "lucide-react";

const invoices = [
  {
    project: "ABC|Design",
    projectModel: "Hourly",
    clientName: "Landon Smith",
    refEmail: "john@abc.com",
    invoiceCycle: "Monthly",
    payModel: "Postpaid",
    accType: "End Client",
  },
  {
    project: "ABC|Design",
    projectModel: "Fixed",
    clientName: "Cody Fisher",
    refEmail: "john@abc.com",
    invoiceCycle: "Weekly",
    payModel: "Prepaid",
    accType: "Partner",
  },
  {
    project: "ABC|Design",
    projectModel: "Hourly",
    clientName: "Brooklyn Simmons",
    refEmail: "john@abc.com",
    invoiceCycle: "Bi-Weekly",
    payModel: "Postpaid",
    accType: "Partner",
  },
  {
    project: "ABC|Design",
    projectModel: "Dedicated",
    clientName: "Leslie Alexander",
    refEmail: "john@abc.com",
    invoiceCycle: "SprintEnd",
    payModel: "Prepaid",
    accType: "Partner",
  },
  {
    project: "ABC|Design",
    projectModel: "Hourly",
    clientName: "Cameron Williamson",
    refEmail: "john@abc.com",
    invoiceCycle: "15-Days",
    payModel: "Postpaid",
    accType: "End Client",
  },
  {
    project: "ABC|Design",
    projectModel: "Mixed",
    clientName: "Jacob Jones",
    refEmail: "john@abc.com",
    invoiceCycle: "Monthly",
    payModel: "Postpaid",
    accType: "End Client",
  },
  {
    project: "ABC|Design",
    projectModel: "T&M Retainer",
    clientName: "Arlene McCoy",
    refEmail: "john@abc.com",
    invoiceCycle: "Monthly",
    payModel: "Prepaid",
    accType: "Partner",
  },
  {
    project: "ABC|Design",
    projectModel: "Fixed",
    clientName: "Floyd Miles",
    refEmail: "john@abc.com",
    invoiceCycle: "Weekly",
    payModel: "Prepaid",
    accType: "End Client",
  },
  {
    project: "ABC|Design",
    projectModel: "Dedicated",
    clientName: "Devon Lane",
    refEmail: "john@abc.com",
    invoiceCycle: "Bi-Weekly",
    payModel: "Postpaid",
    accType: "Partner",
  },
  {
    project: "ABC|Design",
    projectModel: "Fixed",
    clientName: "Bessie Cooper",
    refEmail: "john@abc.com",
    invoiceCycle: "15-Days",
    payModel: "Postpaid",
    accType: "Partner",
  },
  {
    project: "ABC|Design",
    projectModel: "Dedicated",
    clientName: "Jane Cooper",
    refEmail: "john@abc.com",
    invoiceCycle: "15-Days",
    payModel: "Postpaid",
    accType: "Partner",
  },
  {
    project: "ABC|Design",
    projectModel: "Dedicated",
    clientName: "Dianne Russell",
    refEmail: "john@abc.com",
    invoiceCycle: "SprintEnd",
    payModel: "Prepaid",
    accType: "End Client",
  },
  {
    project: "ABC|Design",
    projectModel: "Mixed",
    clientName: "Savannah Nguyen",
    refEmail: "john@abc.com",
    invoiceCycle: "Monthly",
    payModel: "Prepaid",
    accType: "End Client",
  },
  {
    project: "ABC|Design",
    projectModel: "Mixed",
    clientName: "Guy Hawkins",
    refEmail: "john@abc.com",
    invoiceCycle: "SprintEnd",
    payModel: "Prepaid",
    accType: "End Client",
  },
];

export function InvoicesTable() {
 const [filter, setFilter] = useState("");

  const filtered = invoices.filter(
    (inv) =>
      inv.project.toLowerCase().includes(filter.toLowerCase()) ||
      inv.projectModel.toLowerCase().includes(filter.toLowerCase()) ||
      inv.clientName.toLowerCase().includes(filter.toLowerCase()) ||
      inv.refEmail.toLowerCase().includes(filter.toLowerCase()) ||
      inv.invoiceCycle.toLowerCase().includes(filter.toLowerCase()) ||
      inv.payModel.toLowerCase().includes(filter.toLowerCase()) ||
      inv.accType.toLowerCase().includes(filter.toLowerCase())
  );
  // Helper for sort icon
  const SortIcon = () => (
    <span className="inline-flex flex-col ml-1">
      <ChevronUp className="w-3 h-3 text-gray-700 -mb-1" />
      <ChevronDown className="w-3 h-3 text-gray-700 -mt-1" />
    </span>
  );
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="relative max-w-[140px]">
          <Input
            placeholder="Search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-8 pl-2 pr-10 border-gray-300 focus:border-gray-400 bg-white text-black placeholder-black"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4  pointer-events-none text-black" />
        </div>
        <div className="flex align-center gap-3">
          <Button className="bg-[#F75C5C] text-white hover:bg-[#d94444] cursor-pointer">
            Add New Project
          </Button>
          <Button
            variant="ghost"
            className="w-10 h-10 p-0 rounded-xl bg-[#F5F6F7] hover:bg-[#ececec] flex items-center justify-center cursor-pointer"
            aria-label="Filter"
          >
            <Filter className="w-6 h-6 text-gray-700" />
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead>
              Project <SortIcon />
            </TableHead>
            <TableHead>
              Project Model <SortIcon />
            </TableHead>
            <TableHead>
              Client Name <SortIcon />
            </TableHead>
            <TableHead>Ref Email</TableHead>
            <TableHead>
              Invoice Cycle <SortIcon />
            </TableHead>
            <TableHead>
              Pay Model <SortIcon />
            </TableHead>
            <TableHead>
              Acc Type <SortIcon />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.length ? (
            filtered.map((inv, idx) => (
              <TableRow key={idx}>
                <TableCell>{inv.project}</TableCell>
                <TableCell>{inv.projectModel}</TableCell>
                <TableCell>{inv.clientName}</TableCell>
                <TableCell>{inv.refEmail}</TableCell>
                <TableCell>{inv.invoiceCycle}</TableCell>
                <TableCell>{inv.payModel}</TableCell>
                <TableCell>{inv.accType}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-gray-400">
                No data found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
