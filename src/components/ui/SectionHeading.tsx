'use client'

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const isLeft = align === 'left'

  return (
    <div className={`mb-16 ${isLeft ? '' : 'w-full'}`}>

      <div
        className={`
          
          bg-blue-500
          px-8
          py-8
          shadow-lg
          lg:px-16
          ${isLeft ? 'text-left' : 'text-center'}
        `}
      >
        {badge && (
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
            {badge}
          </span>
        )}

        <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        {description && (
          <p
            className={`mt-6 text-lg leading-8 text-blue-50 ${
              isLeft ? 'max-w-2xl' : 'mx-auto max-w-3xl'
            }`}
          >
            {description}
          </p>
        )}
      </div>

    </div>
  )
}