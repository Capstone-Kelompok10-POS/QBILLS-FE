import React from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
export const ComponentPagination = () => {
  return (
    <div className="w-full">
      <hr className="my-3" />
      <div className="flex items-center">
        <div className="me-auto">
          <p>Showing 1 - 9 of 34 result</p>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="list-style-none mx-auto flex">
            <li>
              <a
                class="relative block rounded bg-transparent px-3 py-1.5 text-sm"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">
                  <ArrowBackIosNewRoundedIcon className="text-sm text-N3 active:text-P4" />
                </span>
              </a>
            </li>
            <li>
              <a
                class="relative block rounded bg-transparent px-3 py-1.5 text-sm active:text-P4"
                href="#"
              >
                1
              </a>
            </li>
            <li aria-current="page">
              <a
                class="relative block rounded bg-transparent px-3 py-1.5 text-sm active:text-P4"
                href="#"
              >
                2
              </a>
            </li>
            <li>
              <a
                class="relative block rounded bg-transparent px-3 py-1.5 text-sm active:text-P4"
                href="#"
              >
                3
              </a>
            </li>
            <li>
              <a
                class="relative block rounded bg-transparent px-3 py-1.5 text-sm active:text-P4"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">
                  <ArrowForwardIosRoundedIcon className="text-sm text-N3 active:text-P4" />
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="ms-auto">
          <p>Showing 1 - 9 of 34 result</p>
        </div>
      </div>
    </div>
  );
};
