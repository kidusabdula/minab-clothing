"use client";

import { toast } from "sonner";
import { Button, type ButtonProps } from "../ui/button";

/** A button for actions the demo doesn't perform: it says so instead of silently doing nothing. */
export default function DemoAction({ message, ...props }: ButtonProps & { message: string }) {
  return <Button {...props} onClick={() => toast(message)} />;
}
