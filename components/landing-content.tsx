"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserAvatar from "./user-avatar";

const testimonials = [
  {
    name: "Jessa",
    avatar: "J",
    title: "Data Scientist",
    description:
      "The AI app's data analysis capabilities are second to none. It's a must-have for professionals in my field.",
  },
  {
    name: "Corina",
    avatar: "C",
    title: "Entrepreneur",
    description:
      "Managing my business is now a breeze, thanks to this remarkable AI app.",
  },
  {
    name: "Chas",
    avatar: "C",
    title: "Medical Field",
    description:
      "My research process has been significantly streamlined with this AI app. It's an invaluable tool.",
  },
  {
    name: "Ryah",
    avatar: "R",
    title: "Marketing Manager",
    description:
      "I can't believe how much time I've saved using this AI tool for market analysis. It's a true gem.",
  },
  {
    name: "Eudes",
    avatar: "E",
    title: "Med VA",
    description: "I'm the gayest motherfucker in town woohoo!!!",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.name} className="text-white bg-[#192339] border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <UserAvatar avatar={item.avatar} />
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
