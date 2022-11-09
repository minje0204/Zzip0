// @ts-nocheck
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
//mui, css
import home from '../../styles/Home.module.css';
//recoil
import { useRecoilState } from 'recoil';
import { searchCateState, selectedCateState } from '../../lib/recoil/home';
//component
import CateInfo from './CateInfo';
interface Test {}

const HomeVideoList: Test = () => {
  const [cate, setCate] = useRecoilState(searchCateState);
  const [videoList, setVideoList] = useRecoilState(selectedCateState);
  const [upCate, setUpCate] = useState('');
  const setCapitalize = (cate) => {
    setUpCate(cate.charAt(0).toUpperCase() + cate.slice(1));
  };
  useEffect(()=> { console.log(videoList)}, [])

  return (
    <div className={home.homecontainer}>
      <CateInfoContainer>
        <CateInfo cate={cate} />
      </CateInfoContainer>
      <HomeVideoListContainer>
        {videoList.map((vid) => (
          <div key={vid.bgId}>
            <Link href={`/studyroom/1`}>
              <div style={{ height: '300px', borderRadius: '10px' }}>
                <div id="cateImgContainer">
                  <img
                  src={
                    `${vid.thumbnailUrl}`}
                  />
                </div>
                <div id="cateInfoContainer">
                  <div id="home-cate-font">{vid.bgCategory}</div>
                  <div id="home-name-font">{vid.bgTitle}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </HomeVideoListContainer>
    </div>
  );
};

const HomeVideoListContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 400px 400px;
  row-gap: 20px;
  column-gap: 20px;
  margin: 20px 50px;

  #catePic {
    border-radius: 10px;
    widht: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  #cateImgContainer {
    height: 75%;
    background-color: black;
    overflow: hidden;
    border-radius: 10px;
  }
  #cateInfoContainer {
    display: flex;
    flex-direction: column;
    height: 25%;
    margin-top: 10px;
  }
  #home-cate-font {
    font-size: 22px;
    cursor: pointer;
  }
  #home-name-font {
    font-size: 16px;
    cursor: pointer;
  }
`;
const CateInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export default HomeVideoList;
