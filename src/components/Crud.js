import Header from './header_food';
import Card from './List';

export default function Food() {

    return(
            <div className="px-32 py-11 w-[85%] bg-[#f4f5f8] flex flex-col space-y-8">
                <Header></Header>
                <Card></Card>
            </div>
    );
    
}

