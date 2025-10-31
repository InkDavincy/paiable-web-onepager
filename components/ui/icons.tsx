// src/ui/icons.tsx
// Contient tous les logos et icônes SVG/IMG du site Paiable
// Ne pas exporter d'autres données (constantes, configs, etc.)

import React from 'react'

/* =======================================================
LOGOS
======================================================= */

export const PaiableLogo = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
): React.JSX.Element => <img src="/logos/paiable-logo.svg" alt="Paiable Logo" {...props} />

export const GeminiLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>): React.JSX.Element => (
  <img src="/logos/googlegemini.svg" alt="Google Gemini Logo" {...props} />
)

export const OpenAILogo = (props: React.ImgHTMLAttributes<HTMLImageElement>): React.JSX.Element => (
  <img src="/logos/openai.svg" alt="OpenAI Logo" {...props} />
)

export const ClaudeLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>): React.JSX.Element => (
  <img src="/logos/claude.svg" alt="Claude Logo" {...props} />
)

export const GroqLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>): React.JSX.Element => (
  <img src="/logos/Groq.svg" alt="Groq Logo" {...props} />
)

/* =======================================================
ICONES GÉNÉRALES
======================================================= */

// Feature Icons
export const InvoiceIcon = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)
export const ExpenseIcon = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
)
export const ProjectIcon = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
)
export const DashboardIcon = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
)

// HowItWorks Icons
export const UploadIcon = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    />
  </svg>
)
export const AIExtractIcon = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3v4M3 5h4M5 21v-4M3 19h4M19 3v4M17 5h4M19 21v-4M17 19h4"
    />
  </svg>
)
export const InsightsIcon = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
)
export const CheckIcon = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)
export const DownloadIcon = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
)
export const PlayIcon = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 12.002a.75.75 0 01-.671.745l-14.251 2.139a.75.75 0 01-.87-1.011l4.96-10.395a.75.75 0 011.332.02l4.959 7.438 3.52-1.556a.75.75 0 01.745.64"
    />
  </svg>
)
export const MenuIcon = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 6h16M4 12h16M4 18h16"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const XIcon = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 18L18 6M6 6l12 12"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/* =======================================================
                REGISTRE GLOBAL
                ======================================================= */
export const Icons = {
  // Logos (Image-based)
  PaiableLogo,
  GeminiLogo,
  OpenAILogo,
  ClaudeLogo,
  GroqLogo,
  // Icons (SVG-based)
  InvoiceIcon,
  ExpenseIcon,
  ProjectIcon,
  DashboardIcon,
  UploadIcon,
  AIExtractIcon,
  InsightsIcon,
  CheckIcon,
  DownloadIcon,
  PlayIcon,
  MenuIcon,
  XIcon,
}
