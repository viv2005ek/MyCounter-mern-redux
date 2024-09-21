function Footer() {
  return (
    <>
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div>
            <a href="/" className="text-light mx-2 disabled">
              Privacy Policy
            </a>
            <a href="/" className="text-light mx-2">
              Terms of Service
            </a>
            <a href="/" className="text-light mx-2">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
