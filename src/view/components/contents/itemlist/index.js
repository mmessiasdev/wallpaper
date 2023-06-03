import { Container } from "../../styles/container/style"
import Item from "../item";
import TypeText from "../text";
import React, { Component } from "react";
import Slider from "react-slick";


const ItemList = ({ title }) => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  }

  return (

    <Container width="100%" disp="flex" justify="center" direc="column">
      <Container width="100%" justify="start" pad="50px">
        <TypeText tag="h4">{title}</TypeText>
      </Container>
      <Slider {...settings}  pad="20px 0px">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>

      </Slider>

    </Container>

  );
}

export default ItemList;