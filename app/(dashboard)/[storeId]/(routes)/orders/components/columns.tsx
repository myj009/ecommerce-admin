"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColumns = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumns>[] = [
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
    cell: ({ row }) => (
      <div className="flex items-center">
        <span
          className={`h-2 w-2 mr-2 rounded-full ${
            row.original.isPaid ? "bg-green-500" : "bg-red-500"
          }`}
        />
        {row.original.isPaid ? "Yes" : "No"}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
