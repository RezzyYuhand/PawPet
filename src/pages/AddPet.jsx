import React from 'react'
import { Footer } from "../components";

const AddPet = () => {
  return (
    <div>
        <div className="flex justify-center">
            <div className="flex flex-row bg-neutral98 justify-center gap-16 p-20 my-20 w-[80rem] rounded-lg">
                <div className="flex flex-col">
                    <h1>Gambar</h1>
                    <h2>tersedia untuk adopsi</h2>
                </div>
                <div className="flex flex-col">
                    <form action="" className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Nama</label>
                            <input type="text" className="border border-neutral40 rounded-md h-9 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"/>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col gap-3 flex-1">
                                <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Tipe</label>
                                <input type="text" className="border border-neutral40 rounded-md h-9 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"/>
                            </div>
                            <div className="flex flex-col gap-3 flex-1">
                                <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Ras</label>
                                <input type="text" className="border border-neutral40 rounded-md h-9 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col gap-3 flex-1">
                                <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Umur</label>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="text" className="border border-neutral40 rounded-md h-9 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"/>
                                    <h5 className="text-secondary text-[1.5rem]">Bulan</h5>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 flex-1">
                                <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Jenis Kelamin</label>
                                <input type="text" className="border border-neutral40 rounded-md h-9 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Riwayat Kesehatan</label>
                            <textarea type="text" className="h-[10rem] border border-neutral40 rounded-md h-9 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"/>
                        </div>
                        <button type="submit" 
                        className="text-[1.375rem] h-fit w-fit px-12 py-3 mt-2 bg-[#598AC1] text-center text-white rounded-full">
                            Simpan
                            </button>
                    </form>
                </div>
            </div>
        </div>
        {/* footer */}
        <Footer />
    </div>
  )
}

export default AddPet