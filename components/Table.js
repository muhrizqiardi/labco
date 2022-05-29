function Table({ tableHeaders, tableData }) {
  return (
    <div className="relative border overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            {(tableHeaders ?? ["bebek", "goreng"]).map((header, index) => {
              return (
                <th scope="col" className="px-6 py-3" key={index}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {(tableData ?? []).map((data, i) => {
            return (
              <tr
                className="border-b odd:bg-white even:bg-gray-50"
                key={i}
              >
                {(data ?? []).map((dataItem, j) => {
                  return (
                    <td className="px-6 py-4" key={j}>
                      {dataItem}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
