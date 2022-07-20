interface TableProps {
  children: React.ReactNode;
}

export const Table = ({ children, ...props }: TableProps) => {
  return (
    <div className="overflow-x-auto relative mb-4 rounded-t-lg">
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        {children}
      </table>
    </div>
  );
};

export const TableRow = ({ children, ...props }: TableProps) => {
  return (
    <tr className=" border-b dark:border-gray-700 last:border-none" {...props}>
      {children}
    </tr>
  );
};

export const TableBody = ({ children, ...props }: TableProps) => {
  return (
    <tbody className="bg-white dark:bg-slate-800" {...props}>
      {children}
    </tbody>
  );
};

export const TableHead = ({ children, ...props }: TableProps) => {
  return (
    <thead
      className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      {...props}
    >
      {children}
    </thead>
  );
};

export const HeaderCell = ({ children, ...props }: TableProps) => {
  return (
    <th className="py-3 px-6" scope="col" {...props}>
      {children}
    </th>
  );
};

export const Cell = ({ children, ...props }: TableProps) => {
  return (
    <td className="py-4 px-6 bg-white dark:bg-gray-800" scope="col" {...props}>
      {children}
    </td>
  );
};
