import { User } from "../../models/User";

interface IRequest {
  id: number;
  origin: string;
  url: string;
}

export class AddLink {
  async execute({ id, origin, url }: IRequest) {
    const user = await User.findOne({ id });

    if (!user) {
      return undefined;
    }

    const newLink = { origin, url };

    const userUpdated = await user.updateOne(
      {
        $push: {
          links: newLink,
        },
      },
      { new: true }
    );
    return userUpdated;
  }
}
