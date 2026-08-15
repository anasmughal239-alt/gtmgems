import { STAGE_COLORS } from "./stageColors";
import {
  CapGauge,
  GuardrailNote,
  SequenceStep,
  TimelineFrame,
  WaitChip,
} from "./SequenceTimeline";

/**
 * Cold-email hero visual for /cold-email-infrastructure -- replaces the
 * generic DocsSyncIllustration. Every number below is copied verbatim from
 * COLD_EMAIL_BENCHMARKS / COLD_EMAIL_FAQ in channel-content.tsx.
 */
export function EmailSequenceDiagram() {
  const color = STAGE_COLORS.email.hex;

  return (
    <TimelineFrame eyebrow="Cold email sequence" color={color}>
      <SequenceStep
        n={1}
        title="Warmup"
        detail="14-21 days before the first live send"
        color={color}
      />
      <WaitChip label="ramp complete" color={color} />
      <SequenceStep
        n={2}
        title="Email 1"
        detail="58% of replies come from this step"
        color={color}
      />
      <WaitChip label="wait" color={color} />
      <SequenceStep n={3} title="Email 2" color={color} />
      <WaitChip label="wait" color={color} />
      <SequenceStep
        n={4}
        title="Email 3"
        detail="No reply → routes to LinkedIn"
        color={color}
        last
      />

      <div className="mt-6 grid grid-cols-2 gap-2">
        <CapGauge label="Target placement" value="95%+" color={color} />
        <CapGauge label="Complaint rate cap" value="<0.1%" color={color} />
      </div>

      <GuardrailNote color={color}>
        <span className="font-medium">2% bounce rate: hard stop.</span> The
        domain is paused and diagnosed immediately.
      </GuardrailNote>
    </TimelineFrame>
  );
}
