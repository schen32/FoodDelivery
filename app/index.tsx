import { images, offers } from "@/constants";
import { Fragment } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={offers}
        renderItem={({ item, index }) => {
          const isEven: boolean = index % 2 === 0;

          return (
            <Pressable
              style={[
                styles.cardPressable,
                { backgroundColor: item.color },
                isEven ? styles.cardRowReverse : styles.cardRow,
              ]}
            >
              {({ pressed }) => (
                <Fragment>
                  <View style={styles.cardView}>
                    <Image
                      style={styles.cardImage}
                      source={item.image}
                      resizeMode="contain"
                    ></Image>
                  </View>
                  <View style={styles.cardView}>
                    <Text style={styles.cardText}>{item.title}</Text>
                    <Image
                      style={styles.cardArrow}
                      source={images.arrowRight}
                      resizeMode="contain"
                    ></Image>
                  </View>
                </Fragment>
              )}
            </Pressable>
          );
        }}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  flatListContainer: {
    gap: 20,
  },
  cardPressable: {
    height: 160,
    borderRadius: 10,
    padding: 5,
  },
  cardRow: {
    flexDirection: "row",
  },
  cardRowReverse: {
    flexDirection: "row-reverse",
  },
  cardView: {
    height: "100%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    height: "100%",
    width: "100%",
  },
  cardText: {
    color: "white",
    fontSize: 20,
    fontFamily: "quicksand-bold",
    textAlign: "center",
  },
  cardArrow: {
    height: "25%",
    width: "25%",
  },
});
