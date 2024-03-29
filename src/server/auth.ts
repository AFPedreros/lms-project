import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  type DefaultSession,
  type NextAuthOptions,
  getServerSession,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/env";
import { db } from "@/server/db";

type UserRole = "USER" | "ADMIN";

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: UserRole;
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    role: UserRole;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/inicio-sesion",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    session: ({ token, session }) => {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        token.id = user!.id;
        return token;
      }

      return {
        ...token,
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        image: dbUser.image,
        emailVerified: dbUser.emailVerified,
        role: dbUser.role,
      };
    },
    async signIn({ user }) {
      if (user.email) {
        const dbUser = await db.user.findFirst({
          where: {
            email: user.email,
          },
        });

        if (!dbUser) {
          await db.user.create({
            data: {
              id: user.id,
              email: user.email,
              name: user.name,
              image: user.image,
              emailVerified: new Date(),
              role: "USER",
            },
          });
        }
      }

      return true;
    },
  },
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,

      allowDangerousEmailAccountLinking: true,
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
