import { inscriptions } from "@prisma/client";

export default function inscriptionViewer(inscription: inscriptions): Partial<inscriptions> {
    return {
        id: inscription.id,
        job: inscription.job,
        user_email: inscription.user_email,
        status: inscription.status,
        createdAt: inscription.createdAt,
    };
}