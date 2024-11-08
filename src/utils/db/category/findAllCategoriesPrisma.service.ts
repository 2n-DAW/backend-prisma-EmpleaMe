import prisma from "../prisma";

export default async function findAllCategoriesPrisma(query: any) {
  const  {offset, limit} = query;
  const categories = prisma.categories.findMany({
    skip: Number(offset) || 0,
    take: Number(limit) || 3
  });
  return categories;
}
