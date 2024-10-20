import { authsCompany } from "@prisma/client";

export default function userViewer(user: authsCompany, token: string) {
  const userView = {
    user: {
      email: user.email,
      token: token,
      username: user.username,
      bio: user.bio,
      image: user.image,
    },
  };
  return userView;
}
