
// /posts

import Link from "next/link";

// /posts/hamada
export default function Posts(props) {
    return (
      <div>
        {/* {console.log(props)} */}
        Posts Component 1
        {props.posts.map(post => (          
       <div key={post.id}>
         <Link href={`/posts/${post.id}`}>
            {post.title}
            </Link>
       </div>
     ))}
      </div>
    )
  }


  export async function getStaticProps(){
    // const req = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const req = await fetch("http://localhost:3000/api/posts");
    const data = await req.json();

    return {
      props: {
        posts: data
      }
    }
  }

  
//getStaticProps : bjib data w bwafera props lal comp yalle ana fiha
//getStaticPath : fetch data w ba3mela dynamic generate lal path bye3temed 3al data : /posts/1,2,3,4
//getServerSideProps : bjib kel marra data bena2an 3al request

  // /posts  [posts.js || /posts/index.js ]
  