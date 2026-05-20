"use client"

const team = [
  {
    name: "Abi Hamdi",
    role: "Founder",
    initials: "AH",
  },
  {
    name: "Ayip Farouk",
    role: "Founder",
    initials: "AF",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-xs text-[#71717A] mb-4 tracking-wide">
          Founder
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 text-[#FAFAFA]">
          Leadership
        </h2>

        {/* Raycast-style team cards */}
        <div className="grid sm:grid-cols-2 gap-3 max-w-lg">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-3 p-4 rounded-lg bg-[#111113] border border-[rgba(255,255,255,0.06)]"
            >
              <div className="w-10 h-10 rounded-md bg-[rgba(255,255,255,0.08)] flex items-center justify-center shrink-0">
                <span className="text-xs font-medium text-[#FAFAFA]">
                  {member.initials}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-medium text-[#FAFAFA]">
                  {member.name}
                </h3>
                <p className="text-xs text-[#71717A]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
