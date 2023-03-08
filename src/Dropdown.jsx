import React from 'react'

function Dropdown({title,name,value,onChange,values,placeholder,required,width}) {

  return (
     <div className='my-3 w-full'>
        <div className='flex justify-start  flex-col'>
            <p>{title}<span><sup className={required?'text-red-700':"hidden"}>*</sup></span></p>
          <div className=' '>
              <select value={value} onChange={onChange} name={name} placeholder={placeholder} className={`bg-spanishGray/10 py-2 pr-20 pl-2 rounded-md ${!width? 'w-full':{width}}`} >
                <option  disabled={true}  className="text-xl " value="">{placeholder}</option>
     {values.map((value,index)=>{
   return(
 <option value={value} key={index} >{value}</option>
   );

     })}
     
     
     
      </select>
          </div>
        </div>
            
        </div>
  )
}

export default Dropdown
{/* <option value="BIT">BIT</option>
<option value="CSIT">CSIT</option>
<option value="BIM">BIM</option> */}