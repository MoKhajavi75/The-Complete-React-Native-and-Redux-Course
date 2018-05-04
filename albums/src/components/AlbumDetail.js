import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = props => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: props.album.thumbnail_image }}
          />
        </View>

        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.ImageStyle} source={{ uri: props.album.image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(props.album.url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContent: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerText: {
    fontSize: 18
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  ImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
