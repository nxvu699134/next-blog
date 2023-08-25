import { ComponentPropsWithoutRef } from "react";

interface PreCodeBlockProps extends ComponentPropsWithoutRef<"pre"> {
  "data-language"?: string;
  "data-theme"?: string;
}

const PreCodeBlock = (props: PreCodeBlockProps) => {
  const {
    "data-language": lang,
    "data-theme": theme,
    children,
    ...otherProps
  } = props;
  return (
    <pre
      data-language={lang}
      data-theme={theme}
      {...otherProps}
      className="whitespace-pre-wrap"
    >
      <label className="block uppercase">{lang}</label>
      {children}
    </pre>
  );
};

export default PreCodeBlock;
