import Image from "next/image";

interface EmptyProps {
  label: string;
  src: string;
}

const Empty: React.FC<EmptyProps> = ({ label, src }) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image alt="Empty" fill src={src} />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
