import React from 'react';

interface ParagraphsProps {
  paragraphProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >;
  paragraphs?: string[];
}

const Paragraphs: React.FC<ParagraphsProps> = ({ paragraphProps = {}, paragraphs = [] }) => {
  if (!paragraphs) return null;

  return (
    <>
      {paragraphs.map((text, index) => (
        <p
          key={index}
          dangerouslySetInnerHTML={{
            __html: text || '',
          }}
          {...paragraphProps}
        ></p>
      ))}
    </>
  );
};

export default Paragraphs;
