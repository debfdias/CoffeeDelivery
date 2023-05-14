import MapPinYellow from "../assets/mappinyellow.svg";

export function Form() {
  return (
    <div className="flex flex-col mr-8">
      <h1 className="text-base-subtitle font-baloo2 font-bold text-lg mt-10 mb-[15px]">
        Finish your order
      </h1>
      <div className="bg-base-card pt-10 px-10 rounded-md">
        <div className="text-base-subtitle ">
          <h2 className="flex gap-2  ">
            <img src={MapPinYellow} /> Delivery address
          </h2>
          <p className="ml-[30px] mb-8 text-sm">
            Enter the address where you want to receive your order
          </p>

          <form className="mx-5 mb-10 text-sm ">
            <div className="mb-4">
              <input
                className=" appearance-none bg-base-input rounded-md  h-[42px] pl-2"
                placeholder="ZIP"
                type="number"
                name="cep"
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none bg-base-input w-full rounded-md h-[42px] pl-2 "
                placeholder="Street"
                type="text"
                name="street"
              />
            </div>
            <div className="mb-4 flex gap-3">
              <input
                className=" appearance-none bg-base-input rounded-md w-32 h-[42px] pl-2 "
                placeholder="Number"
                type="number"
                name="number"
              />
              <div className="relative inline-block">
                <input
                  className=" appearance-none bg-base-input rounded-md h-[42px] w-[300px] pl-2 "
                  placeholder="Line 2"
                  type="text"
                  name="moreinfo"
                />
                <span className="absolute text-base-label italic flex justify-center items-center right-3 top-3 text-xs">
                  Optional
                </span>
              </div>
            </div>
            <div className="mb-4 flex gap-3">
              <input
                className=" appearance-none  bg-base-input rounded-md w-full h-[42px] pl-2 "
                placeholder="Neighborhood"
                type="text"
                name="district"
              />

              <input
                className=" appearance-none  bg-base-input rounded-md w-full h-[42px] pl-2 "
                placeholder="City"
                type="text"
                name="city"
              />
              <input
                className=" appearance-none  bg-base-input rounded-md w-9 h-[42px] pl-2 "
                placeholder="ST"
                type="text"
                name="UF"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
