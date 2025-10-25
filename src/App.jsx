import React, { useMemo } from 'react';
import DataGrid from './components/DataGrid';
import sampleRows from './data/sample-data.json';
import './App.css';


export default function App() {
  const columns = useMemo(() => {
    if (!sampleRows?.employees?.length) return [];

    return Object.keys(sampleRows.employees[0]).map((key) => {
      return {
        headerName: key
          .replace(/([A-Z])/g, ' $1') // Add space before capital letters
          .replace(/^./, (str) => str.toUpperCase()), // Capitalize first letter
        field: key,
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        cellRenderer: (params) => {
          const value = params.value;
          // Custom rendering for arrays or objects
          if (Array.isArray(value)) return value.join(', ');
          if (typeof value === 'boolean') return value ? '✅' : '❌';
          return value ?? '-';
        },
      };
    });
  }, []);

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="brand">
          <img src="/vite.svg" alt="logo" className="brand-logo" />
          <div>
            <h1>FactWise</h1>
            <p className="subtitle">AG Grid Dashboard — Client-side demo</p>
          </div>
        </div>
      </header>

      <main className="app-content">
        <section className="card">
          <DataGrid columns={columns} rows={sampleRows.employees} />
        </section>
      </main>
    </div>
  );
}