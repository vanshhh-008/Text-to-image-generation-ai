import React, { useState } from "react";
import styled from "styled-components";
import "./home.css";
import { ImageCard } from "../components/ImageCard";
import {AddRounded, ExploreRounded} from "@mui/icons-material";
import { useNavigate} from "react-router-dom";

const randomImages = [
  "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fblog%2F1726579796102Generative%20ai.jpg&w=1920&q=75",
  "https://ideas.darden.virginia.edu/sites/default/files/styles/full_width_1024px_5_3_/public/2024-09/AI%20ART%20ITA.jpg?itok=CIaF2iIX",
  "https://www.ghacks.net/wp-content/uploads/2023/08/AI-generated-art-copyright.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTha2fRdWg5a1mhtWnrLjP4B2D9zxyaRTQCSg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhJEwHtL9jo9i44b9_nzwYGcg6Bx6PDYLYg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvx3n7lEtejoTGFENpfHpMPIZ29ZFfkX9bw&s",
  "https://p.potaufeu.asahi.com/1831-p/picture/27695628/89644a996fdd0cfc9e06398c64320fbe.jpg",
  "https://cdn.pixabay.com/photo/2023/03/23/20/41/ai-generated-7872858_1280.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORBtkT3UL7B0lwO_2bxyWdstP9n4B6VA40w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2fR_I7JQKjlu5ALbFZ2L9ytWkJpM1srPxA&s",
  "https://www.popsci.com/wp-content/uploads/2023/09/07/robot_with_bob_ross.jpg?quality=85",
  "https://img.freepik.com/free-photo/ai-generated-concept-human_23-2150688405.jpg",
];

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background:rgb(0,0,0,0.2);
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Home = () => {
  const navigate = useNavigate();
  const [images] = useState(randomImages); 

 
  const selectedImages = images.slice(0, 12); 

  return (
    <Container>
      <div className="Heading">
        <h1 style={{ fontFamily: "Audiowide" }}>
          Explore the images and community. <br />
          <span>◄ Generated with this AI ►</span>
        </h1>
      </div>
      
   


      <Wrapper>
        <CardWrapper>
          {selectedImages.map((imageUrl, index) => (
            <ImageCard key={index} item={{ photo: imageUrl, prompt: "AI-generated" }} />
          ))}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};
