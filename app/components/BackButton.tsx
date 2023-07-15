export function BackButton({ position = "top-5 left-5", tooltipPos = 'tooltip-right' }: { position?: string, tooltipPos?: string }) {
  return (
    <div
      className={`fixed ${position} z-50 tooltip ${tooltipPos}`}
      data-tip={"Back to Homepage"}
    >
      <button
        className="btn btn-primary btn-circle btn-lg"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-narrow-left"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="9" y2="16" />
          <line x1="5" y1="12" x2="9" y2="8" />
        </svg>
      </button>
    </div>
  )
}