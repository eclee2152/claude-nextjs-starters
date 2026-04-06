import { GitBranch, X } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Next Starter Kit. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GitBranch className="h-4 w-4" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
