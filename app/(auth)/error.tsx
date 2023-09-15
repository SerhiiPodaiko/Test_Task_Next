'use client'

import { CustomError } from '@components/error'

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <CustomError error={error} reset={reset} />
    )
}