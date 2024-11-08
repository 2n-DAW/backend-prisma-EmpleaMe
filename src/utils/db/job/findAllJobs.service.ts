import prisma from "../prisma";
import { default as isNotUndefined } from "../../functions/utils";

export default async function findAllJobs(query: any) {
    let { limit, offset, category, contract, workingDay, province, name, salary_min, salary_max, author } = query;

    limit = isNotUndefined(limit) ? parseInt(limit) : 3;
    offset = isNotUndefined(offset) ? parseInt(offset) : 0;


    const jobs = await prisma.jobs.findMany({
        where: {
            name: { contains: name },
            ...(category && { id_cat: category }),
            ...(contract && { id_contract: contract }),
            ...(workingDay && { id_workingDay: workingDay }),
            ...(province && { id_province: province }),
            ...(author && { author }),
        },
        skip: offset,
        take: limit,
    });

    return jobs;
}
