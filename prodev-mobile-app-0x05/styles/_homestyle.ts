import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchGroup: {
    backgroundColor: "#34967C",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  searchControlGroup: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchFormText: {
    fontSize: 16,
    fontWeight: "400",
  },
  searchControl: {
    padding: 0,
    margin: 0,
  },
  searchButton: {
    backgroundColor: "#2D846C",
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    columnGap: 15,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };