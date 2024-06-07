function Discussion() {
  return (
    <>
      <p className="text-[.8rem] ms-1 font-semibold">Class Discussion Board</p>

      <ul className="text-sm p-4 space-y-4">
        <li className="">
          <div className="flex flex-col">
            <div className="flex flex-col leading-[.50rem]">
              <p className="font-bold capitalize text-[.8rem]">thegod mylord</p>
              <small className="text-[.6rem] mt-2 font-thin">
                <i>Today at</i> <b className="text-blue-500">07:20AM</b>
              </small>
            </div>
          </div>

          <p className="text-[.7rem] leading-4 py-2 px-1">
            Hi there you must the one. No? then get out of my class dumbell
          </p>
        </li>

        <li className="">
          <div className="flex flex-col">
            <div className="flex flex-col leading-[.50rem]">
              <p className="font-bold capitalize text-[.8rem]">
                nelson mandela
              </p>
              <small className="text-[.6rem] mt-2 font-thin">
                <i>Yeaterday at</i> <b className="text-blue-500">12:20PM</b>
              </small>
            </div>
          </div>

          <p className="text-[.7rem] leading-4 py-2 px-1">
            With Greate power comes great responsibility. and with greate
            responsibility comes your doom
          </p>
        </li>

        <li className="">
          <div className="flex flex-col">
            <div className="flex flex-col leading-[.50rem]">
              <p className="font-bold capitalize text-[.8rem]">that guy</p>
              <small className="text-[.6rem] mt-2 font-thin">
                <i>20-12-2020 at</i> <b className="text-blue-500">02:00PM</b>
              </small>
            </div>
          </div>

          <p className="text-[.7rem] leading-4 py-2 px-1">
            He who holds the fire will hold the fire, by the guy
          </p>
        </li>
      </ul>
    </>
  );
}

export default Discussion;
