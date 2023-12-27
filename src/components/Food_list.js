import SideBar from './sideBar'
import Food from './Crud';

export default function Food_List() {

    return(
        <div className="w-screen h-screen flex flex-row">
            <SideBar></SideBar>
            <Food></Food>
        </div>
    );
    
}