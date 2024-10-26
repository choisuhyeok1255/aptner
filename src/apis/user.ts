import { ax } from "@/apis";
import type { GetUsersQueryModel, GetUsersServerModel } from "@/types";

export const getUsersAPI = async (req: GetUsersQueryModel) => {
  const { data } = await ax.get<GetUsersServerModel>(`search/users`, {
    params: { q: req.query.username, page: req.query.page, per_page: 20 },
  });

  return data;
};
