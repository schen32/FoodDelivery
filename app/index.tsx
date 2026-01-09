import { offers } from "@/constants";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
        data={offers}
        renderItem={({ item, index }) => (
          <Pressable>
            <Text>{item.title}</Text>
          </Pressable>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
