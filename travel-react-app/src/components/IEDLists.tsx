import React from 'react';
import IEDListItem from './IEDListItem';

interface informationProps {
    id: string;
    CIDFile: string;
    IEDName: string;
    deviceName : string;
    SNTPCycle : number;
    IPAddress: string;
    portAmount : number;
  }

export default function IEDLists(IEDItems: informationProps[]) {
  return (
    <ul>
        {IEDItems.map(item => (
        <IEDListItem 
        key={item.id} 
        id={item.id} 
        CIDFile={item.CIDFile}
        IEDName={item.IEDName}
        deviceName={item.deviceName} 
        SNTPCycle={item.SNTPCycle} 
        IPAddress={item.IPAddress} 
        portAmount={item.portAmount}
        />
      ))}
    </ul>
  )
}
