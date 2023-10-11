import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src="/logo.png" />
      </div>
      {/* TODO: animation changing for verb [thinking, imagining, creating ...] */}

      {/* TODO: first time run may take 10-15mins for music */}
      <p className="text-sm text-muted-foreground">Wingman is thinking...</p>
    </div>
  );
};

export default Loader;
