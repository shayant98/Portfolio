import Title from "../Title";

const SectionContainer = ({ children, count, title, full }: SectionContainerProps) => {
  return (
    <section className={`flex flex-col  items-start ${count === 0 && "lg:justify-center"} ${full && "min-h-screen"} ${count !== 0 && count !== 1 && "mt-32 lg:mt-40"}`}>
      {count !== 0 && <Title count={count} title={title} />}
      {children}
    </section>
  );
};

interface SectionContainerProps {
  children: JSX.Element | JSX.Element[]
  count: number
  title?: string
  full?: boolean
}

export default SectionContainer;
