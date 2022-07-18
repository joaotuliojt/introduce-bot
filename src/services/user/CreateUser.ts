import { User, IUser } from "../../models/User";

interface IRequest {
  id: number;
  name: string;
  github?: string;
  linkedin: string;
  resume: string;
  title: string;
}

export class CreateUser {
  async execute({
    id,
    github,
    linkedin,
    name,
    resume,
    title,
  }: IRequest): Promise<IUser> {
    const hasUser = (await User.findOne({ id }).countDocuments()) > 0;

    if (hasUser) {
      throw new Error("User already exists!");
    }

    const dataToInsert = {
      id,
      github,
      linkedin,
      name,
      resume,
      title,
    };

    const user = await User.create(dataToInsert);
    return user;
  }
}
