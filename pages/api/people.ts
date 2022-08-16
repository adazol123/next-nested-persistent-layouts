// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  names: Array<{
    name: string;
    id: number;
  }>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    names: [
      {
        name: "Danyy",
        id: 1,
      },
      {
        name: "Anna",
        id: 2,
      },
      {
        name: "Sandra",
        id: 3,
      },
      {
        name: "Ella",
        id: 4,
      },
      {
        name: "Mikaela",
        id: 5,
      },
      {
        name: "Michelle",
        id: 6,
      },
      {
        name: "Cia",
        id: 7,
      },
    ],
  });
}
