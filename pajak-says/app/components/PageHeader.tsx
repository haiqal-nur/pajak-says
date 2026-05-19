type PageHeaderProps = {
    label: string;
    title: string;
    description: string;
  };
  
  export default function PageHeader({ label, title, description }: PageHeaderProps) {
    return (
      <section className="bg-orange-50 px-8 pb-16 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg font-black text-orange-600">{label}</p>
          <h1 className="mt-3 text-5xl font-black text-slate-950 md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
            {description}
          </p>
        </div>
      </section>
    );
  }