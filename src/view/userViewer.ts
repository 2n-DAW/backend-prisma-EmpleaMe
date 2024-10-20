import { usersCompany } from "@prisma/client";

export default function userViewer(user: usersCompany) {
  const userView = {
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      image: user.image,
    },
  };
  return userView;
}

export function userLoginViewer(user: usersCompany, token: string) {
  const userView = {
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      image: user.image,
      token: token,
      company: user.company,
    },
  };
  return userView;
}