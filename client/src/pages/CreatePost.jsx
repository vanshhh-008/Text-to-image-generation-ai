import React, { useState } from 'react';
import styled from "styled-components";
import { Generateform } from '../components/Generateform';
import { GenerateImageCard } from '../components/GenerateImageCard';



const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: rgb(0,0,0,0.2);
  padding: 10px 10px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  height: fit-content;
  width: 100%;
  max-width: 1200px;
  gap: 8%;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


 

export const CreatePost = () => {
  
  const [GenerateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: '',
    prompt: '',
    photo: ''
  });

  return (
    <>
    <Container>
 
    
    
  <Wrapper>
       
        <Generateform 
       
          post={post} 
          setPost={setPost} 
          createPostLoading={createPostLoading} 
          setCreatePostLoading={setCreatePostLoading} 
          GenerateImageLoading={GenerateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
        />
         
        <GenerateImageCard src={post?.photo} loading={GenerateImageLoading} />
        
      </Wrapper>
    </Container>
    </>
  );
};
