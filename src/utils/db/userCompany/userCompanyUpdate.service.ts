import prisma from "../prisma";
import { usersCompany } from "@prisma/client";

export default async function userCompanyUpdate(
    user: usersCompany
): Promise<usersCompany> {
    const updatedUser = await prisma.usersCompany.update({
        where: {
            id: user.id,
        },
        data: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            image: user.image,
            company: user.company,
            password: user.password
        },
    });
    return updatedUser;

}
