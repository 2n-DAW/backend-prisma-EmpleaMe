import prisma from "../prisma";
import slugfy from "../../functions/slugfy";

export default async function createCategoryPrisma(
  id_cat: string,
  category_name: string,
  image: string,
) {
  const slug = slugfy(category_name) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
  const newCategory = await prisma.categories.create({
    data: {
      id_cat,
      category_name,
      image,
      slug: slug,
      jobs: []
    },
  });
  return newCategory;
}
