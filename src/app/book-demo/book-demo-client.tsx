"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, Send, Shield, Users, Map, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const audienceOptions = [
  "HNW family / family office",
  "Accountant or accounting firm",
  "Financial adviser or advisory practice",
  "Lawyer or estate-planning adviser",
  "Other professional adviser",
];

export default function BookDemoClient() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    if (formData.get("honeypot")) return;

    const audience = formData.get("audience") as string;
    const clientGroups = formData.get("clientGroups") as string;
    const message = formData.get("message") as string;

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: "Demo request",
      honeypot: formData.get("honeypot") as string,
      message: [
        `Audience: ${audience}`,
        clientGroups ? `Client/family groups: ${clientGroups}` : "Client/family groups: Not provided",
        "",
        "What they want to discuss:",
        message,
      ].join("\n"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send request. Please try again.");
      }

      router.push("/contact/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      <section className="py-16 md:py-24 bg-section-hero">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Calendar className="h-4 w-4" />
            <span>Private walkthrough</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-center">
            Request a Klaris Demo
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Tell us about the family group, firm, or advisory workflow you want to improve.
            We will follow up with a suitable walkthrough and next step.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Request a walkthrough</CardTitle>
                <CardDescription>
                  Use this Klaris form instead of a third-party booking page. We will contact you privately.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="honeypot">Website</label>
                    <input
                      type="text"
                      id="honeypot"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="audience">I am enquiring as</Label>
                      <select
                        id="audience"
                        name="audience"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        {audienceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clientGroups">Approx. client/family groups</Label>
                      <Input
                        id="clientGroups"
                        name="clientGroups"
                        placeholder="e.g. 1 family, 5 pilot clients, 20+ groups"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">What would you like to discuss?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about the structures, family office workflow, adviser collaboration, or review process you want to improve."
                      rows={7}
                      required
                    />
                  </div>

                  {error && <p className="text-sm text-destructive">{error}</p>}

                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Request Demo"}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    By submitting this form, you agree that Krrisp Pty Ltd, operator of Klaris, may contact you about your enquiry. We handle your information in accordance with our{" "}
                    <Link href="/privacy" className="underline hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <aside className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Best fit for</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="flex gap-3">
                  <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p>Australian high-net-worth families and family offices that need one clearer structure record.</p>
                </div>
                <div className="flex gap-3">
                  <Map className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p>Accountants and advisers who want to reduce reconstruction work before reviews.</p>
                </div>
                <div className="flex gap-3">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p>Professionals who want a privacy-led way to coordinate sensitive wealth information.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What we will cover</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Your current structure-record problem",
                  "How Klaris supports reviews and succession discussions",
                  "Who needs to be involved from the family or adviser team",
                  "A sensible pilot or onboarding path",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </main>
  );
}
