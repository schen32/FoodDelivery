import CartButton from "@/components/cartButton";
import { images, offers } from "@/constants";
import useAuthStore from "@/store/auth.store";
import { colors } from "@/theme/colors";
import { Fragment } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useAuthStore();
  console.log("USER:", JSON.stringify(user, null, 2));

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        ListHeaderComponent={() => (
          <View style={styles.headerView1}>
            <View style={styles.headerView2}>
              <Text style={styles.headerText1}>DELIVER TO</Text>
              <TouchableOpacity style={styles.headerView3}>
                <Text style={styles.headerText2}>Croatia</Text>
                <Image
                  style={styles.headerArrow}
                  source={images.arrowDown}
                ></Image>
              </TouchableOpacity>
            </View>

            <CartButton></CartButton>
          </View>
        )}
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
  headerView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerView2: {
    justifyContent: "flex-start",
  },
  headerView3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
  },
  headerText1: {
    fontSize: 12,
    fontFamily: "quicksand-bold",
    color: colors.primary,
  },
  headerText2: {
    fontSize: 12,
    fontFamily: "quicksand-semibold",
    color: colors.dark[100],
  },
  headerArrow: {
    height: 10,
    width: 10,
  },
  safe: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    gap: 20,
  },
  flatListContainer: {
    gap: 20,
  },
  cardPressable: {
    height: 160,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 25,
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
    borderRadius: 50,
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
