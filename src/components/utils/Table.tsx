import { useState } from "react";

interface TableProps<T> {
    columns: Array<keyof T>;
    data: T[];
    emptyMessage?: string;
    rowsPerPage?: number;
    onRowClick?: (row: T) => void;  // Row is of type T
}

const Table = <T extends object>({
    columns,
    data,
    emptyMessage = "No data available",
    rowsPerPage = 10,
    onRowClick,
}: TableProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const filteredData = data.filter(row =>
        columns.some(column =>
            String(row[column]).toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const currentData = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="w-full">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="px-4 py-2 border rounded w-full"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={String(column)}
                                    className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-white"
                                >
                                    {String(column)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="bg-white border-b last:border-0 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => onRowClick?.(row)}
                                >
                                    {columns.map((column) => (
                                        <td
                                            key={String(column)}
                                            className="px-4 py-2 text-sm"
                                            data-label={String(column)}
                                        >
                                            {String(row[column])}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="text-center py-4 text-black"
                                >
                                    {emptyMessage}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-4">
                <span className="max-[650px]:text-[12px]">
                    Showing {currentPage} of {totalPages}
                </span>
                <span className="flex gap-[10px]">
                    <button
                        className="px-4 py-2 bg-gray-200 rounded max-[650px]:px-2 max-[650px]:py-1 max-[650px]:text-[12px]"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-200 rounded max-[650px]:px-2 max-[650px]:py-1 max-[650px]:text-[12px]"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </span>
            </div>
        </div>
    );
};

export default Table;
