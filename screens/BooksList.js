import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
// access the state from redux store use selector
// dispatch action from the redux store use useDispatch
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getBooks } from "../redux/actionCreators";

export default function BooksList() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.booksReducer);
  // console.log(books);
  const fetchBooks = () => dispatch(getBooks());

  useEffect(() => {
    fetchBooks();
  }, []);

  const renderItem = ({ item }) => {
    // console.log("it's all here but i can't see");
    // console.log(item);
    return (
      <View style={{ marginVertical: 12 }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          {/* book cover */}
          <Image
            source={{ uri: item.image_url }}
            resizeMode="cover"
            style={{ width: 100, height: 150, borderRadius: 10 }}
          />
          {/* Book Metadata */}
          <View style={{ flex: 1, marginLeft: 12 }}>
            {/* Book Title */}
            <View>
              <Text style={{ fontSize: 22, paddingRight: 16, color: "#fff" }}>
                {item.title}
              </Text>
            </View>
            {/* meta info */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                color="#64676D"
                name="book-open-page-variant"
                size={20}
              />
              <Text style={{ fontSize: 14, paddingLeft: 10, color: "#64676D" }}>
                {item.num_pages}
              </Text>
              <MaterialCommunityIcons
                color="#64676D"
                name="star"
                size={20}
                style={{ paddingLeft: 16 }}
              />
              <Text style={{ fontSize: 14, paddingLeft: 10, color: "#64676D" }}>
                {item.rating}
              </Text>
            </View>
            {/* buttons */}
            <View style={{ marginTop: 14 }}>
              <TouchableOpacity
                onPress={() => console.log("Bookmarked!")}
                activeOpacity={0.7}
                style={{
                  flexDirection: "row",
                  padding: 2,
                  backgroundColor: "#2D3038",
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 40,
                  width: 40,
                }}
              >
                <MaterialCommunityIcons
                  color="#64676D"
                  size={24}
                  name="bookmark-outline"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1E1B26" }}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ color: "white", fontSize: 22 }}>Bestsellers</Text>
        <View style={{ flex: 1, marginTop: 8 }}>
          <FlatList
            data={books}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
