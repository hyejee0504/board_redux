import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/common/Button';
import { BASE_URL } from '../config';
import IEDLists, { informationProps } from '../components/IEDLists';
import Modal from '../components/common/Modal';
import AddForm from '../components/AddForm';


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

  const [isOpenAddModal, setOpenAddModal] = useState<boolean>(false);
  const [isOpenEditModal, setOpenEditModal] = useState<boolean>(false);

  useEffect(() => {
    const getLists = async () => {
      const res = await axios.get(`http://192.168.2.151/v2/device?size=100&types=IED`, {});
      setItem(res.data.data);
    };
    getLists();
  }, []);

  //IED추가하는 함수
  const handleaddIEDitem = () => {
    //모달 만들기 
    onClickToggleModal("add");
  }

  //IED수정하는 함수
  const handleupdateIEDitem = () => {
    onClickToggleModal("edit");
  }


  //IED삭제하는 함수
  const handledeleteIEDitem = () => {

  }

  //모달창 확인하는 함수
  const onClickToggleModal = useCallback((type:string) => {
    type==="add"? setOpenAddModal(!isOpenAddModal) : setOpenEditModal(!isOpenEditModal);
  }, [isOpenAddModal, isOpenEditModal]);

  return (
    <>
      <IEDLists IEDItems={item} />
      <Button text='장치 등록' onClick={handleaddIEDitem}/>
      <Button text='장치 수정' onClick={handleupdateIEDitem}/>
      <Button text='장치 삭제' onClick={handledeleteIEDitem}/>

      {/* 장치등록 모달 */}
      {isOpenAddModal && (
        <Modal onClickToggleModal={onClickToggleModal} type="add"> 
          <AddForm/>
        </Modal>
      )}
      {/* 장치수정 모달 */}
      {isOpenEditModal && (
        <Modal onClickToggleModal={onClickToggleModal} type="edit"> 
          이곳에 children이 들어갑니다.
        </Modal>
      )}
    </>
  );
}