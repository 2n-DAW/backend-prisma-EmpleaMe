import { jobs } from "@prisma/client";
import prisma from "../prisma";

export default async function findOneJob(data: any): Promise<jobs | null> {
    const job = await prisma.jobs.findFirst({
        where: {
            ...data
        }
    });

    return job;
}
