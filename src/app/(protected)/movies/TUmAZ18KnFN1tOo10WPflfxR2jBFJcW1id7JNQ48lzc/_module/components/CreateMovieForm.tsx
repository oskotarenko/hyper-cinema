"use client";

import {
  CalendarDays,
  CaseSensitive,
  ChefHat,
  Clock3,
  Drama,
  ImageIcon,
  Map,
  MonitorPlay,
  Newspaper,
  Plus,
  ShieldAlert,
  UserRound,
  Video,
} from "lucide-react";

import { createMovie } from "@/actions/movies/create-movie";
import { extractResponse } from "@/shared/services/response.service";
import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form";
import { Input, InputFile } from "@/shared/ui/input";

export function CreateMovieForm() {
  const handleCreateMovie = async (formData: FormData) => {
    const response = await createMovie(formData);
    extractResponse(response);
  };

  return (
    <div className="w-full tablet:max-w-[400px]">
      <Form action={handleCreateMovie} title="Create Movie">
        <Input type="text" name="title" autoComplete="off" placeholder="Title" Icon={CaseSensitive} />
        <Input type="text" name="trailer" placeholder="Trailer URL" autoComplete="off" Icon={MonitorPlay} />
        <Input type="text" name="genres" placeholder="Genres" autoComplete="off" Icon={Drama} />
        <Input type="text" name="actors" placeholder="Actors" autoComplete="off" Icon={UserRound} />
        <Input type="text" name="description" placeholder="Description" autoComplete="off" Icon={Newspaper} />
        <Input type="text" name="year" placeholder="Production Year" autoComplete="off" Icon={CalendarDays} />
        <Input type="text" name="duration" placeholder="Movie Duration (in minutes)" autoComplete="off" Icon={Clock3} />
        <Input type="text" name="country" placeholder="Country of Production" autoComplete="off" Icon={Map} />
        <Input type="text" name="studio" placeholder="Production Studio" autoComplete="off" Icon={Video} />
        <Input type="text" name="director" placeholder="Production Director" autoComplete="off" Icon={ChefHat} />
        <Input type="text" name="restrictions" placeholder="Age Restrictions" autoComplete="off" Icon={ShieldAlert} />
        <InputFile name="poster" accept="image/*" Icon={ImageIcon} />
        <Button variant="filled" type="submit">
          <Plus />
          Create new Movie
        </Button>
      </Form>
    </div>
  );
}
