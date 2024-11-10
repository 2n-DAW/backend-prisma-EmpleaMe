import { inscriptions } from "@prisma/client";
import prisma from "../prisma";

export default async function inscriptionsList(jobs: { slug: string }[]): Promise<inscriptions[]> {
    const jobSlugs = jobs.map(job => job.slug);

    const inscriptions = await prisma.inscriptions.findMany({
        where: {
            job: { in: jobSlugs }
        },
    });

    return inscriptions;
}