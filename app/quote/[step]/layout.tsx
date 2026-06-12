import QuizProgress from "@/components/QuizProgress";
import QuoteHighlighter from "@/components/QuoteHighlighter";

export default async function QuoteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;

  return (
    <>
      <QuoteHighlighter />
      {step !== "16" && <QuizProgress step={step} />}
      {children}
    </>
  );
}