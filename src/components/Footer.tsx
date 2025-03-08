import ethRwandaLogo from "../assets/eth-rwanda-logo.png";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            <img
              src={ethRwandaLogo}
              alt="EThereum Rwanda Logo"
              className="w-10 h-10 mr-2"
            />
            ETH Rwanda
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://x.com/_ethrwanda"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              X
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#initiatives"
              className="opacity-60 hover:opacity-100"
            >
              Initiatives
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#gallery"
              className="opacity-60 hover:opacity-100"
            >
              Gallery
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#interviews"
              className="opacity-60 hover:opacity-100"
            >
              Interviews
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://faucet.ethrwanda.rw"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Faucet
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://chat.whatsapp.com/KYkYE8C2VUBCvM1gv7mQq8"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>&copy; 2025 ETH Rwanda</h3>
      </section>
    </footer>
  );
};
