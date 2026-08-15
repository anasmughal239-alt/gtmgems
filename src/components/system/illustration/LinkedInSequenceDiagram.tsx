import { STAGE_COLORS } from "./stageColors";
import {
  CapGauge,
  GuardrailNote,
  SequenceStep,
  TimelineFrame,
  WaitChip,
} from "./SequenceTimeline";

/**
 * LinkedIn hero visual for /linkedin-outbound -- replaces the generic
 * AskAiIllustration. Every number below is copied verbatim from
 * LINKEDIN_BENCHMARKS / LINKEDIN_FAQ in channel-content.tsx.
 */
export function LinkedInSequenceDiagram() {
  const color = STAGE_COLORS.linkedin.hex;

  return (
    <TimelineFrame eyebrow="LinkedIn sequence" color={color}>
      <SequenceStep
        n={1}
        title="Connect"
        detail="Runs only after the email sequence goes quiet"
        color={color}
      />
      <WaitChip label="wait for accept" color={color} />
      <SequenceStep
        n={2}
        title="Message"
        detail="10.4% average reply rate, post-connection"
        color={color}
        last
      />

      <div className="mt-6 grid grid-cols-2 gap-2">
        <CapGauge label="Connection requests" value="15-25/day" color={color} />
        <CapGauge label="Messages to connections" value="100-150/day" color={color} />
      </div>

      <GuardrailNote color={color}>
        <span className="font-medium">&lt;30% acceptance: throttle risk.</span>{" "}
        Volume stays well under LinkedIn's own limit on purpose.
      </GuardrailNote>

      <GuardrailNote color={color}>
        <span className="font-medium">Reply halts the sequence</span>{" "}
        immediately: no more scheduled steps go out.
      </GuardrailNote>
    </TimelineFrame>
  );
}
