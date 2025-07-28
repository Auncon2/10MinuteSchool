import { ChecklistItem } from "@/types/product";
import Image from "next/image";

const Checklist = ({ items }: { items: ChecklistItem[] }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="space-y-3">
      {items.map(({ id, icon, text }) => (
        <div key={id} className="flex items-center leading-5 text-[#111827]">
          <Image
            alt="icon"
            loading="lazy"
            width={20}
            height={20}
            src={icon}
            className="inline-block h-[20px] w-[20px]"
          />
          <h4 className="mb-0 inline-block pl-4 tracking-[0.005em]">{text}</h4>
        </div>
      ))}
    </div>
  );
};

export default Checklist;
