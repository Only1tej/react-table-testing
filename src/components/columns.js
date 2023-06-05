import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    sticky: "left",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    sticky: "left",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/mm/yyyy");
    },
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];

// For the normal columns used in the other table types except for sticky table

// export const COLUMNS = [
//   {
//     Header: "Id",
//     Footer: "Id",
//     accessor: "id",
//     Filter: ColumnFilter,
//     disableFilters: true,
//   },
//   {
//     Header: "First Name",
//     Footer: "First Name",
//     accessor: "first_name",
//   },
//   {
//     Header: "Last Name",
//     Footer: "Last Name",
//     accessor: "last_name",
//   },
//   {
//     Header: "Date of Birth",
//     Footer: "Date of Birth",
//     accessor: "date_of_birth",
//     Cell: ({ value }) => {
//       return format(new Date(value), "dd/mm/yyyy");
//     },
//   },
//   {
//     Header: "Country",
//     Footer: "Country",
//     accessor: "country",
//   },
//   {
//     Header: "Phone",
//     Footer: "Phone",
//     accessor: "phone",
//   },
// ];
