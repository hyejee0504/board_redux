import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/common/Button';
import { BASE_URL } from '../config';
import IEDLists, { informationProps } from '../components/IEDLists';

export default function MainPage() {
  const initial_value: informationProps[] = [
    {
      id: '',
      cidFileName: '',
      iedName: '',
      name: '',
      SNTPCycle: 0,
      ip: '',
      portAmount: 0,
    },
  ];

  const [item, setItem] = useState(initial_value);

  useEffect(() => {
    const getLists = async () => {
      const res = await axios.get("https://192.168.2.151:8080/v2/device/?size=100", {});
      setItem(res.data.data.filter((item: { type: string }) => item.type === "IED"));
    };
    getLists();
  }, []);

  //IED추가하는 함수
  const handleaddIEDitem = () => {
    //모달 만들기 
  }

  //IED수정하는 함수
  const handleupdateIEDitem = () => {

  }


  //IED삭제하는 함수
  const handledeleteIEDitem = () => {

  }

  return (
    <>
      <IEDLists IEDItems={item} />
      <Button text='장치 등록' onClick={handleaddIEDitem}/>
      <Button text='장치 수정' onClick={handleupdateIEDitem}/>
      <Button text='장치 삭제' onClick={handledeleteIEDitem}/>
    </>
  );
}