import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import { Text } from 'react-native-paper';
import HomeScreen from "../../component/slider";
const { width, height } = Dimensions.get("window");

const Taxi = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/image/bg.jpg")}
        style={{ height: height, width: width }}
      >
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Holder")}>
              <Image
                source={require("../../../assets/logo/back.png")}
                style={{
                  width: 19,
                  height: 19,
                  marginTop: 38,
                  marginLeft: 14,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: "#fff",
                marginTop: 35,
                marginLeft: 16,
                fontSize: 17,
                fontWeight: "500",
              }}
            >
              Taxi
            </Text>
          </View>

          {/* book train  */}

          {/* book bus */}

          {/* slider */}
          <View
            style={{
              height: 110,
              marginTop: 15,
              marginRight: 12,
              marginLeft: 12,
              borderRadius: 10,
              //backgroundColor: "black",
            }}
          >
            <HomeScreen />
          </View>

          {/* more to explore */}
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              marginLeft: 100,
              color: "#026BDE",
            }}
          >
            Find Your WonderLand
          </Text>
          <View
            style={{
              flexDirection: "row",
              height: 228,
              width: width,
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: -30,
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: 10,
                  marginTop: 10,
                }}
              >
                <Image
                  source={require("../../../assets/image/df.png")}
                  style={{
                    height: 124,
                    width: 144,
                    marginTop: 2,
                    marginLeft: 13,
                    borderRadius: 10,
                    //marginBottom: 26,
                  }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Bali
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: 10,
                  marginTop: 10,
                  marginRight: 10,
                }}
              >
                <Image
                  source={require("../../../assets/image/dfd.png")}
                  style={{
                    height: 124,
                    width: 144,
                    marginTop: 2,
                    marginLeft: 13,
                    borderRadius: 10,
                    //marginBottom: 26,
                  }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Bali
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: 10,
                  marginTop: 10,
                }}
              >
                <Image
                  source={require("../../../assets/image/df.png")}
                  style={{
                    height: 124,
                    width: 144,
                    marginTop: 2,
                    marginLeft: 13,
                    borderRadius: 10,
                    //marginBottom: 26,
                  }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Bali
                </Text>
              </View>
            </ScrollView>
          </View>

          {/* heading offers packages */}
          <View
            style={{
              flexDirection: "row",
              marginTop: -20,
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../../../assets/logo/ofr.png")}
              style={{
                height: 20,
                width: 20,
                marginTop: 2,
                marginLeft: 13,
                //marginBottom: 26,
              }}
            />
            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
                color: "#026BDE",
                marginLeft: 8,
              }}
            >
              Offer For You
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: "#026BDE",
                  marginLeft: 170,
                  marginTop: 5,
                }}
              >
                View All>>
              </Text>
            </TouchableOpacity>
          </View>

          {/* fetching packages */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                height: 250,
                backgroundColor: "#fff",
              }}
            >
              <View
                elevation={10}
                style={{
                  flexDirection: "column",
                  marginLeft: 12,
                  marginTop: 8,
                  borderRadius: 12,
                  height: 215,
                  width: 160,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  shadowColor: "#000000",
                  shadowOpacity: 0.9,
                  shadowRadius: 2,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    margin: 6,
                    fontWeight: "500",
                  }}
                >
                  Domestic Fligths
                </Text>
                <Image
                  source={require("../../../assets/image/df.png")}
                  style={{
                    height: 105,
                    width: 127,

                    borderRadius: 10,

                    //marginBottom: 26,
                  }}
                />
                <Text
                  style={{
                    fontSize: 8,
                    marginTop: 4,
                    fontWeight: "500",
                  }}
                >
                  Wow Flight Deals with AirAsia's{"\n"}
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    marginTop: -10,
                    marginBottom: 3,
                    fontWeight: "500",
                    borderBottomWidth: 1,
                    borderBottomColor: "#026BDE",
                  }}
                >
                  Season Sale:
                </Text>
                <Text style={{ fontSize: 7, marginTop: 0, fontWeight: "500" }}>
                  Get Domestic flights starting @ JUST
                </Text>
                <Text style={{ fontSize: 7, marginTop: 0, fontWeight: "500" }}>
                  ₹1250
                </Text>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 26,
                      marginTop: 1,
                      width: 100,
                      borderRadius: 20,
                      backgroundColor: "#026BDE",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "400",
                      }}
                    >
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                elevation={10}
                style={{
                  flexDirection: "column",
                  marginLeft: 12,
                  marginTop: 8,
                  borderRadius: 12,
                  height: 215,
                  width: 160,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  shadowColor: "#000000",
                  shadowOpacity: 0.9,
                  shadowRadius: 2,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    margin: 6,
                    fontWeight: "500",
                  }}
                >
                  Domestic Fligths
                </Text>
                <Image
                  source={require("../../../assets/image/dff.png")}
                  style={{
                    height: 105,
                    width: 127,

                    borderRadius: 10,

                    //marginBottom: 26,
                  }}
                />
                <Text
                  style={{
                    fontSize: 8,
                    marginTop: 4,
                    fontWeight: "500",
                  }}
                >
                  Wow Flight Deals with AirAsia's{"\n"}
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    marginTop: -10,
                    marginBottom: 3,
                    fontWeight: "500",
                    borderBottomWidth: 1,
                    borderBottomColor: "#026BDE",
                  }}
                >
                  Season Sale:
                </Text>
                <Text style={{ fontSize: 7, marginTop: 0, fontWeight: "500" }}>
                  Get Domestic flights starting @ JUST
                </Text>
                <Text style={{ fontSize: 7, marginTop: 0, fontWeight: "500" }}>
                  ₹1250
                </Text>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 26,
                      marginTop: 1,
                      width: 100,
                      borderRadius: 20,
                      backgroundColor: "#026BDE",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "400",
                      }}
                    >
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                elevation={10}
                style={{
                  flexDirection: "column",
                  marginLeft: 12,
                  marginTop: 8,
                  borderRadius: 12,
                  height: 215,
                  width: 160,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  shadowColor: "#000000",
                  shadowOpacity: 0.9,
                  shadowRadius: 2,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    margin: 6,
                    fontWeight: "500",
                  }}
                >
                  Domestic Fligths
                </Text>
                <Image
                  source={require("../../../assets/image/dfd.png")}
                  style={{
                    height: 105,
                    width: 127,

                    borderRadius: 10,

                    //marginBottom: 26,
                  }}
                />
                <Text
                  style={{
                    fontSize: 8,
                    marginTop: 4,
                    fontWeight: "500",
                  }}
                >
                  Wow Flight Deals with AirAsia's{"\n"}
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    marginTop: -10,
                    marginBottom: 3,
                    fontWeight: "500",
                    borderBottomWidth: 1,
                    borderBottomColor: "#026BDE",
                  }}
                >
                  Season Sale:
                </Text>
                <Text style={{ fontSize: 7, marginTop: 0, fontWeight: "500" }}>
                  Get Domestic flights starting @ JUST
                </Text>
                <Text style={{ fontSize: 7, marginTop: 0, fontWeight: "500" }}>
                  ₹1250
                </Text>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 26,
                      marginTop: 1,
                      width: 100,
                      borderRadius: 20,
                      backgroundColor: "#026BDE",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "400",
                      }}
                    >
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C7E5F0",
    height: height,
    width: width,
  },
});
export default Taxi;
