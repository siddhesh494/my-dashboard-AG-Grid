**Overview**

This repository contains a clean, responsive React dashboard that uses **AG Grid (client-side)** to display tabular data. The grid is configured for production-like usage: sorting, filtering, pagination, column resizing/reordering, row selection, CSV export, and performance-friendly settings for large datasets.

---

## Quick summary of what I built

* React (Vite) app
* AG Grid (community) integration with a reusable `DataGrid` component
* Client-side rendering with pagination, column filters, sorting, and CSV export
* Simple, professional layout and responsive behavior

---

## Folder structure

```
my-dashboard/
├─ README.md
├─ package.json
├─ public/
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ components/
│  │  └─ DataGrid.jsx
│  └─ data/
│     └─ sample-data.json
└─ .gitignore
```

---

## Getting started (setup)

1. **Create the project (Vite + React)**

```bash
# using npm
npm create vite@latest my-dashboard -- --template react
cd my-dashboard
```

2. **Install dependencies**

```bash
npm install ag-grid-community ag-grid-react
```

3. **Install dev server and run**

```bash
npm install
npm run dev
# open http://localhost:5173
```
