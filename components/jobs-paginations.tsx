import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Meta } from "@/lib/types";

interface PaginationProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  meta: Meta;
}

export default async function JobsPagination({
  searchParams,
  meta,
}: PaginationProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page || "1");

  const { last_page } = meta;

  const creatPageUrl = (pageNumber: number) => {
    const urlSearhParams = new URLSearchParams();
    if (pageNumber) {
      urlSearhParams.set("page", pageNumber.toString());
    }

    if (resolvedSearchParams.search) {
      urlSearhParams.set("search", resolvedSearchParams.search as string);
    }
    return `?${urlSearhParams.toString()}`;
  };

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`${
              currentPage === 1
                ? "disabled cursor-not-allowed text-zinc-300"
                : ""
            }`}
            href={creatPageUrl(currentPage - 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{currentPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={`${
              currentPage === last_page
                ? "disabled cursor-not-allowed text-zinc-300"
                : ""
            }`}
            href={creatPageUrl(
              currentPage < last_page ? currentPage + 1 : last_page
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
