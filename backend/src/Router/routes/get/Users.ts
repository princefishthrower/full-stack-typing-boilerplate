import express from "express";
import DB from "../../../DB/DB";
import { Op } from "sequelize";

export async function getUser(req: express.Request, res: express.Response) {
  if (!req.query.email) {
    return res.status(400).send("Not enough information");
  }

  const user = await DB.users.findOne({
    where: {
      email: {
        [Op.eq]: req.query.email,
      },
    },
  });

  if (!user) {
    return res.status(404).send("User not found!");
  }

  return res.status(200).send({ user });
}

export async function getUsersWithPosts(
  req: express.Request,
  res: express.Response
) {
  const usersWithPosts = await DB.users.findAll({
    include: [
      {
        model: DB.posts, // That's all it takes to JOIN on table posts!
      },
    ],
  });

  if (!usersWithPosts) {
    return res.status(404).send("Users and posts not found!");
  }

  return res.status(200).send({ usersWithPosts });
}
