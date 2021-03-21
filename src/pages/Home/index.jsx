import { useCountries } from "../../utils/hooks";
import CardList from "./CardList";

const Home = () => {
  const { countriesData } = useCountries();
  return (
    <main>
      <CardList countries={countriesData} />
    </main>
  );
};

export default Home;
