import React, { useMemo } from 'react';
import DataGrid from './components/DataGrid';
import sampleRows from './data/sample-data.json';


export default function App() {
  const columns = useMemo(() => {
    if (!sampleRows.employees.length) return [];

    return Object.keys(sampleRows.employees[0]).map((key) => {
      return {
        headerName: key
          .replace(/([A-Z])/g, " $1") // Add space before capital letters
          .replace(/^./, (str) => str.toUpperCase()), // Capitalize first letter
        field: key,
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        cellRenderer: (params) => {
          const value = params.value;
          // Custom rendering for arrays or objects
          if (Array.isArray(value)) return value.join(", ");
          if (typeof value === "boolean") return value ? "✅" : "❌";
          return value ?? "-";
        },
      };
    });
  }, [sampleRows]);

  return (
    <div style={{ padding: 16 }}>
      <h2>FactWise - AG Grid Dashboard (Client-side)</h2>
      <DataGrid columns={columns} rows={sampleRows.employees} />
    </div>
  );
}