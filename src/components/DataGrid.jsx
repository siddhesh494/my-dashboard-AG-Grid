import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { useRef, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

ModuleRegistry.registerModules([AllCommunityModule]);


export default function DataGrid({ columns, rows }) {
  const gridRef = useRef(null);

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    flex: 1,
  };

  const onExport = useCallback(() => {
    gridRef.current?.api?.exportDataAsCsv();
  }, []);

  return (
    <div className="data-grid-root">
      <div className="toolbar">
        <div className="actions">
          <button className="btn primary" onClick={onExport} title="Export CSV">⬇️ Export</button>
        </div>
      </div>

      <div className="ag-theme-alpine grid-wrap">
        <AgGridReact
          // theme={"legacy"}
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