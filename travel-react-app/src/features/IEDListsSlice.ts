/* 액션 타입 선언 - 가져오기, 추가, 수정, 삭제*/
const GET_IED = 'IEDListsSlice/GET_IED';
const ADD_IED = 'IEDListsSlice/ADD_IED';
const EDIT_IED = 'IEDListsSlice/EDIT_IED';
const DELETE_IED = 'IEDListsSLice/DELETE_IED';

// const TOGGLE_TODO = 'todos/TOGGLE_TODO';

interface informationProps {
  id: string;
  CIDFile: string;
  IEDName: string;
  deviceName : string;
  SNTPCycle ?: number;
  IPAddress : string;
  portAmount ?: number;
}

const checkedItems = [];

const initialState = {
  information: [],
};


/* 액션 생성함수 선언 */
export const getIED = (information: informationProps[]) => ({
  type: GET_IED,
  IEDlists: {
    information
  }
});

export const addIED = (information: informationProps)  => ({
  type: ADD_IED,
  IEDlists: {
    information
  }
});

export const editIED = (information: informationProps) => ({
  type: EDIT_IED,
  IEDlists: {
    information
  }
});

export const deldteIED = (information: informationProps) => ({
  type: DELETE_IED,
  IEDlists: {
    information
  }
});

export default function IEDListsReducer(state = initialState, action: { type: any; IEDlists: ConcatArray<never>; }) {
  switch (action.type) {
    case GET_IED:
      return { informagion : action.IEDlists }
    case ADD_IED:
      return state.information.concat(action.IEDlists);
    // case EDIT_IED:
      // return state.map(
      //   IEDlist =>
        
      // );
    default:
      return state;
  }
}