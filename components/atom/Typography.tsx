export function H1({ className, children }: any) {
  return <h1 className={`${className} text-5xl`}>{children}</h1>;
}

export function H2({ className, children }: any) {
  return (
    <h2 className={`${className} text-[40px] leading-[56px]`}>{children}</h2>
  );
}

export function H3({ className, children }: any) {
  return (
    <h3 className={`${className} text-[32px] leading-[44px]`}>{children}</h3>
  );
}

export function Title({ className, children }: any) {
  return <p className={`${className} text-2xl`}>{children}</p>;
}

export function TitleMedium({ className, children }: any) {
  return <p className={`${className} text-xl`}>{children}</p>;
}

export function TitleSmall({ className, children }: any) {
  return <p className={`${className} text-lg`}>{children}</p>;
}

export function Body({ className, children }: any) {
  return <p className={`${className} text-base`}>{children}</p>;
}

export function BodySmall({ className, children }: any) {
  return <p className={`${className} text-sm`}>{children}</p>;
}

export function Caption({ className, children }: any) {
  return <p className={`${className} text-xs`}>{children}</p>;
}

export function SmallPrint({ className, children }: any) {
  return (
    <p className={`${className} text-[10px] leading-[16px]`}>{children}</p>
  );
}
