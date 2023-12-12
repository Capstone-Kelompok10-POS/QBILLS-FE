import { Checkbox, IconButton, Table } from "@/components";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TableSection = ({
  currentData,
  selectedRow,
  handleCheckbox,
  handleEdit,
  handleDelete,
  handleToggleUpdateStock,
}) => {
  const tableHead = [
    "Checkbox",
    "Code",
    "Name",
    "Category",
    "Ingredients",
    "price",
    "size",
    "stock",
    "Action",
  ];
  return (
    <section className="max-h-[60vh] min-h-[60vh] overflow-scroll rounded-lg border border-N2">
      <Table tableHead={tableHead}>
        {currentData?.map((row, index) => (
          <tr key={index} className={`${index % 2 === 0 ? "bg-N1" : "bg-N2.2"}`}>
            {/* Main Row */}
            <td className="px-4 py-2 text-center">
              <div className="flex items-center justify-center">
                <Checkbox
                  checked={selectedRow.includes(row.Id)}
                  onChange={() => handleCheckbox(row.Id)}
                />
              </div>
            </td>

            <td className="cursor-pointer px-4 py-2 text-center">{row.Id}</td>

            <td className="cursor-pointer px-4 py-2 text-center">{row.name}</td>

            <td className="px-4 py-2 text-center">{row.productType.typeName}</td>

            <td className="px-4 py-2 text-center">{row.ingredients}</td>

            {/* Price Column */}
            <td className="px-4 py-2 text-center">
              {row.productDetail.length > 0 &&
                row.productDetail.map((detail, index) => (
                  <div key={index}>{`Price: ${detail.price}`}</div>
                ))}
            </td>

            {/* Size Column */}
            <td className="px-4 py-2 text-center">
              {row.productDetail.length > 0 &&
                row.productDetail.map((detail, index) => (
                  <div key={index}>{`Size: ${detail.size}`}</div>
                ))}
            </td>

            {/* Stock Column */}
            <td className="px-4 py-2 text-center">
              {row.productDetail.length > 0 &&
                row.productDetail.map((detail, index) => (
                  <div key={index}>{`Stock: ${detail.totalStock}`}</div>
                ))}
            </td>

            <td className="flex items-center justify-center gap-2 px-4 py-2">
              <IconButton
                size={"sm"}
                color={"success"}
                icon={<EditIcon fontSize="small" />}
                onClick={() => handleEdit(row.Id)}
              />
              <IconButton
                size={"sm"}
                color={"error"}
                icon={<DeleteIcon fontSize="small" />}
                onClick={() => handleDelete(row.Id)}
              />
              <IconButton
                size={"sm"}
                icon={<MoreVertIcon fontSize="small" />}
                variant={"outline"}
                onClick={() => handleToggleUpdateStock(row.Id)}
              />
            </td>
          </tr>
        ))}
      </Table>
    </section>
  );
};

export default TableSection;
