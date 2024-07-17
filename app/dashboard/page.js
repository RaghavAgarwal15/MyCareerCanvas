
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Main from "../components/Main";
import FilterState from "../context/filterState";

export default function Home() {
  
  return (
    <FilterState>
      <div className="h-screen fixed ">
        <div className="fixed w-full top-0 z-50">
          <Navbar />
        </div>
        <div className="flex justify-between h-full">
          <div className="fixed overflow-y-scroll h-[90vh] top-16 bg-blue-50">
            <LeftSidebar />
          </div>
          <div className="mt-14 overflow-y-scroll bg-blue-50">
            <Main />
          </div>
          <div className="border-l-2 overflow-y-scroll fixed right-0 h-[90vh] top-16  bg-blue-50">
            <RightSidebar />
          </div>
        </div>
      </div>
    </FilterState>
  );
}
