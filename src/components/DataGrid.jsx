import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([AllCommunityModule]);


export default function DataGrid(
  { columns, rows }
) {
  const gridRef = useRef();

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    flex: 1,
  };

  const onExport = () => {
    gridRef.current.api.exportDataAsCsv();
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ marginBottom: 10, display: 'flex', gap: 8 }}>
        <button onClick={onExport}>Export CSV</button>
      </div>

      <div className="ag-theme-alpine" style={{ height: '70vh', width: '100%' }}>
        <AgGridReact
          theme={"legacy"}
          ref={gridRef}
          rowData={rows}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          rowSelection="single"
          pagination={true}
          paginationPageSize={20}
          animateRows={true}
          domLayout="normal"
        />
      </div>
    </div>
  );
}