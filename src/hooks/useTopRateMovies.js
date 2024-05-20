import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTopRateMoviesQuery = () => {
  return api.get("/movie/top_rated");
};
export const useTopRateMoviesQuery = () => {
  return useQuery({
    queryKey: ["topRate-movie"],
    queryFn: fetchTopRateMoviesQuery,
    select: (result) => result.data,
  });
};
