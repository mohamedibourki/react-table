import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogDemo({
  open,
  setOpen,
  showButton,
  title,
  description,
  children,
  buttonText,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  showButton: boolean;
  title: string;
  description: string;
  children: React.ReactNode;
  buttonText: string;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {showButton && (
        <DialogTrigger asChild>
          <Button variant="outline">{title}</Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">{children}</div>
        <DialogFooter>
          <Button type="submit">{buttonText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
