
export default function Details(props) {
    return (
      <div>

        <p>{props.post.title}</p>
        <p>{props.post.body}</p>
      </div>
    )
  }

  //hayde besta5dema ma3 yalle ta7et export async function getStaticProps(context) 
  export async function getStaticPaths(){
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    const res = await fetch(`http://localhost:3000/api/posts`);
    const data = await res.json();

    const paths = data.map(d => {
      return{
        params: {id: `${d.id}`}
      }
    })
    return{
      // paths: [
      //   {params : {id: 1}}
      // ]

      paths: paths,
      fallback: false
    }
  }
  

//badda tjib url : 1, 2, 3.....ma7al l id
//fini 2esta5dem hayde getServerSideProps(context) la7ala
//2aw besta5dem  export async function getStaticProps(context) ma3 yalle fo2: getStaticPaths()
  // export async function getServerSideProps(context) {
    export async function getStaticProps(context) {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    //I use my api that iam do in folder api/posts
    const res = await fetch(`http://localhost:3000/api/posts/${context.params.id}`);
    const data = await res.json();

    return {
      props: {
        post: data
      }
    }
  }
  

  // /posts / 1

  //pages => ba3mel route

  //component => ba3mel 2ay component 3ade