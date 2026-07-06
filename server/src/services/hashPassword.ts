import bcrypt from "bcrypt";

export const hashPassword = async (
  password: string,
  salt: number,
): Promise<string> => {
  if (!password) throw new Error("Password is required");

  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  if (!password) throw new Error("Password is required");

  const comparePassword = await bcrypt.compare(password, hashedPassword);
  return comparePassword;
};

