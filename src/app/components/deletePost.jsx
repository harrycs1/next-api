'use client'
import { useRouter } from "next/navigation"

export default function DeleteGymieButton({postId}) {
    const router = useRouter()
    
    async function handleClick() {
        try {
            await fetch(`/api/gymie/${postId}`, {
                method: 'DELETE'
            })
            router.refresh()
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <button onClick={handleClick}>Delete</button>
    )
}