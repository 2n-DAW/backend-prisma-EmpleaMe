import { jobs } from "@prisma/client";

export default function jobViewer(
    job: jobs
) {
    const jobView = {
        id: job.id,
        id_cat: job.id_cat,
        id_contract: job.id_contract,
        id_province: job.id_province,
        id_workingDay: job.id_workingDay,
        author: job.author,
        comments: job.comments,
        createdAt: job.createdAt,
        description: job.description,
        favouritesCount: job.favouritesCount,
        images: job.images,
        img: job.img,
        name: job.name,
        salary: job.salary,
        slug: job.slug,
        updatedAt: job.updatedAt
    }


    return jobView;
}