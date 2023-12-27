import { useNavigate } from 'react-router-dom';


export default function Item(props) {
    const navigate = useNavigate();
    return(
        <div
        tabIndex={props.index}
        onClick={() => { navigate(`/${props.text}`) }} 
        className="flex flex-row cursor-pointer focus:bg-[#008e38] hover:bg-[#008e38] h-12 rounded-md space-x-4 w-full items-center px-5  "
        >
            {props.icon}
            <p className="text-white">{props.text}</p>
        </div>
    );
  }
