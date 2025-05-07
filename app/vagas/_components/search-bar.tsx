"use client";
import { Input } from "@/components/ui/input";
import { Loader2, SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";

export function SearchBar() {
  const [isPending, startTransition] = useTransition();
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

    startTransition(() => {
      router.replace(`?${urlSearchParams.toString()}`);
    });
  };

  //Using debounce to avoid too many requests
  const handleOnSubmitDebounced = useDebouncedCallback(
    (e) => handleOnChange(e),
    500
  );

  return (
    <Input
      icon={
        isPending ? (
          <Loader2 size={22} className="text-zinc-400 animate-spin" />
        ) : (
          <SearchIcon size={22} className="text-zinc-400" />
        )
      }
      className="mb-8 text-base text-zinc-700 font-medium placeholder:text-zinc-400 "
      placeholder="Busque por vagas"
      defaultValue={previousSearchText}
      onChange={handleOnSubmitDebounced}
    />
  );
}
