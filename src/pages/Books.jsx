import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadBooks from "../components/ListedBooks/ListedReadBooks";
import ListedWishLists from "../components/ListedWishLists/ListedWishLists";

const handleReset = () => {
  localStorage.removeItem("readLists");
  window.location.reload();
};

const Books = () => {
  const [sortingType, setSortingType] = useState("");

  return (
    <div className="container mx-auto my-3">
      <div className="flex justify-center items-center my-3">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 mr-8">
            Sort By ⬇️
          </div>
          <button onClick={handleReset} className="btn btn-error text-white">
            Reset Data
          </button>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Lists</Tab>
          <Tab>Wish Lists</Tab>
        </TabList>

        <TabPanel>
          <ListedReadBooks sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <ListedWishLists sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
