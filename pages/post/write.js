import { useRef } from "react";
import Layout from "../../components/Layout";

export default function Write() {
  const idRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = idRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (id && title && content) {
      fetch("/api/post/write", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      })
        .then((res) => {
          console.log(res);
          if (res.ok) {
            return res.json();
          }
          throw new Error("Fetch Error");
        })
        .then((data) => alert(data.message))
        .catch((e) => alert(`request error: ${e}`));
    }
  };
  return (
    <Layout>
      <h1>Write a Post</h1>
      <form onSubmit={handleSubmit}>
        <input ref={idRef} type="text" name="id" placeholder="id" required />
        <br />
        <input
          ref={titleRef}
          type="text"
          name="title"
          placeholder="title"
          required
        />
        <br />
        <textarea
          ref={contentRef}
          type="text"
          name="content"
          placeholder="content"
          required
        />
        <br />
        <input type="submit" value={"CREATE"} />
      </form>
    </Layout>
  );
}
