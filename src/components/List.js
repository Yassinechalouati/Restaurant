import Table from "./Table";

export default function Card() {

    return(
        <div className="bg-white rounded-md w-full max-h-[70%] p-5 flex flex-col space-y-3">
            <div className="text-lg text-center font-bold">Food List</div>
            <input
                type="search"
                placeholder="Search..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#008e38] transition-colors duration-300"
                />
            <Table></Table>


        </div>
    );
    
}