import {
  IllustrationStage,
  MockBadge,
  MockBar,
  MockConnector,
  MockControlRow,
  MockWindow,
} from "./mock";

/**
 * Ready-made illustrations built from the mock.tsx primitives.
 *
 * These are worked examples as much as components — copy one, change the
 * geometry, and you have a new card. Each is a fixed-size stage so the
 * composition scales as a unit instead of reflowing.
 */

function SkeletonLines({
  left,
  top,
  widths,
  gap = 12,
}: {
  left: number;
  top: number;
  widths: number[];
  gap?: number;
}) {
  return (
    <>
      {widths.map((w, i) => (
        <MockBar key={i} left={left} top={top + i * gap} width={w} />
      ))}
    </>
  );
}

/** Doc page building itself — source panel wired into a rendered page. */
export function DocsSyncIllustration() {
  return (
    <IllustrationStage width={635} height={247}>
      {/* small source toggle, left */}
      <MockWindow left={0} top={96} width={195} height={46} radius={10}>
        <MockBadge left={10} top={11} size={24} radius={7} />
        <MockBar left={44} top={20} width={92} height={7} />
        <span className="absolute right-[10px] top-[13px] inline-block h-[20px] w-[34px] rounded-full bg-mint-dark">
          <span className="absolute right-[2px] top-[2px] size-4 rounded-full bg-white" />
        </span>
      </MockWindow>

      <MockConnector left={198} top={100} width={70} />
      <MockConnector left={268} top={40} height={60} vertical />

      {/* rendered docs page, right */}
      <MockWindow right={0} top={0} width={380} height={247}>
        <MockBar left={9} top={9} width={31} height={11} tone="accent" />
        <MockBar left={178} top={9} width={81} height={11} />
        <MockBar right={11} top={9} width={23} height={11} />

        <SkeletonLines left={9} top={45} widths={[26, 39, 39, 35, 30]} />

        <MockBar left={92} top={45} width={140} height={9} />
        <MockBar left={92} top={68} width={230} height={9} />
        <MockBar left={92} top={91} width={116} height={11} tone="accent" />
        <MockBar left={92} top={116} width={264} height={9} />
        <MockBar left={92} top={139} width={210} height={9} />
        <MockBar left={92} top={162} width={92} height={9} />
      </MockWindow>
    </IllustrationStage>
  );
}

/** A queue of config automations, front one switched on. */
export function ConfigUpdateIllustration({
  label = "Update config",
}: {
  label?: string;
}) {
  return (
    <IllustrationStage
      width={268}
      height={79}
      top="36%"
      scaleClass="scale-[0.82] sm:scale-90 lg:scale-100"
    >
      <MockWindow
        left="50%"
        top={0}
        width={201}
        height={38}
        radius={14}
        className="-translate-x-1/2"
      >
        <MockBadge left={10} top={9} size={17} radius={7} />
      </MockWindow>

      <MockWindow
        left="50%"
        top={13}
        width={228}
        height={43}
        radius={16}
        className="-translate-x-1/2"
      >
        <MockBadge left={11} top={11} size={21} radius={8} />
      </MockWindow>

      <MockControlRow
        label={label}
        left="50%"
        top={28}
        width={268}
        className="-translate-x-1/2"
        icon={
          <svg viewBox="0 0 14 14" fill="none" className="size-[14px]">
            <path
              d="M7 1.5v11M1.5 7h11"
              stroke="white"
              strokeWidth="1.13"
              strokeLinecap="round"
            />
          </svg>
        }
      />
    </IllustrationStage>
  );
}

/** The assistant prompt bar. */
export function AskAiIllustration({
  placeholder = "Ask AI anything...",
}: {
  placeholder?: string;
}) {
  return (
    <IllustrationStage
      width={336}
      height={56}
      top="42%"
      scaleClass="scale-90 sm:scale-95 lg:scale-100"
    >
      <div className="absolute inset-0 flex items-center rounded-full border border-background-tertiary bg-background-primary pl-5 pr-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <svg viewBox="0 0 16 16" fill="none" className="size-[18px] shrink-0">
          <path
            d="M8 2l1.2 3.3L12.5 6.5 9.2 7.7 8 11 6.8 7.7 3.5 6.5l3.3-1.2L8 2Z"
            fill="rgb(23,207,133)"
          />
        </svg>
        <span className="ml-3 text-[17px]/[19px] text-foreground-muted">
          {placeholder}
        </span>
        <span className="ml-auto flex size-8 items-center justify-center rounded-full bg-background-secondary">
          <svg viewBox="0 0 16 16" fill="none" className="size-4">
            <path
              d="M3 8h9M8.5 4.5L12 8l-3.5 3.5"
              stroke="rgb(72,84,80)"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </IllustrationStage>
  );
}

/** Analytics page with floating annotation pins. */
export function ReaderInsightsIllustration() {
  return (
    <IllustrationStage width={420} height={230} top="40%">
      <MockWindow left={40} top={20} width={340} height={200} radius={10}>
        <MockBar left={12} top={12} width={26} height={9} tone="accent" />
        <SkeletonLines left={12} top={36} widths={[22, 34, 34, 30]} gap={11} />

        <MockBar left={70} top={36} width={180} height={8} />
        <span className="absolute left-[70px] top-[60px] h-[42px] w-[92px] rounded-[6px] bg-mint-dark" />
        <span className="absolute left-[172px] top-[60px] h-[42px] w-[92px] rounded-[6px] bg-mint-dark opacity-70" />
        <MockBar left={70} top={116} width={210} height={8} />
        <MockBar left={70} top={136} width={150} height={8} />
      </MockWindow>

      {/* floating pins */}
      <span className="absolute left-[16px] top-[6px] flex size-[30px] items-center justify-center rounded-[9px] border border-[#d8b4fe] bg-[#f3e8ff]">
        <svg viewBox="0 0 16 16" fill="none" className="size-4">
          <path
            d="M8 2.5l4.5 2v3.2c0 2.6-1.9 4.6-4.5 5.3-2.6-.7-4.5-2.7-4.5-5.3V4.5L8 2.5Z"
            stroke="#a855f7"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="absolute right-[10px] top-[34px] flex size-[30px] items-center justify-center rounded-[9px] border border-[#fdba74] bg-[#fb923c]">
        <svg viewBox="0 0 16 16" fill="white" className="size-4">
          <path d="M8 2l1.8 3.9 4.2.5-3.1 2.9.8 4.2L8 11.4 4.3 13.5l.8-4.2L2 6.4l4.2-.5L8 2Z" />
        </svg>
      </span>
    </IllustrationStage>
  );
}
