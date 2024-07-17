import { useRouter } from "next/router";
export default function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  return (
    <div>
      <h1>Detail Page</h1>
      <p>This is the detail page</p>
    </div>
  );
}
