/**
 * Global SVG filter definitions for photoreal text effects.
 *
 * feSpecularLighting calculates real specular highlights on a bumpy surface,
 * which gives text genuine 3D-bevel light (not Photoshop text-shadow tricks).
 *
 * Apply via CSS `filter: url(#hammered-canvas-filter)`.
 *
 * Render this component once in the root layout (visually hidden).
 */
export default function SvgFilters() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      <defs>
        {/* Hammered 3D bevel — for the canvas banner (cream paint hammered into red) */}
        <filter id="hammered-canvas-filter" x="-20%" y="-20%" width="140%" height="140%">
          {/* Slight blur to create a soft bevel edge */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
          {/* Lighting: top-left key light, warm white */}
          <feSpecularLighting
            in="blur"
            surfaceScale="4"
            specularConstant="1.5"
            specularExponent="22"
            lightingColor="#fff5d6"
            result="spec"
          >
            <feDistantLight azimuth="135" elevation="55" />
          </feSpecularLighting>
          {/* Mask the spec to text only */}
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specMasked" />
          {/* Combine spec highlight over the original text */}
          <feComposite in="specMasked" in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        {/* Hammered chiseled stone — for headlines on brick / dark walls */}
        <filter id="hammered-stone-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur" />
          <feSpecularLighting
            in="blur"
            surfaceScale="5"
            specularConstant="1.8"
            specularExponent="20"
            lightingColor="#ffe4b8"
            result="spec"
          >
            <feDistantLight azimuth="120" elevation="60" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specMasked" />
          <feComposite in="specMasked" in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        {/* Branded leather burn — warm scorch highlights */}
        <filter id="hammered-leather-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.8" result="blur" />
          <feSpecularLighting
            in="blur"
            surfaceScale="3"
            specularConstant="1.2"
            specularExponent="18"
            lightingColor="#d4a373"
            result="spec"
          >
            <feDistantLight azimuth="130" elevation="50" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specMasked" />
          <feComposite in="specMasked" in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        {/* Paper letterpress deboss — paper-color highlights */}
        <filter id="hammered-paper-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
          <feSpecularLighting
            in="blur"
            surfaceScale="2"
            specularConstant="0.9"
            specularExponent="16"
            lightingColor="#fefae0"
            result="spec"
          >
            <feDistantLight azimuth="135" elevation="65" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specMasked" />
          <feComposite in="specMasked" in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        {/* Painted-aged — gives text wobbly hand-painted edges via displacement */}
        <filter id="painted-aged-filter" x="-10%" y="-10%" width="120%" height="120%">
          {/* Generate rough paint noise */}
          <feTurbulence baseFrequency="0.04 0.06" numOctaves="2" seed="3" result="noise" />
          {/* Displace the source slightly */}
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" />
        </filter>

        {/* Combined: hammered + painted (rough edges) — most photoreal */}
        <filter id="hammered-painted-canvas" x="-20%" y="-20%" width="140%" height="140%">
          {/* Rough edges via displacement */}
          <feTurbulence baseFrequency="0.05" numOctaves="2" seed="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" result="rough" />
          {/* Then 3D bevel via specular lighting */}
          <feGaussianBlur in="rough" stdDeviation="1.5" result="blur" />
          <feSpecularLighting
            in="blur"
            surfaceScale="5"
            specularConstant="1.6"
            specularExponent="25"
            lightingColor="#fff5d6"
            result="spec"
          >
            <feDistantLight azimuth="135" elevation="55" />
          </feSpecularLighting>
          <feComposite in="spec" in2="rough" operator="in" result="specMasked" />
          <feComposite in="specMasked" in2="rough" operator="arithmetic" k1="0" k2="1" k3="1.2" k4="0" />
        </filter>
      </defs>
    </svg>
  )
}
