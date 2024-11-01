import prisma from "../prisma";

export default async function inscriptionSearch(search_params: { job: string, user_email: string }) {
    const inscription = await prisma.inscriptions.findFirst({
        where: {
            job: search_params.job,
            user_email: search_params.user_email,
        },
    });
    return inscription;
}