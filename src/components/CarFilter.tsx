export const CarFilter = () => {
    return (
        <div>
            <div className=" mt-6">
                <div className="flex flex-col text-white italic">
                    <div className="bg-[#141414] p-6">
                        <form className="">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-white">Select Make</label>
                                    <select id="manufacturer" className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2">
                                        <option>Audi</option>
                                        <option>Starbucks</option>
                                        <option>Hilti</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-white">Select Model</label>
                                    <select id="manufacturer" className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2">
                                        <option>Q5</option>
                                        <option>Starbucks</option>
                                        <option>Hilti</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-white">Select Make</label>
                                    <select id="manufacturer" className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2">
                                        <option>2019</option>
                                        <option>Starbucks</option>
                                        <option>Hilti</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="">
                                        <div className="flex justify-center md:justify-start place-self-center md:mt-4">
                                            <a href="#" className="relative w-full">
                                                {/* <span className="absolute top-0 left-0 mt-1 ml-1 lg:mt-1.5 lg:ml-1.5 h-full w-full bg-white transform"></span> */}
                                                <span className="hover:-translate-y-1 transform duration-300 flex justify-center items-center gap-2 bg-[#FE5C43] fold-bold relative h-full w-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white transition">
                                                    <p className="">Search</p>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}
