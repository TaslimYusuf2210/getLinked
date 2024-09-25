function Timelineprops({head, content, foot, id}) {
  return ( 
    <div className="mt-4">
      <div className="flex justify-center items-center gap-4">
        <div className="grid place-items-center gap-2">
          <div className="border-l-2 h-20 border-customPurple"></div>
          <div className="font-semibold h-5 w-5 grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
            {id}
          </div>
        </div>
        <div className="text-left flex flex-col gap-2">
          <h6 className="font-bold text-customPurple">{head}</h6>
          <p className="text-xs leading-5">{content}
          </p>
          <h6  className="font-bold text-customPurple">{foot}</h6>
        </div>
      </div>
    </div>
   );
}

export default Timelineprops;