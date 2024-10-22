import prisma from "../prisma";
import slugfy from "../../slugfy";

export default async function createJob(
    author: string,
    name: string,
    description: string,
    salary: number,
    images: string[],
    img: string,
    id_cat: string,
    id_contract: string,
    id_workingDay: string,
    id_province: string,
) {
    const slug = slugfy(name) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);

    const newJob = await prisma.jobs.create({
        data: {
            author: author,
            comments: [],
            createdAt: new Date(),
            description: description,
            favouritesCount: 0,
            id_cat: id_cat,
            id_contract: id_contract,
            id_province: id_province,
            id_workingDay: id_workingDay,
            images: images,
            img: img,
            name: name,
            salary: salary,
            slug: slug,
            updatedAt: new Date(),
            v: 1
        },
    });

    return newJob;
}