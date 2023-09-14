import { db } from "@database/index";

export const getUsers = async () => {
  return db.query.usersTable.findMany();
};
