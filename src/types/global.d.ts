
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'aos' {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    offset?: number;
    delay?: number;
    disable?: boolean | (() => boolean);
  }

  interface AOS {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const aos: AOS;
  export default aos;
}