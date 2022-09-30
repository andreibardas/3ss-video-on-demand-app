import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export type ApiResponse = {
  success: Boolean;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
};

export const useGetApi = (url: string): ApiResponse => {
  const navigate = useNavigate();

  const [success, setSuccess] = useState<Boolean>(false);
  const [statusText, setStatusText] = useState<String>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      console.log(json.success);
      if (json.success === false) {
        navigate("/not-found", { replace: true });
      }
      setSuccess(json.success);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return { success, statusText, data, error, loading };
};
