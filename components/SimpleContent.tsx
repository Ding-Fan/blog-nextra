interface Props {
  item: any;
  className?: string;
}

const SimpleContent = ({ item, className }: Props) => {
  return <div className={className}>{item.content}</div>;
};

export default SimpleContent;
