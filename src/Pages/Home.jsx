import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";
const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId='1' title='Now Playing' fetchUrl={requests.requestNowPlaying} />
      <Row rowId='3' title='Popular' fetchUrl={requests.requestPopular} />
      <Row rowId='4' title='Tranding' fetchUrl={requests.requestTranding} />
      <Row rowId='5' title='Top Rated' fetchUrl={requests.requestTopRated} />
      <Row rowId='2' title='Up Coming' fetchUrl={requests.requestUpcoming} />
    </div>
  );
};

export default Home;
