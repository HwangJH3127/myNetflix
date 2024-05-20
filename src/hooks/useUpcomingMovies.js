import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcomingMoviesQuery = () => {
  return api.get("/movie/upcoming");
};
export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["upcoming-movie"],
    queryFn: fetchUpcomingMoviesQuery,
    select: (result) => result.data,
  });
};
