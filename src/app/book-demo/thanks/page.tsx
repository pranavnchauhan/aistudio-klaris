import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, MailCheck, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Demo Request Received",
  description: "Your Klaris demo request has been received.",
  robots: { index: false, follow: false },
};

export default function BookDemoThanksPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-5">
        <div className="text-center mb-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <MailCheck className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-center">
            Demo request received
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Thanks — your Klaris enquiry has been sent. We will review the context and follow up privately.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <CalendarCheck className="h-5 w-5" />
              Want to choose a time now?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              If you are ready, you can choose a time for a private Klaris walkthrough now. We have still received your form, so we will have your context before the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href="/schedule-demo">
                  Choose a Demo Time
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Website
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              The scheduling step is optional. If you prefer, simply wait for our reply and we will arrange a suitable time with you.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
