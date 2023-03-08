import React from 'react'

function TextInput({title,placeholder,name,onChange,value,required}) {
  return (
    <div className='my-2 w-full'>
    <div className='felx flex-start flex-col'>
        <p>{title}<span><sup className={required?'text-red-700':"hidden"}>*</sup></span></p>
        <input placeholder={placeholder} value={value} name={name} onChange={(e)=>{onChange(e)}} className="bg-spanishGray/10 w-full pr-1 pl-2 py-2 rounded-md text-base"/>
    </div>
</div>
  )
}

export default TextInput