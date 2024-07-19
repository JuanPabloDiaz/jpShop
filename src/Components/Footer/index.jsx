const Footer = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearText =
    startYear === currentYear ? startYear : `${startYear} - ${currentYear}`;
  const developer = "Juan Díaz";

  return (
    <footer className="pb-4 text-center">
      <div>
        © {yearText}
        <span className="mx-1">•</span>
        Developed by
        <a
          href="http://jpdiaz.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Website developed by ${developer}`}
          className="pl-1 font-bold hover:underline hover:underline-offset-4"
        >
          {" "}
          {developer}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
