"use client";
import { Button, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { AddComponents } from "./_components/_add";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24 gap-10">
      <AddComponents />
      <h2>User List</h2>
      <Table>
        <TableHeader>
          <Button>Add</Button>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nama Lengkap</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </main>
  );
}
