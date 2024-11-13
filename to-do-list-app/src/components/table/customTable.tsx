import 'react-data-grid/lib/styles.css';

import DataGrid, {SortColumn} from 'react-data-grid';
import useSortColumn from "./hook/useSortColumn.ts";

export interface TableColumn{
    key: string;
    name: string;
    sortable?:boolean;
}

interface CustomTableProps {
    columns: TableColumn[];
    rows: { [key: string]: any }[];
    handleSortChange?: (sortColumns: SortColumn[]) => void;
}

function CustomTable({
    columns,
    rows,
                         handleSortChange
                     }:CustomTableProps) {


 const {sortColumns,onSortColumnsChange}  = useSortColumn(handleSortChange)

    return (
        <DataGrid
            defaultColumnOptions={{ width: '1fr' }}
            sortColumns={sortColumns}
            onSortColumnsChange={onSortColumnsChange}
        columns={columns}
        rows={rows}
        />
    );
}

export default CustomTable;
