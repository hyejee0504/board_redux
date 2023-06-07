import React from 'react';

interface informationProps {
    id: string;
    CIDFile: string;
    IEDName: string;
    deviceName : string;
    SNTPCycle ?: number;
    IPAddress: string;
    portAmount ?: number;
  }

export default function IEDListItem({id, CIDFile, IEDName, deviceName, SNTPCycle, IPAddress, portAmount}:informationProps) {
  
  return (
    <li>
        <input type='checkbox'/>
        {CIDFile}
        {IEDName}
        {deviceName}
        {SNTPCycle}
        {IPAddress}
        {portAmount}
    </li>
  )
}
