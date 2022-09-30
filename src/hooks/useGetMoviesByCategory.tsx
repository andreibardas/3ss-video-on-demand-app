import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export type CategoriesApiResponse = {
  success: Boolean;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
  hasMore: Boolean;
};

export const useGetMoviesByCategory = (
  categoryId: any,
  pageNumber: any
): CategoriesApiResponse => {
  const [success, setSuccess] = useState<Boolean>(false);
  const [statusText, setStatusText] = useState<String>("");
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState(false);

  const navigate = useNavigate();

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(
        `https://video-proxy.3rdy.tv/api/vod/category/${categoryId}/assets/?page=${pageNumber}&size=20`
      );
      const json = await apiResponse.json();
      setSuccess(json.success);
      if (json.success === false) {
        navigate("/not-found", { replace: true });
      }
      setStatusText(apiResponse.statusText);
      setData((prevData: any) => {
        if (pageNumber === 1) {
          return json.data.results;
        } else {
          return [...new Set([...prevData, ...json.data.results])];
        }
      });
      setHasMore(json.data.total_results > 0);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, [categoryId, pageNumber]);

  return { success, statusText, data, error, loading, hasMore };
};
