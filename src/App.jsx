import {FaHandshakeSimple} from "react-icons/fa6";

function App() {
    const brands = [
        {brand: "McLaren" , img:"./mclaren.svg"},
        {brand:"Audi" , img:"./audi-6.svg"},
        {brand:"Lamborghini" , img:"./lamborghini.svg"},
        {brand: "Rolls Royce" , img: "./rolls-royce.svg"},
        {brand: "Mercedes", img: './mercedes-benz.svg'},
        {brand: "Land Rover", img: './land-rover-2.svg'},
        {brand: "Ferrari" , img: './ferrari-2.svg'},
        {brand: "Porsche" , img: './porsche.svg'}
    ]
    console.log(brands)
    return (
        <div className="bg-gray-900 text-white py-16 relative mt-14 min-h-screen p-2">
            <img loading='lazy' src="./main.jpg" alt="car" className="object-cover w-full h-[30rem] absolute top-0 left-0 filter brightness-50" />

            <div className="container mx-auto relative z-10">
                <div className="max-w-md mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Rent.Me | Car Rental</h1>

                    <div className="flex flex-col space-y-4">
                        <label className="text-sm text-gray-300">Pick-Up Location</label>
                        <input
                            type="text"
                            placeholder="Bratislava, Prague, Etc ..."
                            className="p-2 rounded-md bg-gray-800 text-white"
                        />

                        <div className="flex space-x-4  justify-center">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm text-gray-300">Starting Date</label>
                                <input type="date" className="p-2 rounded-md bg-gray-800 text-white" />
                                <input type="time" className="p-2 rounded-md bg-gray-800 text-white" />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label className="text-sm text-gray-300">Ending Date</label>
                                <input type="date" className="p-2 rounded-md bg-gray-800 text-white" />
                                <input type="time" className="p-2 rounded-md bg-gray-800 text-white" />
                            </div>
                        </div>

                        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-[7rem]'>
                <h2 className='text-center text-[1.75rem] font-rubik mb-[1rem]'>Choose By Brands</h2>
                <div className='flex gap-16 mt-16 flex-wrap p-10 justify-evenly md:justify-center'>
                    {brands.map((brand) => (
                        <div className="md:max-w-sm rounded overflow-hidden bg-white w-[6rem]  md:w-full h-[4.5rem] object-cover p-1" key={brand.brand}>
                            <div className="w-full h-full flex justify-center items-center">
                                <img
                                    className="max-w-full max-h-full"
                                    loading='lazy'
                                    src={brand.img}
                                    alt={brand.name}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <section>
                    <hr/>
                    <div className='w-full bg-gray-600 min-h-[5.5rem] flex flex-col md:flex-row justify-evenly items-center	'>

                        <span className='text-center mt-[1rem] md:mt-[0] font-dela '>Free Cancellation</span>
                        <span className='text-center mt-[1rem] md:mt-[0] font-dela ' >24/7 Support</span>
                        <span className='text-center mt-[1rem] mb-[1rem] md:m-[0] font-dela'>Free Pick Up and Drop!</span>
                    </div>
                    <hr/>
                </section>
            </div>
        </div>
    );
}

export default App;
