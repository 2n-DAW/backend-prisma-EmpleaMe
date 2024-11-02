import prisma from "../prisma";

export default async function inscriptionsList(jobs: { slug: string }[]) {
    const jobSlugs = jobs.map(job => job.slug);

    const inscriptions = await prisma.inscriptions.findMany({
        where: {
            job: {
                in: jobSlugs,
            },
        },
    });

    return inscriptions;
}
