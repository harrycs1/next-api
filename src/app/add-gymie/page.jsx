'use client'
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddGymie() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const router = useRouter()

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleContentChange = (event) => {
        setContent(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            await fetch('api/add-gymie', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, content})
            })

            router.refresh()
        } catch (error) {
            console.log(error)
        }

        setTitle('')
        setContent('')
    }

    return (
        <main>
            <Link href="/">View Feed</Link>
            <h1 className="text-2xl">Add Gymie</h1>
            <form onSubmit={handleSubmit} className="text-red-500">
                <div>
                    <label>Title
                        <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        required
                        />
                    </label>
                    <label>Content
                        <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                        required
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
    )
}