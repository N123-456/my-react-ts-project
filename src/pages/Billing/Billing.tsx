import ReactDOM from "react-dom/client";
import { useMemo, useEffect, useState, useReducer } from "react";
import {
  RowModel,
  Table,
  createColumnHelper,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import {
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
type People = {
  id: number;
  name: string;
  username: number;
  email: number;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
const columnHelper = createColumnHelper<People>();

const Billing = () => {
  const COLUMNS = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: () => "Name",
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("username", {
        header: () => "Username",
        cell: (info) => <i>{info.getValue()}</i>,
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("email", {
        header: () => "Email",
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("phone", {
        header: () => "Phone",
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("website", {
        header: () => "Website",
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("address", {
        header: () => "Address",
        cell: (info) => (
          <span>
            {info.row.original.address.street},{info.row.original.address.suite}
            ,{info.row.original.address.city},
            {info.row.original.address.zipcode}
          </span>
        ),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("company", {
        header: () => "Company",
        cell: (info) => (
          <span>
            {info.row.original.company.name},
            {info.row.original.company.catchPhrase},
            {info.row.original.company.bs}
          </span>
        ),
        footer: (info) => info.column.id,
      }),
    ],
    []
  );

  const [data, _setData] = useState<People[]>([]);
  const rerender = useReducer(() => ({}), {})[1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();
        _setData(jsonData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const table = useReactTable({
    columns: COLUMNS,
    data: data,
    getCoreRowModel: getCoreRowModel(),
  });
  
  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  );
};

export default Billing;
