function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bottom-0 left-0 w-full bg-gray-200 py-3 text-center mt-4 p-4">
      <p className="text-gray-500 ">
        Copyright &copy; TKandGshop {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
