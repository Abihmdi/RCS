"use client"

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-xs text-[#71717A] mb-4 tracking-wide">
            Who we are
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug mb-10 text-[#FAFAFA]">
            We build modern digital systems that help businesses scale, automate, 
            and grow through technology, data, and intelligent solutions.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-sm text-[#71717A] leading-relaxed">
              The use of technology is key to excelling in business today. 
              However, the value of this capability is only realized when clear 
              strategy, analysis, and expertise meet precise execution.
            </p>

            <p className="text-sm text-[#71717A] leading-relaxed">
              We bring together strategy, technology implementation, and deep 
              domain expertise to drive transformation. With RCS, the focus is 
              not solely on technology but on delivering measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
