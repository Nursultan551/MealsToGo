import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://www.gqmiddleeast.com/public/images/2020/08/11/best-restaurants-in-dubai-GQ_0.jpg",
    ],
    address = "100 some random street",
    openingHours = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={styles.cover}
        source={{
          uri: photos[0],
        }}
      />
      <Card.Title title={name} subtitle={address} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 4,
    backgroundColor: "white",
  },
});
