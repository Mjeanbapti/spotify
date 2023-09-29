import { Song } from "@/types"
import { useSupabaseClient } from "@supabase/auth-helpers-react"

const useLoadSong = (song: Song) => {
    const supabaseClient = useSupabaseClient();
    // const { supabaseClient } = useSessionContext();  // use this if you want to restrict unauthenticated users from playing songs

    if(!song){
        return '';
    }

    const { data: songData } = supabaseClient
        .storage
        .from('songs')
        .getPublicUrl(song.song_path);
        
    return songData.publicUrl;
}

export default useLoadSong;