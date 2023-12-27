
import { useNavigate } from 'react-router-dom';
export default function Header(props) {

    const navigate = useNavigate();

    const handleClick= () => {
        navigate('/Login')
    }
    return(
        <div className="flex flex-row items-center justify-between ">
                    <p className="text-2xl text-[#a1adb9]">
                        {props.text} / <b className="text-[#566a7f] text-2xl">{props.genre}</b>
                    </p>
                    <div 
                    onClick={handleClick}
                    className="px-5 py-2 transition-colors duration-300 hover:text-white hover:shadow-md hover:bg-[#ff3e1d] cursor-pointer border-[1px] border-[#ff3e1d] rounded-md text-[#ff3e1d] "
                    >
                        Log out
                    </div>
        </div>
    );
    
}



