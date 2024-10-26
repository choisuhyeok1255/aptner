import { getUsersAPI } from "@/apis";
import { GetUsersQueryModel } from "@/types";
import { useQuery } from "@tanstack/react-query";

const userKeys = {
  all: ["user"] as const,
  users: () => [...userKeys.all, "user"] as const,
  user: (req: GetUsersQueryModel) => [...userKeys.users(), req] as const,
};

export const useGetUsers = (req: GetUsersQueryModel) => {
  return useQuery({
    queryKey: userKeys.user(req),
    queryFn: () => getUsersAPI(req),
  });
};
