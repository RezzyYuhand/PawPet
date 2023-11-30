import React, {useEffect, useState} from 'react'
import { Footer } from "../components";

const EditBiodata = () => {

    const [bioName, setBioName] = useState("");
    const [bioAge, setBioAge] = useState("");
    const [bioGender, setBioGender] = useState("");
    const [bioJob, setBioJob] = useState("");
    const [bioPhoneNumber, setBioPhoneNumber] = useState("");
    const [selectedFemale, setSelectedFemale] = useState(false);
    const [selectedMale, setSelectedMale] = useState(false);

    const handleFemaleClick = () => {
        setSelectedFemale(true);
        setSelectedMale(false);
        setBioGender("Perempuan");
    };

    const handleMaleClick = () => {
        setSelectedMale(true);
        setSelectedFemale(false);
        setBioGender("Laki-Laki");
    };

    useEffect(() => {
        console.log(bioGender);
    }, [bioGender]);
  
    return (
    <div>
        <div className="flex justify-center">
            <div className="flex flex-col-center bg-neutral98 justify-center gap-16 p-20 my-20 w-[80rem] rounded-lg">
                <form className="flex flex-col gap-2">
                    <h1 className='text-center'>Gambar</h1> {/* harusnya gambar */}
                    <div className="flex flex-col w-[46.188rem] gap-2">
                        <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Nama</label>
                        <input 
                            type="text"
                            value={bioName}
                            onChange={(e) => setBioName(e.target.value)}
                            placeholder="Your Name" 
                            className="border border-neutral40 rounded-md text-[1.5rem] h-9 px-4 py-6 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col w-[46.188rem] gap-2">
                        <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Age</label>
                        <input 
                            type="number"
                            min={1}
                            value={bioAge}
                            onChange={(e) => setBioAge(e.target.value)}
                            placeholder="20" 
                            className="border border-neutral40 rounded-md text-[1.5rem] h-9 px-4 py-6 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col w-[46.188rem] gap-2">
                        <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Gender</label>
                        <div className="flex flex-row gap-6">
                            <div className="flex flex-row gap-2 items-center">
                                <span 
                                    onClick={handleFemaleClick}
                                    className="border border-secondary rounded-md h-6 w-6 flex justify-center items-center cursor-pointer">
                                    {selectedFemale && 
                                        <span className='border bg-secondary rounded-md h-full aspect-square' ></span>
                                    }
                                </span>
                                <span className="font-normal text-[1.5rem] text-black">Perempuan</span>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <span 
                                    onClick={handleMaleClick}
                                    className="border border-secondary rounded-md h-6 w-6 flex justify-center items-center cursor-pointer">
                                    {selectedMale && 
                                        <span className='border bg-secondary rounded-md h-full aspect-square' ></span>
                                    }
                                </span>
                                <span className="font-normal text-[1.5rem] text-black">Laki - Laki</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[46.188rem] gap-2">
                        <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Job</label>
                        <input 
                            type="text"
                            value={bioJob}
                            onChange={(e) => setBioJob(e.target.value)}
                            placeholder="Your Job" 
                            className="border border-neutral40 rounded-md text-[1.5rem] h-9 px-4 py-6 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col w-[46.188rem] gap-2">
                        <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Phone Number</label>
                        <input
                            type="text"
                            value={bioPhoneNumber}
                            onChange={(e) => setBioPhoneNumber(e.target.value)}
                            placeholder="6282123456789" 
                            className="border border-neutral40 rounded-md text-[1.5rem] h-9 px-4 py-6 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-row justify-end gap-3">
                        <button className="text-[1.375rem] h-fit w-fit px-12 py-3 mt-2 bg-[#598AC1] text-center text-white rounded-full">
                            Cancel
                        </button>
                        <button className="text-[1.375rem] h-fit w-fit px-12 py-3 mt-2 bg-[#598AC1] text-center text-white rounded-full">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
        {/* footer */}
        <Footer />
    </div>
  )
}

export default EditBiodata