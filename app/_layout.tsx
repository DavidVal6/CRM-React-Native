import { Stack } from "expo-router";

export default function RootLayout() {

  //is the screen in my application
  return(
    <Stack>
      <Stack.Screen name="index" options={{title: "Home"}} />
    </Stack>
  ) 
}
