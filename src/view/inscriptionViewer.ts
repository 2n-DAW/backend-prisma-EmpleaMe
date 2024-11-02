export default function inscriptionViewer(inscription: any) {
    return {
        id: inscription.id,
        job: inscription.job,
        user_email: inscription.user_email,
        status: inscription.status,
        date: inscription.date,
    };
}