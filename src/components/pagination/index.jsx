import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export const Pagination = ({
  startData,
  endData,
  total,
  currentPage,
  totalPage,
  onClickPrevData,
  onClickNextData,
}) => {
  return (
    <section className="w-full border-t py-3">
      <div className="flex items-center justify-between">
        <section>
          <p className="text-sm font-semibold text-N3">{`Showing ${startData} - ${endData} of ${total} result`}</p>
        </section>

        <section>
          <ul className="flex items-center">
            <li onClick={onClickPrevData} className="px-3 py-1.5">
              <span>
                <ArrowBackIosNewRoundedIcon
                  className="cursor-pointer text-N3 hover:text-P4 active:scale-95"
                  fontSize="small"
                />
              </span>
            </li>

            <li>
              <span className="px-3 py-1.5 text-sm">{currentPage}</span>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <span className="px-3 py-1.5 text-sm">{totalPage}</span>
            </li>

            <li onClick={onClickNextData} className="px-3 py-1.5">
              <span>
                <ArrowForwardIosRoundedIcon
                  className="cursor-pointer text-N3 hover:text-P4 active:scale-95"
                  fontSize="small"
                />
              </span>
            </li>
          </ul>
        </section>

        <section>
          <p className="text-sm font-semibold text-N3">{`Showing ${startData} - ${endData} of ${total} result`}</p>
        </section>
      </div>
    </section>
  );
};
