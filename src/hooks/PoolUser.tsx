import { useQuery } from "@tanstack/react-query";
import { viewOneUser, viewUser } from "../api/Api";

export const useGetPool = () => {
  const { data: allPool } = useQuery({
    queryKey: ["getContact"],
    queryFn: viewUser,
    refetchInterval:1000
  });

  return { allPool };
};

export const useGetOnePool = (id: string) => {
  const { data} = useQuery({
    queryKey: ["getContact", { id: id }],
    queryFn: () => viewOneUser(id),
    refetchInterval:1000
  });

  return { data };
};
