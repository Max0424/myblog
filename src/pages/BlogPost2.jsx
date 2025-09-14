export default function BlogPost2() {
  return (
    <div className="font-serif text-[15px] leading-relaxed text-white px-8 py-6 max-w-3xl">
      
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">My first project</h1>
      
      <p className="whitespace-pre-wrap mb-4">
        Heyy, if you are reading this then it means you are interested to know more about my first project. As I said in the previous blog post, for the first time ever I decided to build a real-world project. The amount of new things I learned was overwhelming, but we all start somewhere.
      </p>
      
      <p className="whitespace-pre-wrap mb-4">
        Ok so the first step was to choose what exactly I'm gonna build. I searched quite a lot but the ideas given by the internet were rather boring. To-do list, weather app, etc. The ideas that were more interesting also were pretty complicated for a first project. So I thought: "Ok so what is expected from a junior Java developer?". Database integration, CRUD functionality, REST APIs...
      </p>
      
      <p className="whitespace-pre-wrap mb-4">
        I need to create something with this... Something fun... Yess I got it, let's build a raccoon web app where you can upload pictures of raccoons, give them funny usernames and everyone will see it! Moreover, let's slap an enterprise-level programming language on it, which is Java, and pair it with several "Springs": Spring Boot, Spring Web, Spring Data JPA, Spring Security. For the database, I will use PostgreSQL. It will store the raccoon photos that users upload. But for the photos to be uploaded I will also create a local image upload support.
      </p>
      
      <p className="whitespace-pre-wrap mb-4">
        Ok so now users can create a post. But there's a problem. Anyone can create, and anyone can delete a post. Even if it's not theirs. And that's why I mentioned Spring Security earlier. It will handle user authentication and authorization, so you can delete only the posts that you created. Also, I will create an admin account for myself so that I can delete anyone's post, just in case.
      </p>
      
      <p className="whitespace-pre-wrap mb-4">
        Basically at this point it's similar to Instagram (should've named it Raccoongram 😄). Anyways, I named it Enot Adoption Center. Enot means raccoon in Russian, the name is short and not familiar for most people and that would mean it's more unique making it easier to memorize. I could find a boring corporate name for it, something like: "Adoption Registry Application" or "Animal Shelter Management System". But c'mon, it's boring and lifeless. Using a corporate programming language doesn't mean naming the project in corporate style.
      </p>
      
      <p className="whitespace-pre-wrap mb-4">
        There's also a cool feature I didn't mention yet. I integrated an AI assistant, which can answer any question related to raccoons. I will show you a photo of how it looks like:
      </p>

      <div className="mb-4">
        <img 
          src="/Screenshot1.png" 
          alt="AI Assistant Screenshot" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      
      <p className="whitespace-pre-wrap mb-4">
        In my opinion, it's pretty good for a first project. Could the design be better? Yes, it could. But remember that my main goal was the backend with Java, because that's what I studied for. For the frontend, I just used plain HTML, CSS, JS without the frameworks.
      </p>
      
      <p className="whitespace-pre-wrap mb-4">
        So with the project working it was time to deploy it. Because saying "it works on my machine" is not enough, right? I needed to make it accessible to the world. I chose Render as my hosting platform because it offers a free tier. After some time figuring how everything works, I finally deployed my raccoon web app. How exciting! The only thing is, after 15 minutes of inactivity, Render sends it to sleep. And waking the app again by just visiting the URL takes time. I wasn't happy with it. Imagine a recruiter visiting my app just to see a loading screen..😑 So I decided to use a server that will ping the app every 5 minutes to keep it awake. After some time, for the sake of convenience I just upgraded to a paid plan. Could've done it directly, but my curiosity wanted to first ping it with a server.
      </p>
      
      <p className="whitespace-pre-wrap mb-4">
        So that's it for today! You have seen more in detail how I built this project. Stay tuned for more posts!
      </p>
    
    </div>
  );
}