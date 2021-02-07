// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma'

export default async (req, res) => {
  const square = await prisma.square.findUnique({where: {id: 1}, include: {
    match: true,
    cells: true,
  }});

  res.status(200).json(square)
}
