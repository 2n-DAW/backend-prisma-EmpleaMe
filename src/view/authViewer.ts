import { authsCompany } from "@prisma/client";

export default function userViewer(user: authsCompany) {
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
