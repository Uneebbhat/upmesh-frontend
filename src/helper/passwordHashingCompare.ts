import bcrypt from "bcrypt";

export const encryptPassword = async (password: string, salt: number) => {
  return await bcrypt.hash(password, salt);
};

export const decryptPassword = async (
  plainPassword: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};
