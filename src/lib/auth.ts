import * as bcrypt from "bcrypt";

const saltOrRounds = 10;
const hashPassword = async (password: string) => bcrypt.hash(password, saltOrRounds);
export { hashPassword };
