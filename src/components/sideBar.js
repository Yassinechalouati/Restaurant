import { MdAdminPanelSettings } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import Item from "./item";

export default function SideBar() {


  return(
    <div className="w-[10%] lg:w-[15%] xl:w-[15%] h-[100%] bg-[#303030] flex flex-col space-y-2 items-center pt-12 ">
      <img 
      className="h-20 hidden lg:block xl:block"
      src="chillis.png" 
      alt="logo"></img>
      <div className="hidden xl:block w-full"> 
        <Item  icon ={<IoFastFood size="30" color="white"></IoFastFood>} text="Food" index ="1" ></Item>
      </div>
      <div className="hidden xl:block w-full"> 
        <Item className="hidden xl:block" icon ={<MdAdminPanelSettings size="30" color="white"></MdAdminPanelSettings>} text="Admin creation" index="2" ></Item>
      </div>
      
      <div
        className={`flex flex-col items-center justify-center xl:hidden transition-all duration-300 ease-in-out `}
      >
        <div className="flex mt-4 xl:hidden ">
          <Item Item  icon ={<IoFastFood size="20" color="white"></IoFastFood>} text="Food" index ="1"></Item>
        </div>
        <div  className="block mt-4 xl:hidden ">
          <Item  icon ={<MdAdminPanelSettings size="20" color="white"></MdAdminPanelSettings>} text="Admin creation" index="2" ></Item>
        </div>
      </div>
    </div>
  );
}
