"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserAvatar from "./user-avatar";

const testimonials = [
  {
    name: "Jessa",
    title: "Data Scientist",
    description:
      "The AI app's data analysis capabilities are second to none. It's a must-have for professionals in my field.",
  },
  {
    name: "Corina",
    title: "Entrepreneur",
    description:
      "Managing my business is now a breeze, thanks to this remarkable AI app.",
  },
  {
    name: "Chas",
    title: "Medical Field",
    description:
      "My research process has been significantly streamlined with this AI app. It's an invaluable tool.",
  },
  {
    name: "Eudes",
    title: "ECG Technician",
    description:
      "It simplifies data analysis, improves accuracy, and enhances patient care. It's an essential tool for professionals in the field.",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-black font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {testimonials.map((item) => (
          <div key={item.name} className="relative">
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-b from-purple-600 via-indigo-600 to-pink-600 blur-md"></div>
            <Card className="text-white bg-[#192339] border-none relative h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <UserAvatar avatar={item.name.charAt(0)} />
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
