import React from 'react'

export function useClipboard({ timeout = 2000 } = {}) {
    const [error, setError] = React.useState<Error | null>(null)
    const [copied, setCopied] = React.useState<boolean>(false)
    const [copyTimeout, setCopyTimeout] = React.useState<any>(null)

    const handleCopyResult = (value: boolean) => {
        clearTimeout(copyTimeout)
        setCopyTimeout(setTimeout(() => setCopied(false), timeout))
        setCopied(value)
    }

    const copy = (valueToCopy: any) => {
        if ('clipboard' in navigator) {
            navigator.clipboard
                .writeText(valueToCopy)
                .then(() => handleCopyResult(true))
                .catch((err) => setError(err))
        } else {
            setError(new Error('useClipboard: navigator.clipboard is not supported'))
        }
    }

    const reset = () => {
        setCopied(false)
        setError(null)
        clearTimeout(copyTimeout)
    }

    return { copy, reset, error, copied }
}

// function Demo() {
//   const clipboard = useClipboard({ timeout: 500 });

//   return (
//     <Button
//       color={clipboard.copied ? 'teal' : 'blue'}
//       onClick={() => clipboard.copy('Hello, world!')}
//     >
//       {clipboard.copied ? 'Copied' : 'Copy'}
//     </Button>
//   );
