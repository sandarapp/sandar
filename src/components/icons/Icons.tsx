import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

export function IconSearch(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconBook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M6.5 3.5h10A2.5 2.5 0 0 1 19 6v14.5a1 1 0 0 1-1.4.9c-1-.4-2.3-.9-3.6-.9H8a2.5 2.5 0 0 1-2.5-2.5V3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 7h7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconPeople(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M8 11a3.25 3.25 0 1 1 6.5 0A3.25 3.25 0 0 1 8 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 20a6.5 6.5 0 0 1 15 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M12 3 19 6.5V12c0 5-3.5 8.8-7 9.9C8.5 20.8 5 17 5 12V6.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.2 11 14l3.8-4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M4 12h13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrowLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M20 12H7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M11 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
