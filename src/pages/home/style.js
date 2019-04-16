import styled from "styled-components";
import bannerImg from "../../statics/img/banner.jpg";
import topicImg from "../../statics/img/topic.jpg";

export const HomeWrapper = styled.div`
  width: 960px;
  display: flex;
  justify-content: space-between;
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
`;


export const HomeRight = styled.div`
  width: 240px;
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
  font-size: 14px;
  color: #000;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 20px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

export const TopicItemImg = styled.img.attrs({
  src: `${topicImg}`
})`
  width: 30px;
  height: 30px;
  vertical-align: top;
  margin-right: 10px;
`;