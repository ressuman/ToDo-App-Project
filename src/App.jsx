import "./App.css";
import MoonIcon from "./assets/Images/icon-moon.svg";
import AddForm from "./components/AddForm/AddForm";
import { BottomNav } from "./components/BottomNav/BottomNav";

function App() {
  return (
    <div className="bg-[#f2f2f2] min-h-screen pb-20 relative ">
      <div className="bg-light_header_image_mobile lg:bg-light_header_image bg-no-repeat bg-cover h-52 px-5 lg:px-0 pt-10">
        <div className="flex justify-between lg:w-5/6 lg:mx-auto">
          <p className="text-3xl font-semibold text-white tracking-[6px]">
            TODO
          </p>
          <img src={MoonIcon} alt="moon-icon" className="h-5 cursor-pointer " />
        </div>
        <div className="mt-8 lg:w-4/6 lg:mx-auto ">
          <AddForm />
        </div>
      </div>
      <div className="bg-white lg:w-4/6 lg:mx-auto  mx-5 relative -top-7 rounded-md">
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
