import Hero from "../components/Hero";
import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tab from "../components/TabSection";
import ScreensTab from "../components/ScreensTab";
import { getAllScreens } from "../supabase";
import { ScreensContext } from "../context/screensContex";
import { UserContext } from "../context/authContext";

const Home = ({ screens }) => {
  const { filterTerm, filterName } = useContext(ScreensContext);
  const user = useContext(UserContext);
  const [result, setResult] = useState([]);

  const searchFilter = (array, data) => {
    console.log(array, data);
    if (data === "") return array;
    return array.filter((el) => el.category === data);
  };

  const searchNameFilter = (array, data) => {
    console.log(array, data);

    if (data === "") return array;
    return array.filter((el) => el.name === data);
  };

  useEffect(() => {
    setResult(searchNameFilter(screens, filterName));
  }, [filterName, screens]);

  useEffect(() => {
    setResult(searchFilter(screens, filterTerm));
  }, [filterTerm, screens]);
  return (
    <>
      <ToastContainer autoClose={2000} position="top-center" />
      {!user && <Hero />}
      <Tab />
	<ScreensTab screens={result} />
      
    </>
  );
};

export async function getServerSideProps(context) {
  const screens = await getAllScreens();

  return {
    props: {
      screens,
    },
  };
}

export default Home;
