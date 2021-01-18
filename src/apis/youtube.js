import axios from "axios";
const KEY = "AIzaSyCWTxM7x8kWHk-LEVJS1vSSFfjqM7o2sMI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 7,
    key: `${KEY}`,
  },
});
