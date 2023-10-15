import Image from "next/image";
import TypewriterComponent from "typewriter-effect";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-bounce">
        <Image alt="logo" fill src="/logo/wingman.svg" />
      </div>
      <div className="flex text-sm text-muted-foreground">
        <p>Wingman is&nbsp;</p>
        <div className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Contemplating.",
                "Pondering.",
                "Musing.",
                "Brainstorming.",
                "Reasoning.",
                "Analyzing.",
                "Considering.",
                "Deliberating.",
                "Ruminating.",
                "Conceiving.",
                "Imagining.",
                "Chewing over.",
                "Formulating.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
