import { Icon } from '@iconify/react';
import { tools } from '@/utils/const';

export const Tools = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2>Skills & Tools</h2>
      <div className="flex flex-col gap-4">
        {tools?.map((item) => (
          <div className="flex items-center gap-3" key={item.name}>
            <Icon icon='mdi:circle' className="w-1.5 h-1.5 text-neutral-700" />
            <span className="text-neutral-700 dark:text-white">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
