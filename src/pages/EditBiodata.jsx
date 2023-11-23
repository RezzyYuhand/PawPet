import React, {useState} from 'react'
import { Footer } from "../components";

const EditBiodata = () => {

    const [rememberUser, setRememberUser] = useState(false);
  
    return (
    <div>
        <div className="flex justify-center">
            <div className="flex flex-col-center bg-neutral98 justify-center gap-16 p-20 my-20 w-[80rem] rounded-lg">
                <form className="flex flex-col gap-2">
                    <h1 className='text-center'>Gambar</h1> {/* harusnya gambar */}
                    <div className="flex flex-col w-[46.188rem] gap-2">
                        <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Nama</label>
                        <input type="text" className="border border-neutral40 rounded-md h-9 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"/>
                    </div>
                    <div className="flex flex-col w-[46.188rem] gap-2">
                        <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Age</label>
                        <input type="text" className="border border-neutral40 rounded-md h-9 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"/>
                    </div>
                    <div className="flex flex-col w-[46.188rem] gap-2">
                        <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Gender</label>
                        <span 
                            onClick={() => setRememberUser(!rememberUser)}
                            className="border border-secondary rounded-md h-6 w-6 flex justify-center items-center cursor-pointer">
                            {rememberUser && <span className='border bg-secondary rounded-full h-1/2 aspect-square' />}
                        </span>

                    </div>
                    <div className="flex flex-col w-[46.188rem] gap-2">
                        <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Job</label>
                        <input type="text" className="border border-neutral40 rounded-md h-9 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"/>
                    </div>
                    <div className="flex flex-col w-[46.188rem] gap-2">
                        <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Phone Number</label>
                        <input type="text" className="border border-neutral40 rounded-md h-9 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"/>
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