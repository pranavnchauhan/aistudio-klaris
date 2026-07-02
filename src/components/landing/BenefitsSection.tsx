"use client";

import { Eye, Clock, Heart, ShieldCheck, Sparkles, Share2 } from "lucide-react";
import GlowingIcon, { type IconColor } from "@/components/landing/GlowingIcon";
import { useInView } from "@/hooks/use-in-view";

const benefits: { icon: typeof Eye; title: string; description: string; color: IconColor }[] = [
  {
    icon: Eye,
    title: "Immediate Visibility",
    description:
      "See structures, assets, loans, and supporting documents together instead of guessing from scattered files.",
    color: "blue",
  },
  {
    icon: Clock,
    title: "Time Savings",
    description:
      "Reduce manual reconstruction. Update records in the app and keep dashboards, maps, and linked views aligned.",
    color: "teal",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description:
      "Keep a clear, accessible record that can support family and adviser conversations without relying on memory.",
    color: "rose",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Risk",
    description:
      "Spot missing ABNs, missing documents, and unclear ownership records earlier in the review process.",
    color: "emerald",
  },
  {
    icon: Sparkles,
    title: "Easy to Maintain",
    description:
      "Built for clients and advisors. Add, update, and organise records through guided forms and clear dashboards.",
    color: "amber",
  },
  {
    icon: Share2,
    title: "Export & Share",
    description:
      "Export reports and share controlled advisor access so the right people work from the same current record.",
    color: "violet",
  },
];

export default function BenefitsSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-background py-16 md:py-24">
      <div ref={ref} className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Benefits
          </p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl text-center">
            Why Families and Advisors Choose Klaris
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group flex items-start gap-5 rounded-xl bg-secondary p-5 transition-all duration-500 hover:bg-muted ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="shrink-0">
                <GlowingIcon icon={benefit.icon} color={benefit.color} size="sm" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
