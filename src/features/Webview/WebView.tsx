import { useEffect, useState } from "react";
import { View } from "wiloke-react-core";
import CustomIframe from "../../components/CustomIframe/CustomIframe";
import { useQuery } from "../../routes/hooks/useQuery";
import API from "../../api";
import authHeader from "../../services/auth-header";

const WebView = () => {
  const query = useQuery();
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data =  await API.get(`/link/findLink?path=${query.get("path")}`, { headers: authHeader() });
      if (data.status == 200) {
        setPath(data.data);
      }
    }

    const localtion = window.location.ancestorOrigins;
   
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])

  

  return (
    <View>
      <View container>
        <CustomIframe src={path || "http://localhost:3000/404"} />,
      </View>
    </View>
  );
};

export default WebView;
