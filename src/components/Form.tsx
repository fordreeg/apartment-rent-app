import React, {FC} from 'react'
import Select from "./Select";
import {ROOM_COUNT_OPTIONS, SOURCE_OPTIONS} from "../data";
import Field from "./Field";

interface FromProps {
}

const Form: FC<FromProps> = () => {
  return (
    <form className='form'>
      <Field label='місто:' id='city'/>
      <div className="form-price">
        <Field label='ціна від:' id='price_from'/>
        <div className='divider'/>
        <Field label='ціна до:' id='price_to'/>
      </div>
      <div className="form-price">
        <Select selectLabel='к-ть кімнат:' options={ROOM_COUNT_OPTIONS}/>
        <div className='divider'/>
        <Select selectLabel='джерело:' options={SOURCE_OPTIONS}/>
      </div>
    </form>
  )
}

export default Form
