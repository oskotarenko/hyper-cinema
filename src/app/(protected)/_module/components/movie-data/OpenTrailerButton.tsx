"use client";

import { PlayCircle } from "lucide-react";
import ReactPlayer from "react-player";
import Popup from "reactjs-popup";

import { Button } from "@/shared/ui/button";

type Props = {
  url: string;
};

export function OpenTrailerButton({ url }: Props) {
  return (
    // <>
    <Popup
      trigger={
        <div className="flex [&>button]:w-full">
          <Button variant="outline" icon={PlayCircle}>
            Watch Trailer
          </Button>
        </div>
      }
      modal
      closeOnEscape
      closeOnDocumentClick
      repositionOnResize
      className="modal"
    >
      <ReactPlayer url={url} volume={0.5} controls playing />
    </Popup>
    // </>
  );
}
