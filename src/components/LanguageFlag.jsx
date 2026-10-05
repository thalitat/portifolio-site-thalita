function LanguageFlag({ code }) {
  return (
    <svg className="language-flag-icon" viewBox="0 0 36 24" aria-hidden="true">
      {code === 'pt' && (
        <>
          <rect width="36" height="24" fill="#009739" />
          <path d="M18 3 32 12 18 21 4 12Z" fill="#ffdf00" />
          <circle cx="18" cy="12" r="5.5" fill="#002776" />
          <path d="M13 11.6c3.5-.7 7.1.2 10 2.5" fill="none" stroke="#fff" strokeWidth="1" />
        </>
      )}
      {code === 'en' && (
        <>
          <rect width="36" height="24" fill="#fff" />
          {Array.from({ length: 7 }, (_, stripe) => (
            <rect
              key={stripe}
              y={stripe * (48 / 13)}
              width="36"
              height={24 / 13}
              fill="#b22234"
            />
          ))}
          <rect width="16" height="13" fill="#3c3b6e" />
          {Array.from({ length: 9 }, (_, star) => (
            <circle
              key={star}
              cx={2.5 + (star % 3) * 5}
              cy={2.3 + Math.floor(star / 3) * 4}
              r="0.8"
              fill="#fff"
            />
          ))}
        </>
      )}
      {code === 'es' && (
        <>
          <rect width="36" height="6" fill="#aa151b" />
          <rect y="6" width="36" height="12" fill="#f1bf00" />
          <rect y="18" width="36" height="6" fill="#aa151b" />
        </>
      )}
    </svg>
  )
}

export default LanguageFlag
