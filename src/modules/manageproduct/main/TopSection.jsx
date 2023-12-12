import { Button, Input } from "@/components";
import SearchIcon from "@mui/icons-material/Search";

const TopSection = ({ search, setSearch, handleDeleteSelected, selectedRowCount, handleAdd }) => {
  return (
    <section className="flex w-full items-center gap-5">
      <h2 className="mr-auto text-2xl font-semibold">List Product</h2>

      <div className="w-96">
        <Input
          type={"text"}
          size={"sm"}
          label={"Search Product"}
          name={"search"}
          value={search}
          endIcon={<SearchIcon sx={{ fontSize: 30 }} />}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex gap-5">
        <Button
          onClick={handleDeleteSelected}
          size={"md"}
          label={`Delete (${selectedRowCount})`}
          color={"error"}
          disabled={selectedRowCount === 0}
        />
        <div className="w-52">
          <Button onClick={handleAdd} size={"md-full"} label={"Add product"} />
        </div>
      </div>
    </section>
  );
};

export default TopSection;
