import { useMemo, useState } from "react";
import type { GalleryImage, GalleryCategory } from "../data/gallery";

export type GalleryFilterOption = "All" | GalleryCategory;

export function useGalleryFilter(images: GalleryImage[]) {
  const [filter, setFilter] = useState<GalleryFilterOption>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return images;
    return images.filter((img) => img.category === filter);
  }, [images, filter]);

  return { filter, setFilter, filtered };
}
