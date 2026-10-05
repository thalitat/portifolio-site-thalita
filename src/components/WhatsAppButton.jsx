function WhatsAppButton({ copy }) {
  const whatsappUrl = `https://wa.me/5534998033208?text=${encodeURIComponent(copy.whatsappMessage)}`

  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={copy.whatsapp}
      title={copy.whatsapp}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.6l6.3-1.7A12.8 12.8 0 1 0 16 3.2Zm0 23.2c-2 0-4-.5-5.7-1.6l-.4-.2-3.7 1 1-3.6-.3-.5A10.3 10.3 0 1 1 16 26.4Zm5.7-7.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2.1-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.4 3.3c.2.2 2.2 3.4 5.3 4.7.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
