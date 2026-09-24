type Country = "pl" | "us";

const LABEL: Record<Country, string> = {
  pl: "Polski",
  us: "English",
};

/**
 * A country mark at icon size. Drawn rather than an emoji: flag emoji do not
 * render at all on Windows, which shows the letter pair instead.
 */
export default function Flag({ country }: { country: Country }) {
  return (
    <span className="flag" role="img" aria-label={LABEL[country]}>
      <svg
        viewBox="0 0 20 13"
        className="flag-svg"
        aria-hidden="true"
        focusable="false"
      >
        {country === "pl" && (
          <>
            <rect width="20" height="13" fill="#ffffff" />
            <rect y="6.5" width="20" height="6.5" fill="#d4213d" />
          </>
        )}

        {country === "us" && (
          <>
            <rect width="20" height="13" fill="#ffffff" />
            {[0, 2, 4, 6, 8, 10, 12].map((y) => (
              <rect key={y} y={y} width="20" height="1" fill="#b31942" />
            ))}
            <rect width="8.5" height="7" fill="#0a3161" />
            {[1.4, 3.5, 5.6].map((x) =>
              [1.3, 3.5, 5.7].map((y) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="0.5" fill="#ffffff" />
              ))
            )}
          </>
        )}
      </svg>
    </span>
  );
}
