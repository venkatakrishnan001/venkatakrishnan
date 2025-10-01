export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Venkata Krishnan S. All rights reserved.</p>
          <p className="mt-2">
            Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};
