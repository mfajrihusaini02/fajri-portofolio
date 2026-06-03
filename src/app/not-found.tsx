
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <h2 className="not-found__title">404 - Page Not Found</h2>
        <p className="not-found__description">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button href="/">Return Home</Button>
      </div>
    </div>
  );
}
