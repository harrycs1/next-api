import { PrismaClient } from "@prisma/client";

let prisma;

// if we're in production, set our prisma to be a new prisma client
if (process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient()
} else {
    if (!global.prisma){
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}

export default prisma;