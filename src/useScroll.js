import { useEffect, useState } from "react";
import axios from "axios";

function useScroll(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;
    axios({
      method: "GET",
      url: "http://localhost:3000/api/v1/products",
      params: { limit: 10, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setProducts((prevProducts) => {
          return [...new Set([...prevProducts, ...res.data.data])];
        });
        setHasMore(res.data.results > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, products, hasMore };
}

export default useScroll;
