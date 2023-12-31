import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Swiper from "react-native-web-swiper";


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <View style={{ flex: 1 }}>
          <Swiper
            from={1}
            minDistanceForAction={0.1}
            controlsProps={{
              dotsTouchable: true,
              prevPos: "left",
              nextPos: "right",
              nextTitle: ">",
              nextTitleStyle: { color: "red", fontSize: 24, fontWeight: "500" },
              PrevComponent: ({ onPress }) => (
                <TouchableOpacity onPress={onPress}>
                  <Text
                    style={{ color: "white", fontSize: 24, fontWeight: "500" }}
                  >
                    {"<"}
                  </Text>
                </TouchableOpacity>
              ),
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(20,20,200,0.3)",
              }}
            >
              <Text>Slide 1</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(20,200,20,0.3)",
              }}
            >
              <Text>Slide 2</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(200,20,20,0.3)",
              }}
            >
              <Text>Slide 3</Text>
            </View>
          </Swiper>
        </View> */}
        <View style={{ height: 95, width: "100%", borderRadius: 10 }}>
          <Swiper
            horizontal
            loop
            timeout={-2.5}
            // controlsProps={{
            //   dotActiveStyle: { backgroundColor: "red" },
            //   cellsContent: {
            //     "bottom-left": <Text>SOME LOGO</Text>,
            //   },
            // }}
          >
            <View
              style={{
                // flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(20,20,200,0.3)",
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/image/sld1.png")}
                style={{
                  height: 97,
                  width: "100%",
                  resizeMode: "stretch",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              />
            </View>
            <View
              style={{
                // flex: 1,
                alignItems: "center",
                justifyContent: "center",
                //  backgroundColor: "rgba(20,20,200,0.3)",
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/image/sld3.png")}
                style={{
                  height: 97,
                  width: "100%",
                  resizeMode: "cover",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              />
            </View>
            <View
              style={{
                // flex: 1,
                alignItems: "center",
                justifyContent: "center",
                //  backgroundColor: "rgba(20,20,200,0.3)",
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/image/sld2.png")}
                style={{
                  height: 97,
                  width: "100%",
                  resizeMode: "cover",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              />
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}
