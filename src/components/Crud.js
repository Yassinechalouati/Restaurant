import Header from './header_food';
import Card from './List';

export default function Food() {

    return(
            <div className="px-6 py-5 md:px-32 md:py-11 lg:px-32 lg:py-11 xl:px-32 xl:py-11 h-screen w-[90%] xl:w-[85%] bg-[#f4f5f8] flex flex-col space-y-8">
                <Header text="List" genre="Food"></Header>
                <Card></Card>
            </div>
    );
    
}

