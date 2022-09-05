import { NextApiRequest, NextApiResponse } from "next";

const getUsers = (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    {
      id: 1,
      name: "Caio"
    },
    {
      id: 2,
      name: "Ellen"
    },
    {
      id: 3,
      name: "Remi"
    }
  ];

  return res.json(users);
};

export default getUsers;
