export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {children}
        <p>Route Group Layout</p>
        </>
  )
}