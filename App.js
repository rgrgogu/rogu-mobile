import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { GetPortfolio } from "./app/api/GetPortfolio";
import { useState, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState(2);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await GetPortfolio(currentPage);
      setPortfolio(data.items);
    };

    fetch();
  }, [currentPage]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      {portfolio &&
        portfolio.map((item, idx) => (
          <View key={idx}>
            <Text className="font-bold">{item._id}</Text>
            <Text>{item.title}</Text>
            <Text>{item.category}</Text>
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
            <Text>{item.link}</Text>
            <Text>{item.image.url}</Text>
          </View>
        ))}
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
