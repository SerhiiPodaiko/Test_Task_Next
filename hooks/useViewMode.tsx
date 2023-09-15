'use client'
import { useEffect, useState } from 'react'

type ViewMode = 'row' | 'list'

const initialViewMode = localStorage.getItem('viewMode') as ViewMode || 'row'

export const useViewMode = () => {
    const [viewMode, setViewMode] = useState<ViewMode>(initialViewMode)

    useEffect(() => {
        if (localStorage.getItem('viewMode')) {
            setViewMode(localStorage.getItem('viewMode') as ViewMode)
        }
    }, [])

    const toggleViewMode = () => {
        setViewMode(prevMode => {
            const newMode = prevMode === 'row' ? 'list' : 'row'

            localStorage.setItem('viewMode', newMode)
            return newMode;
        })
    }

    return { viewMode, toggleViewMode }
}