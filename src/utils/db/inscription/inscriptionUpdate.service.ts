import prisma from "../prisma";

export default async function inscriptionUpdate(search_params: { job: string, user_email: string }, new_inscription_data: any) {
    const inscription = await prisma.inscriptions.update({
        where: {
            job_user_email: {
                job: search_params.job,
                user_email: search_params.user_email
            }
        },
        data: {
            v: new_inscription_data.v,
            // createdAt: new_inscription_data.createdAt,
            // date: new_inscription_data.date,
            job: new_inscription_data.job,
            status: new_inscription_data.status,
            updatedAt: new_inscription_data.updatedAt,
            user_email: new_inscription_data.user_email
        },
    });

    return inscription;
}