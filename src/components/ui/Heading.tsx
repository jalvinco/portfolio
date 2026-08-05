type HeadingProps = {
  title: string;
};

function Heading({
  title,
}: HeadingProps) {
  return <h2>{title}</h2>;
}

export default Heading;