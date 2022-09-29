import { useState, useEffect } from "react";

export type CategoriesApiResponse = {
  status: Number;
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
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(
        `https://video-proxy.3rdy.tv/api/vod/category/${categoryId}/assets/?page=${pageNumber}&size=20`
      );
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
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

  return { status, statusText, data, error, loading, hasMore };
};
