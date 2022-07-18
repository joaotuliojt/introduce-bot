import { User } from "../../models/User";

interface IRequest {
  id: number;
}

export class GetUser {
  async execute({ id }: IRequest) {
    const user = await User.findOne({ id });

    if (!user) {
      return undefined;
    }

    return user;
  }
}
