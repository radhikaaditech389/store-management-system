import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const getAuthHeader = () => {
  const user_detail = localStorage.getItem("user_detail");
  const user = user_detail ? JSON.parse(user_detail) : null;
  const token = user?.token;

  return token
    ? { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    : {};
};

export default function useStockExpiryAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchAlerts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/stock-expiry-alerts`, {
          headers: getAuthHeader(),
        });

        if (!isMounted) return;

        setAlerts(res.data.alerts || []);
        setTotal(res.data.total || 0);
      } catch (err) {
        console.error("Expiry alert fetch failed", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAlerts();

    const interval = setInterval(fetchAlerts, 5 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return { alerts, total, loading };
}
