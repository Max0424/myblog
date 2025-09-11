export default function Home() {
  return (
    <div className="font-serif text-[15px] leading-relaxed text-white px-8 py-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Welcome to Page</h1>
      
      <p className="whitespace-pre-wrap mb-4">
        Hey there! Welcome to my blog-portfolio page. Here, I’ll be sharing my journey into the world of IT. 
        If that sounds interesting — stick around! 😊
      </p>

      <p className="mb-4">
        I’m Max, a 21-year-old who decided to "break into tech." My primary tech stack started with Java, 
        but over time, I’ve been exploring other programming languages and frameworks to expand my skills.
      </p>

      <p className="mb-4">
        Below you’ll find a collection of projects I’ve built myself:
      </p>

      <p className="mb-4">
        <a href="https://enot.onrender.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
          https://enot.onrender.com
        </a>
      </p>
      <p className="mb-4">
        <a href="https://inboxcanary.app" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
          https://inboxcanary.app 
        </a> (In development stage)
      </p>


      <p>
        You might be wondering: “That’s it? What are these projects? How were they made?”
        Well, don't worry, I'll explain everything but in another post. You can find it in the sidebar to your left.
        Btw, there will be more posts in the future, not only about programming but also about cybersecurity 
        (because this is also my hobby).
      </p>
    </div>
  );
}