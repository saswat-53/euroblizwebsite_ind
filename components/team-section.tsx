"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

// Placeholder for a testimonial display
// const TestimonialCard = ({ client, quote }: { client: string, quote: string }) => (
//   <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-primary mt-6">
//     <p className="text-sm italic text-gray-700">"{quote}"</p>
//     <p className="text-xs font-semibold mt-2 text-primary">- {client}</p>
//   </div>
// );
// ------------------------------

export function TeamSection() {
  const t = useTranslations()

  // NOTE: You need to add 'role' and 'imageKey' (or image URL) to your team members
  const teamMembers = [
    {
      key: "mayukh",
      name: t("team.mayukh"),
      role: "Founder",
      imageKey: "/ProfilePic.png",
      phone: "+33-749706796",
      email: "mayukh2094@gmail.com",
    },
    {
      key: "Suraj",
      name: t("team.Suraj"),
      role: "Associate Director / Business Consultant",
      imageKey: "/Suraj bhayya.png",
      phone: "+91-7209497210",
      email: "surajgpt308@gmail.com",
    },
  ]

  return (
    <section id="team" className="py-26 px-4 bg-section-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">{t("team.title")}</h2>

        {/* Team Grid (Updated for 2 members to be centered) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-20 max-w-2xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.key} className="bg-card rounded-xl overflow-hidden shadow-lg border border-border/50 transition-shadow hover:shadow-xl">
              <div className="relative w-full h-64">
                <Image
                  src={member.imageKey}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 text-center space-y-1">
                <h4 className="text-xl font-extrabold text-foreground">{member.name}</h4>
                <p className="text-sm font-semibold text-primary">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.phone}</p>
                <p className="text-sm text-muted-foreground">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}