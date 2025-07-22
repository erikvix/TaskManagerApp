import { useNavigation } from "@react-navigation/native";

export function useCurrentRoute() {
  const navigation = useNavigation();
  return console.log(navigation.getState()?.routeNames);
}
