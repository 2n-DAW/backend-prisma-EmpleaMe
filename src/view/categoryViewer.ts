import { Category } from "../utils/types/category";

export default function categoryViewer(
  category: Category
) {
  const categoryView = {
    id: category.id,
    id_cat: category.id_cat,
    category_name: category.category_name,
    image: category.image,
    slug: category.slug,
    jobs: category.jobs
  };
  return categoryView;
}