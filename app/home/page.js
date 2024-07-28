import Link from "next/link";
import Image from "next/image";
const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <div>
          <Image
            src="/profile.jpg"
            alt="Example Image"
            width={500} // Set the width of the image
            height={300} // Set the height of the image
          />
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Hello, I'm Sanjeev Kumar</h2>
          <p>I'm a Software Developer specializing in Next.js.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
