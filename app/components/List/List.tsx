interface ListProps {
  type: 'ul' | 'ol';
  children: React.ReactNode;
}

export const List = ({ type, children }: ListProps) => {
  if (type === 'ul') {
    return <ul className="list-disc list-inside mb-2">{children}</ul>;
  }
  return <ol className="list-decimal list-inside mb-2">{children}</ol>;
};
