"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export function SearchBar() {
  const seachParams = useSearchParams();
  const previousSearchText = seachParams.get("search") || "";
  const router = useRouter();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const urlSearchParams = new URLSearchParams(seachParams);
    const searchText = event.target.value;

    if (searchText) {
      urlSearchParams.set("search", searchText);
    } else {
      urlSearchParams.delete("search");
    }
    router.replace(`?${urlSearchParams.toString()}`);
  };

  //
  const handleOnSubmitDebounced = useDebouncedCallback(
    (e) => handleOnChange(e),
    500
  );

  return (
    <Input
      icon={<SearchIcon size={22} className="text-zinc-400" />}
      className="mb-8 text-base text-zinc-700 font-medium placeholder:text-zinc-400 "
      placeholder="Busque por vagas"
      defaultValue={previousSearchText}
      onChange={handleOnSubmitDebounced}
    />
  );
}
