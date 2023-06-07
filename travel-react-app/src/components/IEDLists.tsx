import React, {useRef} from 'react';
import IEDListItem from './IEDListItem';

export interface informationProps {
  id: string;
  cidFileName: string;
  iedName : string;
  name : string;
  SNTPCycle?: number;
  ip: string;
  portAmount?: number;
}

interface IEDListsProps {
  IEDItems: informationProps[];
}

export default function IEDLists(props: IEDListsProps) {
  const { IEDItems } = props;
  console.log(IEDItems);
  

  return (
    <ul>
      {IEDItems.map(item => (
        <IEDListItem
          key={item.id}
          id={item.id}
          CIDFile={item.cidFileName}
          IEDName={item.iedName}
          deviceName={item.name}
          SNTPCycle={item.SNTPCycle}
          IPAddress={item.ip}
          portAmount={item.portAmount}
        />
      ))}
    </ul>
  );
}
