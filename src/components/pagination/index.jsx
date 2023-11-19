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
          <ul className="flex items-center gap-3">
            <li onClick={onClickPrevData}>
              <span>
                <ArrowBackIosNewRoundedIcon
                  className="cursor-pointer text-N3 hover:text-P4 active:scale-95"
                  fontSize="small"
                />
              </span>
            </li>

            <li>
              <span className="text-sm">{currentPage}</span>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <span className="text-sm">{totalPage}</span>
            </li>

            <li onClick={onClickNextData}>
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
