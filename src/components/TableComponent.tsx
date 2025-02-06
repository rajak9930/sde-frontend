import React from "react";
import { Table } from "@mantine/core";

const data = [
  { year: 1950, maxCrop: "ABC", minCrop: "XYZ" },
  { year: 1951, maxCrop: "PQR", minCrop: "LMN" },
  { year: 1952, maxCrop: "DEF", minCrop: "UVW" },
  { year: 1955, maxCrop: "DEDF", minCrop: "UVWZ" },
];

const TableComponent: React.FC = () => {

    const rows = data.map((element,index) => (
        <Table.Tr key={index}>
          <Table.Td>{element.year}</Table.Td>
          <Table.Td>{element.maxCrop}</Table.Td>
          <Table.Td>{element.minCrop}</Table.Td>
         
        </Table.Tr>
      ));
  return (
    <Table striped highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Year</Table.Th>
          <Table.Th>Crop with Maximum Production in that Year</Table.Th>
          <Table.Th>Crop with Minimum Production in that Year</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default TableComponent;
