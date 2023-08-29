import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const config = {
  runtime: "edge",
};

export default async (req: Request, response: Response) => {
  const prisma = new PrismaClient().$extends(withAccelerate());
  await prisma.$executeRaw`SELECT 1`;
  return new Response("OK");
};
