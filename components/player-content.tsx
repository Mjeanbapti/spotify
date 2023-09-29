"use client";

import { Song } from "@/types";
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';

import MediaItem from "./media-item";
import LikeButton from "./like-button";


interface PlayerContentProps {
    song: Song;
    songPath: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({
    song,
    songPath
}) => {
    const Icon = true ? BsPauseFill : BsPlayFill

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 h-full">
            <div className="flex justify-start w-full">
                <div className="flex items-center gap-x-4">
                    <MediaItem
                        data={song} />
                    <LikeButton songId={song.id} />
                </div>
            </div>
            <div className="
                flex
                md:hidden
                col-auto
                w-full
                justify-end
                items-center
            ">
                <div
                    onClick={() => { }}
                    className="
                        h-10
                        w-10
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        p-1
                        cursor-pointer
                    "
                >
                    <Icon />
                </div>
            </div>
        </div>
    )
}

export default PlayerContent