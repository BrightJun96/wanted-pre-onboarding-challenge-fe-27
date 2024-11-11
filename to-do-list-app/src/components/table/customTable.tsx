import 'react-data-grid/lib/styles.css';
import {useCallback, useState} from "react";

import DataGrid, {SortColumn} from 'react-data-grid';

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

    const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);

    const onSortColumnsChange = useCallback((sortColumns: SortColumn[]) => {
        if (handleSortChange) {
            handleSortChange(sortColumns);
        }
        setSortColumns(sortColumns.slice(-1));
    }, []);

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
