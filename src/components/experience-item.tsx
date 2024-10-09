import Image from 'next/image';
import React from 'react';

interface ExperienceItemProps {
  logo: string;
  position: string;
  company: string;
  period: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  logo,
  position,
  company,
  period,
}) => {
  return (
    <div className="flex items-center justify-between rounded-full bg-white p-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <Image src={logo} alt={`${company} Logo`} className="h-10 w-10 rounded-full" />
        <div>
          <p className="text-sm font-bold">{position}</p>
          <p className="text-sm text-[#848484]">{company}</p>
        </div>
      </div>
      <span className="text-sm text-[#848484]">{period}</span>
    </div>
  );
};
