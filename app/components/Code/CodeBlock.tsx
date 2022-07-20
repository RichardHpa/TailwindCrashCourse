import SyntaxHighlighter from 'react-syntax-highlighter';

interface CodeBlockProps {
  className: string;
  children: string;
}

export const CodeBlock = ({ className, children, ...props }: CodeBlockProps) => {
  const match = /language-(\w+)/.exec(className || '');

  if (!match || !match[1]) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  return (
    <SyntaxHighlighter
      className="mb-4 p-4 rounded-lg bg-veryLightGray dark:bg-gray-800"
      language={match[1]}
      PreTag="div"
      useInlineStyles={false}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  );
};
