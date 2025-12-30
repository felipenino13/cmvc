"use client";

import { Button } from "@/components/ui/button";

type Props = {
  targetId?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function ScrollToFormButton({
  targetId = "formContact",
  className,
  children = "More Info",
}: Props) {
  const scrollToForm = () => {
    const el = document.getElementById(targetId);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Button type="button" className={className} onClick={scrollToForm}>
      {children}
    </Button>
  );
}
