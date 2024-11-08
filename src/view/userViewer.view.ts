import { users, usersCompany } from "@prisma/client";
import { typeUser } from "../utils/interfaces/typeUser.interface";

export default function userViewer(user: usersCompany): Partial<typeUser>{
  const userView = {
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      image: user.image,
    },
    type: "company"
  };
  return userView;
}

export function userLoginViewer(user: usersCompany, token: string): Partial<typeUser> {
  const userView = {
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      image: user.image,
      company: user.company,
      token: token,
    },
  };
  return userView;
}