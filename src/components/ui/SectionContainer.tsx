type SectionContinuerProps = {
  children: React.ReactNode;
};

function SectionContainer({ children }: SectionContinuerProps) {
  return <div className=" mx-auto max-w-[120rem] p-12 ">{children}</div>;
}

export default SectionContainer;
