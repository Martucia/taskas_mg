"use client";

import { UiLink } from "@/shared/ui/ui-link";
import { UiTitle } from "@/shared/ui/ui-title";
import { useCategoryList } from "../model/use-category-list";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/router";
import { AddCategoryButton } from "./add-category-button";
import { useContext } from "react";
import { SidebarContext } from "@/app/app-layout";

export function CategoryList() {
  const { categories } = useCategoryList();

  const { toggle: toggleSideBar } = useContext(SidebarContext);

  const router = useRouter();
  const { id } = router.query;

  return (
    <nav>
      <UiTitle className="text-lg mb-5">Categories</UiTitle>

      <ul className="flex flex-col gap-7 items-start text-blackT dark:text-whiteT">
        {categories.map((category) => (
          <li className="w-full" key={category.id}>
            <UiLink
              className="w-full justify-start relative"
              href={"/" + category.id}
              onClick={toggleSideBar}
            >
              <Image
                alt="icon"
                width={18}
                height={18}
                src={`/icons/${category.iconPath}`}
              />
              {category.name}

              <div
                className={clsx(
                  String(category.id) === id && "opacity-100",
                  "w-8 h-5 bg-terq rounded-s-3xl absolute right-0 top-0 opacity-0",
                )}
              ></div>
            </UiLink>
          </li>
        ))}

        <li>
          <AddCategoryButton className="flex items-center gap-2.5 text-terq" />
        </li>
      </ul>
    </nav>
  );
}
