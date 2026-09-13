import{useState,useEffect} from "react"

function useChessStats(username){
const[stats,setStats]=useState(null);
const[profile,setProfile]=useState(null);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(null);

useEffect(()=>{
    const fetchData=async()=>{
        try{
            const[profileRes,statsRes]=await Promise.all([
                fetch(`https://api.chess.com/pub/player/${username}`),
                fetch(`https://api.chess.com/pub/player/${username}/stats`)
            ])
            const profileData=await profileRes.json();
            const statsData=await statsRes.json();
            setProfile(profileData);
            setStats(statsData);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }
    fetchData();
}, [username]);

return { profile, stats, loading, error };
}
export default useChessStats