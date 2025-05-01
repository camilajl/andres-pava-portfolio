'use client';

export const HeaderText = ({ title }: { title: string }) => {
  return (
    <div className=" flex items-center justify-center border border-dashed">
      <h3>{title}</h3>
    </div>
  );
};

export default HeaderText;
