import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  haveAccess: z.boolean(),
});

type UserFormData = z.infer<typeof userSchema>;

export function AddUserForm({
  onSubmit,
}: {
  onSubmit: (data: UserFormData) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add user</h1>
      <br />
      <label htmlFor="name">Name</label>
      <Input
        id="name"
        {...register("name", { required: true })}
        className="w-[300px]"
      />
      {errors.name && <span>This field is required</span>}
      <br />
      <label htmlFor="age">Age</label>
      <Input
        id="age"
        type="number"
        {...register("age", { required: true, valueAsNumber: true })}
        className="w-[300px]"
      />
      {errors.age && <span>This field is required</span>}
      <br />
      <input type="checkbox" id="haveAccess" {...register("haveAccess")} />
      <label htmlFor="haveAccess"> Have access</label>
      <br />
      <br />
      <Button type="submit">Add user</Button>
    </form>
  );
}
