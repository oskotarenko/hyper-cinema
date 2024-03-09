"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDebounceValue } from "usehooks-ts";

export function SearchInput() {
  const router = useRouter();
  const { register, setFocus, getFieldState, setValue } = useForm();
  const [search, setSearch] = useDebounceValue("", 500);

  useEffect(() => {
    const isDirty = getFieldState("search-field").isDirty;

    if (!search && !isDirty) return;
    else if (!search) router.push("/movies");
    else router.push(`/movies?search=${search}`);
  }, [search, getFieldState, router]);

  const handleReset = () => {
    setValue("search-field", "");
    setSearch("");
  };

  return (
    <div
      className="flex flex-1 gap-2 bg-gray px-3 py-2 rounded-lg w-full tablet:w-1/2 tablet:max-w-[50%] cursor-text"
      onClick={() => setFocus("search-field")}
    >
      <Search className="min-w-[24px] min-h-[24px]" />
      <input
        className="text-sm md:text-base bg-gray outline-none w-full"
        {...register("search-field", {
          onChange: (e) => setSearch(e.target.value),
        })}
        placeholder="Type for Search..."
        autoComplete="off"
      />
      {search && (
        <button onClick={handleReset}>
          <X />
        </button>
      )}
    </div>
  );
}
