function Timelineprops({head, content, foot, id}) {
  return ( 
    <div className="mt-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex gap-2">
          <div className="border-l-2 h-20 border-customPurple"></div>
          <div className="flex flex-col">
            <h6 className="font-bold text-customPurple">{head}</h6>
            <p className="text-xs leading-5">{content}
            </p>
          </div>
        </div>
        <div className="text-left flex gap-2">
          <div className="font-semibold h-5 w-5 grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
            {id}
          </div>
          <h6  className="font-bold text-customPurple">{foot}</h6>
        </div>
      </div>
    </div>
   );
}

export default Timelineprops;