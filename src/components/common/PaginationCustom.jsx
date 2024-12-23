import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function PaginationCustom() {
  return (
    <Pagination>
      <PaginationContent className="flex items-center gap-3">
        <PaginationItem>
        <IoIosArrowBack />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="pagination-link" href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="pagination-link" href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="pagination-link" href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="pagination-link" />
        </PaginationItem>
        <PaginationItem>
        <IoIosArrowForward />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationCustom;
