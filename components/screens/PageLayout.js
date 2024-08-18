import PageTitle from "../text/PageTitle";

const PageLayout = ({ title, pageTitle, children }) => {
  return (
    <>
      <title>{title}</title>
      <section className="flex flex-col items-center justify-between p-24 min-h-[90vh]">
        <section className="flex flex-col md:flex-row py-8">
          <section className="flex flex-col items-center gap-8">
            <PageTitle title={pageTitle} />
            {children}
          </section>
        </section>
      </section>
    </>
  );
};

export default PageLayout;
