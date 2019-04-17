import styled from "styled-components";
import bannerImg from "../../statics/img/banner.jpg";
import topicImg from "../../statics/img/topic.jpg";
import listImg from "../../statics/img/list_img.jpg";
import footerImg from "../../statics/img/footer_love.svg";

export const HomeOuter = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 56px;
`;

export const HomeWrapper = styled.div`
  width: 960px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  width: 625px;
  padding-top: 30px;
`;

export const HomeLeftBanner = styled.div`
  width: 625px;
  height: 240px;
  background: url(${bannerImg}) 50% 50% no-repeat;
  background-size: cover;
  border-radius: 5px;
`;


export const HomeRight = styled.div`
  width: 280px;
  padding-top: 30px;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const TopicItem = styled.div`
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 12px;
  color: #000;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

export const TopicItemImg = styled.img.attrs({
  src: `${topicImg}`
})`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding: 30px 0;
`;

export const ListInfo = styled.div`
  
`;

export const ListInfoTitle = styled.div`
  width: 100%;
  color: #333;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ListInfoDesc = styled.div`
  font-size: 13px;
  color: #999;
  line-height: 24px;
  margin-bottom: 10px;
`;

export const ListInfoOther = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #999;
`;

export const ListImg = styled.img.attrs({
  src: `${listImg}`
})`
  width: 150px;
  height: 100px;
  margin-left: 15px;
  border-radius: 5px;
`;

export const RecommendItem = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding-left: 15px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 2px;
  border-radius: 5px;
  margin-bottom: 10px;
  &.hot7 {
    background: linear-gradient(to right, #ecc934, #56ecaf);
  }
  &.hot30 {
    background: linear-gradient(to right, #3EECE9, #EC876E);
  }
  &.good-ser {
    background: linear-gradient(to right, #36A6EC, #DB4EEC);
  }
  &.js-copy {
    background: linear-gradient(to right, #EC6578, #55EC48);
  }
  &.js-class {
    background: linear-gradient(to right, #ecc934, #E6ACEC);
  }
`;

export const HomeFooter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-size: 13px;
  color: #999;
  .love_img {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url(${footerImg}) 50% 50% no-repeat;
    background-size: cover;
  }
`;