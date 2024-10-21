import prisma from "../prisma";

export default async function findOneJob(data: any) {
    const job = await prisma.jobs.findFirst({
        where: {
            ...data
        }
    });

    return job;
}
