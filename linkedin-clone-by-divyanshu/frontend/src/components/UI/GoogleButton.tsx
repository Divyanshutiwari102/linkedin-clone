// src/components/UI/GoogleButton.tsx
import { FcGoogle } from "react-icons/fc";
import Button from "./Button";

type Props = {
  text?: string;
  onClick?: () => void;
};

export default function GoogleButton({ text = "Continue with Google", onClick }: Props) {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className="flex items-center justify-center gap-2"
    >
      <FcGoogle size={20} />
      {text}
    </Button>
  );
}
