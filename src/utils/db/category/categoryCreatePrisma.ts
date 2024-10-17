// import { jobs } from "@prisma/client";
import prisma from "../prisma";
import slugfy from "../../slugfy";

export default async function commentCreatePrisma(
  idCat: number,
  categoryName: string,
  image: string
  // jobs: jobs[];
) {
  const slug = slugfy(categoryName) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
  const category = await prisma.category.create({
    data: { idCat, categoryName, image, slug: slug },
    // include: { jobs: { include: { followedBy: true } } },
  });
  return category;
}
