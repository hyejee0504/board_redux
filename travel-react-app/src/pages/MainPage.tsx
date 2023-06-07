import React, {useEffect} from 'react';
import axios from 'axios';
// import Button from '../components/common/Button';
// import IEDLists from '../components/IEDLists';
import { BASE_URL } from '../config';

export default function MainPage() {

    const list = use

  useEffect(() => {
    const getLists = async () => {
      const res = await axios.get("https://192.168.2.151:8080/v2/device/?size=100", {});
      console.log(res.data.data.filter((item: { type: string; }) => item.type === "IED"));
    }
    getLists();
}, [])

  return (
    <>
        {/* <IEDLists IEDItems={}/> */}
        {/* <Button text='장치 등록' onClick={handleaddIEDitem}/>
        <Button text='장치 수정' onClick={handleaddIEDitem}/>
        <Button text='장치 삭제' onClick={handleaddIEDitem}/> */}
    </>
  )
}