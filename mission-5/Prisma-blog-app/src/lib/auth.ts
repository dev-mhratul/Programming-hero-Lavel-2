import { PrismaClient } from "@prisma/client/extension";
import { betterAuth } from "better-auth";
import { prisma } from "./prisma.js";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    trustedOrigins: [process.env.APP_URL!],
    user:{
        additionalFields:{
            role:{
                type: "string",
                defaultValue: "USER",
                required: false
            },
            phone:{
                type: "string",
                required: false
            },
            status: {
                type: "string",
                defaultValue: "ACTIVE",
                required: false
            }
        }
    },
    emailAndPassword: { 
    enabled: true, 
  }
});