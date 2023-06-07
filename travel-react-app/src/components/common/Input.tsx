import React from 'react';

interface inputProps {
    value: string;
    type: "text" | "number";
    numberText?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({value, type, numberText, onChange}: inputProps) {
  return (
    <input 
    type={type}
    value={value}
    onChange={onChange}
    />
  )
}
//리스트 - item(li), 리스트 목록 - list(ul), addlist, deletelist, putlist
//