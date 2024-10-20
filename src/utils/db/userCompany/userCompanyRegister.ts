import prisma from "../prisma";

export default async function authCompanyRegister(
    username: string,
    password: string,
    email: string,
) {
    const newUser = await prisma.usersCompany.create({
        data: {
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
