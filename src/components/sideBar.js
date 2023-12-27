import { MdAdminPanelSettings } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import Item from "./item";

export default function SideBar() {
  return(
    <div className="w-[15%] h-[100%] bg-[#303030] flex flex-col space-y-2 items-center pt-12 ">
      <img 
      className="h-20 w-20 "
      src="chillis.png" 
      alt="logo"></img>
      <Item icon ={<IoFastFood size="30" color="white"></IoFastFood>} text="Food" index ="1" ></Item>
      <Item icon ={<MdAdminPanelSettings size="30" color="white"></MdAdminPanelSettings>} text="Admin creation" index="2" ></Item>
    </div>
  );
}
