import { View } from "wiloke-react-core";
import CustomIframe from "../../components/CustomIframe/CustomIframe";
import { useQuery } from "../../routes/hooks/useQuery";

const WebView = () => {
  const query = useQuery();

  return (
    <View>
      <View container>
        <CustomIframe src={query.get("path") || "http://localhost:3000/404"} />,
      </View>
    </View>
  );
};

export default WebView;
