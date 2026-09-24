/* The wordmark from himateja.in: eight letters cut from two blues. Path data is the original.
   Each moving part has a class the entrance animation targets (see Home.tsx). */

const DARK = '#5aa2e0'
const LIGHT = '#6cb6f5'

const Name = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4600 1000" className={className} aria-label="Himateja">
    <g>
      <path className="h1" fill={DARK} d="m345.182,218.324,214.196,0,0,550-214.196,0z" />
      <path className="h2" fill={LIGHT} d="m601.458,218.324,214.196,0,0,550-214.196,0z" />
    </g>
    <g className="i">
      <path fill={DARK} d="m883.18,223.405,214.249,0,0,544.916-214.249,0z" />
      <path fill={LIGHT} d="m883.18,223.405,214.196,0,0.04,294.046-214.238-142.757z" />
    </g>
    <g>
      <path className="mRight" fill={LIGHT} d="m1175.15,767.063,432.502,1.2327-0.522-549.971z" />
      <path
        className="mLeft"
        fill={DARK}
        d="m1607.64,768.323-432.381-0.65419,0.1746-549.344c144.068,183.333,288.137,366.665,432.205,550z"
      />
    </g>
    <g className="a">
      <path fill={DARK} d="m1667.15,767.99,248.78-547.444,248.33,547.777z" />
      <path fill={LIGHT} d="m1808.21,457.549,107.68-237.003,186.45,410.95z" />
    </g>
    <g>
      <path
        className="tBot"
        fill={LIGHT}
        d="m2542.32,218.381,0,549.943-214.228,0,0-549.887c214.193,0-0.035,0.0564,214.193-0.11295z"
      />
      <path className="tTop" fill={DARK} d="m2191.61,424.221,0-205.897,487.205,0,0,205.897z" />
    </g>
    <g>
      <path
        className="e"
        fill={LIGHT}
        d="m3177.97,768.32c-0.1707-142.265,0-171.448,0-219.998h-101.618v-132h-127.024c0.0002-21.9973,0.0001-0.0101,0-21.9993h228.643v-175.999l-431.818,0.88869-0.095,549.111z"
      />
      <path className="eBot" fill={DARK} d="m2746.06,542.031,432.313,0,0,226.293-432.313,0z" />
    </g>
    <g>
      <path className="jLeft" fill={LIGHT} d="m3249.02,474.31,237.671,74.1641,0,219.564-237.671-74.1641z" />
      <path className="jRight" fill={DARK} d="m3484.44,218.488,236.264-0.16417,0,444.975-235.451,105.025z" />
    </g>
    <g className="ar">
      <path fill={DARK} d="m3800,767.988,248.78-547.444,248.33,547.777z" />
      <path fill={LIGHT} d="m3941.06,457.547,107.68-237.003,186.45,410.95z" />
    </g>
  </svg>
)

export default Name
