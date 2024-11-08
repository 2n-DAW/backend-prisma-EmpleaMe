import { usersCompany } from "@prisma/client";
import prisma from "../prisma";

export default async function authCompanyRegister(
    username: string,
    password: string,
    email: string,
    userId: string
): Promise<usersCompany> {
    const newUser = await prisma.usersCompany.create({
        data: {
            userId,
            username,
            password,
            email,
            bio: "",
            image: "",
            favouriteJobs: [],
            followingUsers: [],
            company: "",
            createdAt: new Date(),
            updatedAt: new Date()
        },

    });
    return newUser;
}
