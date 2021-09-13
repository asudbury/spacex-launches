import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface textHighlighterProps {
  language: string;
  text: string;
}

export default function TextHighlighter({
  language,
  text
}: textHighlighterProps): JSX.Element {
  return (
    <>
      <SyntaxHighlighter
        language={language}
        style={anOldHope}
        showLineNumbers={false}
        wrapLines
        wrapLongLines
      >
        {text}
      </SyntaxHighlighter>
    </>
  );
}
