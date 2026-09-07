import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions — Rexsis",
  description: "The terms that govern your use of Rexsis.",
};

const sections = [
  {
    heading: "1. Agreement to terms",
    paragraphs: [
      "By creating an account or otherwise using Rexsis (the \"Service\"), you agree to these Terms & Conditions. If you don't agree, please don't use the Service.",
    ],
  },
  {
    heading: "2. What Rexsis is (and isn't)",
    paragraphs: [
      "Rexsis is a voice-based practice tool. It helps you get more comfortable speaking through guided conversation practice with an AI coach and focused feedback.",
      "Rexsis is not therapy, medical treatment, or a diagnostic tool, and it isn't a substitute for professional mental health care. If you're looking for support with a medical or psychological condition, please speak with a licensed professional.",
    ],
  },
  {
    heading: "3. Eligibility",
    paragraphs: [
      "You must be at least 16 years old, or the age of digital consent where you live, to use Rexsis. By using the Service, you confirm you meet this requirement.",
    ],
  },
  {
    heading: "4. Your account",
    paragraphs: [
      "You're responsible for keeping your login credentials secure and for all activity that happens under your account. Let us know right away if you think someone else has accessed it.",
    ],
  },
  {
    heading: "5. Acceptable use",
    bullets: [
      "Don't use Rexsis to harass, threaten, or abuse other people.",
      "Don't attempt to reverse-engineer, scrape, or extract the underlying models or systems.",
      "Don't use practice sessions to generate or rehearse illegal, harmful, or hateful content.",
      "Don't share your account or resell access to the Service.",
      "Don't attempt to disrupt, overload, or interfere with the Service's normal operation.",
    ],
  },
  {
    heading: "6. Voice data and practice sessions",
    paragraphs: [
      "When you practice with Rexsis, we record and process your voice to generate transcripts and feedback. Our Privacy Policy explains this in full, including how long recordings are kept and how you can delete them.",
    ],
  },
  {
    heading: "7. Subscriptions and payment",
    paragraphs: [
      "Some features may require a paid plan. Pricing and billing terms are shown at the time of purchase. Paid plans renew automatically until cancelled; you can cancel anytime from your account settings, and cancellation takes effect at the end of your current billing period.",
    ],
  },
  {
    heading: "8. Intellectual property",
    paragraphs: [
      "Rexsis, including its underlying technology, design, and branding, is owned by us or our licensors. Transcripts and feedback generated from your own sessions are yours to keep and export.",
    ],
  },
  {
    heading: "9. Disclaimers",
    paragraphs: [
      "The Service is provided \"as is.\" We don't guarantee that practicing with Rexsis will produce any particular outcome, and feedback from an AI coach may occasionally be incomplete or imperfect.",
    ],
  },
  {
    heading: "10. Limitation of liability",
    paragraphs: [
      "To the extent permitted by law, Rexsis and its team aren't liable for indirect, incidental, or consequential damages arising from your use of the Service.",
    ],
  },
  {
    heading: "11. Termination",
    paragraphs: [
      "We may suspend or terminate accounts that violate these terms. You're free to stop using the Service and delete your account at any time.",
    ],
  },
  {
    heading: "12. Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. We'll post changes here, and for anything material, we'll let you know by email or in-app notice.",
    ],
  },
  {
    heading: "13. Contact",
    paragraphs: [
      "Questions about these terms? Reach us at contact@rexsis.com",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="flex justify-center">
      <LegalPage
        eyebrow="Legal"
        title="Terms & Conditions"
        updated="September 7, 2026"
        intro="These terms explain what you can expect from Rexsis, and what we expect from you. Please read them before you start practicing."
        sections={sections}
      />
    </div>
  );
}