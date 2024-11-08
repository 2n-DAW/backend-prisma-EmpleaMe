import prisma from "../prisma";


export default async function updateJob(serarch_params: any, new_job_data: any) {

    const job = await prisma.jobs.update({
        where: {
            slug: serarch_params.slug,
        },
        data: {
            ...new_job_data,
        },
    });
    return job;
}
